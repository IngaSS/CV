import { InMemoryCacheConfig } from '@apollo/client'

export const cache: InMemoryCacheConfig = {
  typePolicies: {
    Query: {
      fields: {},
    },
  },
}
