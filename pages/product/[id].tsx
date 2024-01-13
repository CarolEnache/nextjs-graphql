import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';
import { GetProductQuery } from '../../graphql/queries';

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
      <h1>{Product?.name}</h1>
      {/* Render other product details */}
    </div>
  );
}
