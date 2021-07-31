import { useCallback } from 'react';
import useForm from '../lib/useForm';
import Form from './styles/Form';

export default function CreateProduct() {
  const [form, updateForm, resetForm, clearForm] = useForm({
    name: 'cool pack',
    price: 3422,
    description: 'lorem ipsum',
    image: '',
  });

  const handleFormSubmit = useCallback((e) => {
    e.preventDefault();
    console.log(e);
  }, []);

  return (
    <Form onSubmit={handleFormSubmit}>
      <fieldset aria-busy={false}>
        <label htmlFor="image">
          Image
          <input type="file" id="image" name="image" onChange={updateForm} />
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
