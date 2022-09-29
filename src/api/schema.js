import { gql } from 'apollo-server-express';
import { getPeople } from './functions/person.js'

const typeDefs = gql ` 
  type Person {
    name: String!
    height: String!
    mass: String!
    gender: String!
    homeworld: String!
  }
  type Query { 
    getPeople (page: String!): [Person] 
  } 
`
const resolvers = { 
  Query: { 
    getPeople: (parent, args) => { 
      return getPeople(args.page);
    }, 
  }, 
} 

export {typeDefs, resolvers};