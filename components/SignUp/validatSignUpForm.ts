const validateForm = (values: any) => {
  const errors: any = {};

  //check if fullname is empty
  if (values.fullname === "") {
    errors.fullname = "姓名栏不能为空";
  }
  //check if schoolId is empty
  if (values.studentid === "") {
    errors.studentid = "学号不能为空";
  }

  return errors;
};

export { validateForm };
