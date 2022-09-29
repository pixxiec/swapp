import * as dotenv from 'dotenv'
dotenv.config()

import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import { ApolloServer } from 'apollo-server-express';

import {typeDefs,resolvers} from './schema.js';

const server = new ApolloServer({ typeDefs, resolvers}); 

const app = express(); 
app.use(bodyParser.json()); 
app.use('*', cors()); 

await server.start();

server.applyMiddleware({ app }); 

app.listen(process.env.PORT, () => {
    console.log(`GraphQL API is running on port ${process.env.PORT}!`);
});
