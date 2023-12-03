import { ApolloClient, InMemoryCache } from '@apollo/client'

// const API_PROD = 'https://my-cv-cms.onrender.com/graphql'

export const client = new ApolloClient({
  uri: 'http://localhost:1337/graphql',
  cache: new InMemoryCache(),
})
