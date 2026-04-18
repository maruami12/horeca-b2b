import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {schemaTypes} from './src/sanity/schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'Horeca B2B',

  // აქ პირდაპირ ჩავწერეთ შენი მონაცემები
  projectId: '6nnyfgdy',
  dataset: 'production',

  basePath: '/studio',
  plugins: [deskTool()],
  schema: {
    types: schemaTypes,
  },
})