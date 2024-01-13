import Link from 'next/link';

import { createApolloClient } from "../graphql/apollo-client";
import { GetAllProductsQuery } from '../graphql/queries';

export async function getServerSideProps() {
  const client = createApolloClient();
  const { data } = await client.query({ query: GetAllProductsQuery });

  return {
    props: {
      allProducts: data.allProducts,
    },
  }
}

export default function Home({ allProducts }) {
  return (
    <div>
      <div>
        {allProducts.map((product) => (
          <div key={product.id}>
            <Link href={`/product/${product.id}`}>
              <a>{product.brand}</a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}