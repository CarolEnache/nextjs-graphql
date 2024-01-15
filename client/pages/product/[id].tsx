import { useState } from 'react';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';

import { GetProductQuery } from '../../graphql/queries';
import { Header } from '../../components/header';
import { Hero } from '../../components/hero';
import { Description } from '../../components/description';
import { Specifications } from '../../components/specifications';
import { Footer } from '../../components/footer';

export default function ProductPage() {
  const [currentQuantity, setCurrentQuantity] = useState(1);
  const [basketQuantity, setBasketQuantity] = useState(0);
  const router = useRouter();
  const { id } = router.query;

  const { data, loading, error } = useQuery(GetProductQuery, {
    variables: { id },
    skip: !id,
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const Product = data?.Product;

  return (
    <>
      <Header basketQuantity={basketQuantity} />
      <Hero
        product={Product}
        currentQuantity={currentQuantity}
        setCurrentQuantity={setCurrentQuantity}
        setBasketQuantity={setBasketQuantity}
      />
      <Description description={Product?.description} />
      <Specifications product={Product} />
      <Footer />
    </>
  );
}
