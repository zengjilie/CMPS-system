import { useState } from "react";

export function useForm(initial: any = {}) {
  const [inputs, setInputs] = useState(initial);

  //
  const handleChange = (e: any) => {
    const { value, name } = e.target;
    console.log(name, value);
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  //reset input
  const resetForm = () => {
    setInputs(initial);
  };

  return {
    inputs,
    handleChange,
    resetForm,
    setInputs,
  };
}
