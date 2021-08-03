import React, { useState } from 'react';

interface Props {
  name: string;
}

const HelloWorld: React.FC<Props> = ({ name }) => {
  // React.FC takes a generic (Props)
  // because they don't know ahead of time what will be passed in
  const [state, setState] = useState<{ fullName: string | null }>({
    fullName: '',
  }); // useState takes a generic

  setState({ fullName: null });

  return <div>Hello {name}</div>;
};

interface FormProps<T> {
  values: T;
  children: (values: T) => JSX.Element;
}

const Form = <T extends Record<string, unknown>>({
  values,
  children,
}: FormProps<T>) => children(values);

const App: React.FC = () => (
  <div className='"App"'>
    <Form<{ /* overriding the built-in generic */ lastName: string | null }>
      values={{ lastName: 'foo' }}
    >
      {(values) => <div>{values.lastName}</div>}
    </Form>
  </div>
);

export default App;
