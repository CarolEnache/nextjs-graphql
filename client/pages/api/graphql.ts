import { ApolloServer } from 'apollo-server-micro'
import Cors from 'micro-cors';

import schema from '../../schema';

const cors = Cors({
  allowMethods: ['POST', 'OPTIONS'],
  allowHeaders: ['Content-Type', 'Authorization'],
  origin: '*',
});

const apolloServer = new ApolloServer({ schema });

const startServer = apolloServer.start();

async function handler(req, res) {
  if (req.method === 'OPTIONS') {
    res.end();
    return false;
  }

  await startServer;
  await apolloServer.createHandler({
    path: '/api/graphql',
  })(req, res);
}

export const config = {
  api: {
    bodyParser: false,
  },
};

export default cors(handler);

