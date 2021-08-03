import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import Image from 'next/image';
import ErrorMessage from './ErrorMessage';

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
    <div>
      <div className="details" />
      <h2>{name}</h2>
      <p>{description}</p>
      <Image height={128} width={128} src={publicUrlTransformed} alt={alt} />
      <ul>
        <li>Name: {name}</li>
        <li>Price: {price}</li>
        <li>Description: {description}</li>
        <li>Status: {status}</li>
      </ul>
    </div>
  );
}
