import fs from 'node:fs/promises'
import fsSync from 'node:fs'
import path from 'node:path'
import crypto from 'node:crypto'
import vm from 'node:vm'
import {createClient} from '@sanity/client'

// --- აქ ჩავწერე შენი მონაცემები პირდაპირ ---
const PROJECT_ID = "6nnyfgdy"
const DATASET = "production"
const TOKEN = "skEUkqubPDrghcBZ1SVgClTOwAlc3JDYJUaFuoELXIHdHxWAGVUIz3m3YNWG6vEcjV2mQrR6mApcvjtEn22V5da7ymp6px4bBshHUlvL9Dsn2JgO6roUGGkNRihBPdo02hhky7ZTXg5jMz0YwyOqdEyY5KLSkrOQqWddlEHxiHLcSyyfKHuz"
// ---------------------------------------

const DRY_RUN = process.argv.includes('--dry-run')

const client = createClient({
  projectId: PROJECT_ID,
  dataset: DATASET,
  apiVersion: '2025-01-01',
  token: TOKEN,
  useCdn: false,
})

function resolvePublicImagePath(imgPath) {
  if (!imgPath) return null
  const raw = String(imgPath).trim()
  if (!raw) return null
  const rel = raw.startsWith('/') ? raw.slice(1) : raw
  return path.join(process.cwd(), 'public', rel)
}

async function fileExists(filePath) {
  try {
    await fs.access(filePath)
    return true
  } catch {
    return false
  }
}

function extractKaArray(sourceText) {
  const kaStart = sourceText.indexOf('KA: [')
  if (kaStart === -1) throw new Error('Could not find `KA: [` in products-section.tsx')
  const arrayStart = sourceText.indexOf('[', kaStart)
  let i = arrayStart, depth = 0, inString = false, stringQuote = null, escaped = false
  for (; i < sourceText.length; i++) {
    const ch = sourceText[i]
    if (inString) {
      if (escaped) { escaped = false; continue }
      if (ch === '\\') { escaped = true; continue }
      if (ch === stringQuote) { inString = false; stringQuote = null }
      continue
    }
    if (ch === '"' || ch === "'") { inString = true; stringQuote = ch; continue }
    if (ch === '[') depth++
    if (ch === ']') { depth--; if (depth === 0) return sourceText.slice(arrayStart, i + 1) }
  }
  throw new Error('Failed to parse array')
}

function evaluateArrayLiteral(arrayLiteral) {
  const context = vm.createContext({})
  const script = new vm.Script(`(${arrayLiteral})`)
  return script.runInContext(context, {timeout: 500})
}

function parsePriceToNumber(price) {
  if (price == null) return null
  const cleaned = String(price).replace(/[₾,]/g, s => s === ',' ? '.' : '').replace(/[^\d.]/g, '')
  const n = Number.parseFloat(cleaned)
  return Number.isFinite(n) ? n : null
}

function stableIdForProduct(p) {
  const raw = `${p.name}::${p.category ?? ''}`
  return `product_${crypto.createHash('sha1').update(raw).digest('hex').slice(0, 12)}`
}

async function main() {
  try {
    const filePath = path.join(process.cwd(), 'src/app/components/products-section.tsx')
    const text = await fs.readFile(filePath, 'utf8')
    const products = evaluateArrayLiteral(extractKaArray(text))

    console.log(`🚀 Found ${products.length} products. Starting migration...`)

    let ensuredDocs = 0, ensuredImages = 0, failed = 0

    for (const p of products) {
      const _id = stableIdForProduct(p)
      const doc = { _id, _type: 'product', name: p.name, category: p.category, price: parsePriceToNumber(p.price), description: '' }

      if (DRY_RUN) { ensuredDocs++; continue }

      try {
        await client.createIfNotExists(doc)
        ensuredDocs++
        
        const localImagePath = resolvePublicImagePath(p.img)
        if (localImagePath && await fileExists(localImagePath)) {
          const asset = await client.assets.upload('image', fsSync.createReadStream(localImagePath))
          await client.patch(_id).set({ image: { _type: 'image', asset: { _type: 'reference', _ref: asset._id } } }).commit()
          ensuredImages++
          console.log(`✅ ${p.name}: Done`)
        } else {
          console.log(`⚠️ ${p.name}: No image found`)
        }
      } catch (err) {
        console.error(`❌ Error for ${p.name}:`, err.message)
        failed++
      }
    }
    console.log(`\n🎉 Finish! Processed: ${products.length}, Success: ${ensuredDocs}, Images: ${ensuredImages}, Failed: ${failed}`)
  } catch (err) {
    console.error("Fatal error:", err.message)
  }
}

main()