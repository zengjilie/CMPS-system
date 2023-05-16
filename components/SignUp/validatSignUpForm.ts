const validateForm = (values: any) => {
  const errors: any = {};

  //check if fullname is empty
  if (values.fullname === "") {
    errors.fullname = "姓名栏不能为空";
  }

  return errors;
};

export { validateForm };
