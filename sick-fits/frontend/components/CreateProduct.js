import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import { useRouter } from 'next/dist/client/router';
import { useCallback } from 'react';

import useForm from '../lib/useForm';
import ErrorMessage from './ErrorMessage';
import { ALL_PRODUCTS_QUERY } from './Products';
import Form from './styles/Form';

const CREATE_PRODUCT_MUTATION = gql`
  mutation CREATE_PRODUCT_MUTATION(
    $name: String!
    $description: String!
    $price: Int!
    $image: Upload
  ) {
    createProduct(
      data: {
        name: $name
        description: $description
        price: $price
        status: "AVAILABLE"
        photo: { create: { image: $image, altText: $name } }
      }
    ) {
      # this part gets returned after product creation
      id
      price
      description
      name
    }
  }
`;

export default function CreateProduct() {
  const [form, updateForm, resetForm, clearForm] = useForm({
    name: 'cool pack',
    price: 3422,
    description: 'lorem ipsum',
    image: '',
  });

  const [createProduct, { data, error, loading }] = useMutation(
    CREATE_PRODUCT_MUTATION,
    {
      variables: form,
      refetchQueries: [{ query: ALL_PRODUCTS_QUERY }],
    }
  );

  const router = useRouter();

  const handleFormSubmit = useCallback(
    async (e) => {
      e.preventDefault();

      const res = await createProduct(); // response available in `data`
      clearForm();
      router.push(`/products/${res.data.createProduct.id}`);
    },
    [createProduct, clearForm, router]
  );

  return (
    <Form onSubmit={handleFormSubmit}>
      <ErrorMessage error={error} />
      <fieldset aria-busy={loading} disabled={loading}>
        <label htmlFor="image">
          Image
          <input
            required
            type="file"
            id="image"
            name="image"
            onChange={updateForm}
          />
        </label>
        <label htmlFor="name">
          Name
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={updateForm}
          />
        </label>
        <label htmlFor="price">
          Price
          <input
            type="number"
            id="price"
            name="price"
            placeholder="Price"
            value={form.price}
            onChange={updateForm}
          />
        </label>
        <label htmlFor="description">
          Description
          <textarea
            id="description"
            name="description"
            placeholder="Description"
            value={form.description}
            onChange={updateForm}
          />
        </label>
        <button type="submit">+Add Product</button>
        &nbsp;
        <button type="button" onClick={clearForm}>
          Clear
        </button>
        &nbsp;
        <button type="button" onClick={resetForm}>
          Reset
        </button>
      </fieldset>
    </Form>
  );
}
