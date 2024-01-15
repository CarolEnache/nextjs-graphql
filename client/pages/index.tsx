import Link from 'next/link';

import { createApolloClient } from "../graphql/apollo-client";
import { GetAllProductsQuery } from '../graphql/queries';
import { Home } from '../styles/globals';

export async function getServerSideProps() {
  const client = createApolloClient();
  const { data } = await client.query({ query: GetAllProductsQuery });

  return {
    props: {
      allProducts: data.allProducts,
    },
  }
}

export default function HomePage({ allProducts }) {
  return (
    <Home>
      {allProducts.map((product) => (
        <div key={product.id}>
          Please click on the brand to see the product details
          <Link href={`/product/${product.id}`}>
            <h1>{product.brand}</h1>
          </Link>
        </div>
      ))}
    </Home>
  )
}