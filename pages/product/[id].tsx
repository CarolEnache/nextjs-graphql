import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';
import { GetProductQuery } from '../../graphql/queries';
import styled from 'styled-components';

const Heading = styled.h1`
  color: red;
`;

export default function ProductPage() {
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
    <div>
      <Heading>{Product?.name}</Heading>
      {/* Render other product details */}
    </div>
  );
}
