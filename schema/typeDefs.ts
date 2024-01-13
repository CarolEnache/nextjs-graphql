import { extendType, nonNull, objectType } from 'nexus';

import { END_POINT } from '../constants';
import { GetAllProductsQuery, GetProductQuery } from '../graphql/queries';

export const Product = objectType({
  name: 'Product',
  definition(t) {
    t.nonNull.id('id');
    t.string('name');
    t.string('power');
    t.string('description');
    t.int('price');
    t.int('quantity');
    t.string('brand');
    t.int('weight');
    t.int('height');
    t.int('width');
    t.int('length');
    t.string('model_code');
    t.string('colour');
    t.string('img_url');
  },
});

export const ProductQuery = extendType({
  type: 'Query',
  definition(t) {
    t.field('Product', {
      type: Product,
      args: {
        id: nonNull('ID'),
      },
      resolve: async (_root, args) => {
        try {
          const response = await fetch(END_POINT, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              query: GetProductQuery,
              variables: { id: args.id },
            }),
          });

          if (!response.ok) {
            throw new Error('Network response was not ok');
          }

          const jsonResponse = await response.json();
          return jsonResponse.data.Product;
        } catch (error) {
          console.error('Error fetching data: ', error);
          return {};
        }
      },
    });
  },
});

export const AllProductsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.list.field('allProducts', {
      type: Product,
      resolve: async () => {
        try {
          const response = await fetch(END_POINT, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              query: GetAllProductsQuery,
            }),
          });

          if (!response.ok) {
            throw new Error('Network response was not ok');
          }

          const jsonResponse = await response.json();
          return jsonResponse.data.allProducts;
        } catch (error) {
          console.error('Error fetching data: ', error);
          return {};
        }
      },
    });
  },
});
