import React from 'react';
import * as yup from 'yup';
import useForm from '.';

const App = () => {
  const {
    values,
    errors,
    handleChange,
    handleSubmit,
    resetValues,
    submit,
    setValues,
  } = useForm({
    initialValues: {
      name: '',
    },
    validationSchema: yup.object({
      name: yup.string().required(),
    }),
    onSubmit: async (values) => {
      console.log(values);
      resetValues();
    },
  });
  return (
    <form onSubmit={handleSubmit}>
      <input onChange={handleChange('name')} value={values.name} />
      <button type="submit">Submit</button>

      {errors.name && <p>{errors.name}</p>}
    </form>
  );
};

export default App;
