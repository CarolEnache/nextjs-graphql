import { makeSchema } from 'nexus';
import * as typeDefs from './typeDefs';
import path from 'path';

const schema = makeSchema({
  types: [typeDefs],
  outputs: {
    typegen: path.join(process.cwd(), 'generated/nexus-typegen.ts'),
    schema: path.join(process.cwd(), 'generated/schema.graphql'),
  },
});

export default schema;
