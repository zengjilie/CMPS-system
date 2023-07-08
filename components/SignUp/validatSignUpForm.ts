const validateForm = (values: any) => {
  const errors: any = {};

  // check if userclass is empty
  if (values.userclass === "") {
    errors.userclass = "班级不能为空";
  }
  //check if fullname is empty
  if (values.fullname === "") {
    errors.fullname = "姓名栏不能为空";
  }

  return errors;
};

export { validateForm };
