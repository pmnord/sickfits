import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import Head from 'next/head';
import styled from 'styled-components';
import ErrorMessage from './ErrorMessage';

const ProductStyles = styled.div`
  display: grid;
  grid-auto-columns: 1fr;
  grid-auto-flow: column;
  max-width: var(--max-width);
  align-items: top;
  gap: 2rem;
  img {
    width: 100%;
    object-fit: contain;
  }
`;

export const PRODUCT_QUERY = gql`
  query PRODUCT_QUERY($id: ID!) {
    product: Product(where: { id: $id }) {
      # fields to return
      id
      name
      price
      description
      status
      photo {
        image {
          publicUrlTransformed
        }
        altText
      }
    }
  }
`;

export default function SingleProduct({ id }) {
  const { data, loading, error } = useQuery(PRODUCT_QUERY, {
    variables: { id },
  });

  console.log({ data, loading, error });

  if (loading) return <p>Loading...</p>;
  if (error) return <ErrorMessage error={error} />;

  const {
    name,
    price,
    description,
    status,
    photo: {
      image: { publicUrlTransformed },
      alt,
    },
  } = data.product;

  return (
    <ProductStyles>
      <Head>
        <title>Sick Fits | {name}</title>
      </Head>
      <img src={publicUrlTransformed} alt={alt} />
      <div className="details">
        <h2>{name}</h2>
        <p>{description}</p>
      </div>
    </ProductStyles>
  );
}
