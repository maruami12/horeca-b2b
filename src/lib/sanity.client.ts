import {createClient} from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET

if (!projectId) {
  throw new Error('Missing NEXT_PUBLIC_SANITY_PROJECT_ID')
}
if (!dataset) {
  throw new Error('Missing NEXT_PUBLIC_SANITY_DATASET')
}

export const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion: '2025-01-01',
  useCdn: true,
})

const builder = imageUrlBuilder(sanityClient)

export function urlForImage(source: unknown) {
  return builder.image(source)
}

export type ProductListItem = {
  _id: string
  name: string
  image?: unknown
  category?: string
  price?: number
  description?: string
}

export const allProductsQuery = /* groq */ `*[_type == "product"]|order(_createdAt desc){
  _id,
  name,
  image,
  category,
  price,
  description
}`

