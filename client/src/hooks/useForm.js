// Custom hook - what problem we want to solve?

import { useState } from "react";

export default function useForm(submitHadnler, initialValues) {
  const [values, setValues] = useState(initialValues);

  const onChange = (e) => {
    setValues((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault()

    submitHadnler(values)
  }

  return {values, onChange, onSubmit};
}
