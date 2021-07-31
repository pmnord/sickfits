import useForm from '../lib/useForm';
import Form from './styles/Form';

export default function CreateProduct() {
  const [form, updateForm, resetForm, clearForm] = useForm({
    name: 'cool pack',
    price: 3422,
    description: 'lorem ipsum',
  });

  return (
    <Form>
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
      <button type="button" onClick={clearForm}>
        Clear
      </button>
      <button type="button" onClick={resetForm}>
        Reset
      </button>
    </Form>
  );
}
