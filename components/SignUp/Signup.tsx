import React, { useState } from "react";
import { useForm } from "../../lib/hooks/useForm";
import { validateForm } from "./validatSignUpForm";
import styles from "./SignUp.module.scss";

function Signup() {
  const [errors, setErrors] = useState<any>({});

  // Limited Options the user can select
  const schools = ["A小学", "B小学"];
  const grades = ["一年级", "二年级", "三年级", "四年级", "五年级", "六年级"];
  const classes = ["1班", "2班"];
  const sexes = ["男", "女"];

  // dynamically update inputs using useForm custom hook
  const { inputs, handleChange } = useForm({
    school: schools[0],
    grade: grades[0],
    class: classes[0],
    fullname: "",
    sex: sexes[0],
    schoolId: "",
  });

  // handle submit form
  const formHandler = async (e: any) => {
    e.preventDefault();

    //check inputs error
    const errors = validateForm(inputs);
    if (Object.keys(errors).length !== 0) {
      setErrors(errors);
      console.log("error", errors);
    } else {
      console.log("inputs", inputs);

      // update the database

      //direct the user to the next page
    }
  };

  return (
    <div className={styles.signup}>
      <h2 className={styles["signup-header"]}>创造力数学问题解决线上测试</h2>
      <h4 className={styles["signup-subheader"]}>请填写以下信息</h4>
      <form action="submit" onSubmit={formHandler}>
        <fieldset>
          <label htmlFor="school">学校</label>
          <select id="school" name="school" onChange={handleChange}>
            {schools.map((school, id) => (
              <option key={id} value={school}>
                {school}
              </option>
            ))}
          </select>
        </fieldset>

        <fieldset>
          <label htmlFor="grade">年级</label>
          <select id="grade" name="grade" onChange={handleChange}>
            {grades.map((grade, id) => (
              <option key={id} value={grade}>
                {grade}
              </option>
            ))}
          </select>
        </fieldset>

        <fieldset>
          <label htmlFor="class">班级</label>
          <select id="class" name="class" onChange={handleChange}>
            {classes.map((claz, id) => (
              <option key={id} value={claz}>
                {claz}
              </option>
            ))}
          </select>
        </fieldset>

        <fieldset>
          <label htmlFor="sex">性别</label>
          <select id="sex" name="sex" onChange={handleChange}>
            {sexes.map((sex, id) => (
              <option key={id} value={sex}>
                {sex}
              </option>
            ))}
          </select>
        </fieldset>

        <fieldset>
          <label htmlFor="fullname">姓名</label>
          <input
            type="text"
            id="fullname"
            name="fullname"
            placeholder={"请输入你的姓名"}
            value={inputs.fullname}
            onChange={handleChange}
            onKeyDown={() => setErrors({ ...errors, fullname: "" })}
          />
        </fieldset>
        {errors.fullname && (
          <small className={styles.error}>{errors.fullname}</small>
        )}

        <fieldset>
          <label htmlFor="schoolId">学号</label>
          <input
            type="text"
            id="schoolId"
            name="schoolId"
            placeholder={"请输入你的学号"}
            value={inputs.schoolId}
            onChange={handleChange}
            onKeyDown={() => setErrors({ ...errors, schoolId: "" })}
          />
        </fieldset>
        {errors.schoolId && (
          <small className={styles.error}>{errors.schoolId}</small>
        )}

        <button type="submit" className={styles["signup-btn"]}>
          登录
        </button>
      </form>
    </div>
  );
}

export default Signup;
