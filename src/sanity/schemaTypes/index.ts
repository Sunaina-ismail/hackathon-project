import { type SchemaTypeDefinition } from 'sanity'
import { productSchema } from './product'
import { order } from './order'
import { customer } from './customer'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [productSchema, order, customer],
}
