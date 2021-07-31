import { useState } from 'react';

export default function useForm(initial = {}) {
  // create state object for inputs
  const [inputs, setInputs] = useState(initial);

  function handleChange(e) {
    let { value, name, type, files } = e.target;

    if (type === 'number') {
      value = parseInt(value);
    } else if (type === 'file') {
      value[0] = files;
    }

    setInputs({
      ...inputs,
      [name]: value,
    });
  }

  function resetForm() {
    setInputs(initial);
  }

  function clearForm() {
    const blankState = Object.keys(inputs).reduce((acc, cur) => {
      acc[cur] = '';
      return acc;
    }, {});

    setInputs(blankState);
  }

  return [inputs, handleChange, resetForm, clearForm];
}
