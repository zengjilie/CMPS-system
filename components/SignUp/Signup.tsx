import React, { useState } from "react";
import { useForm } from "../../lib/hooks/useForm";
import { validateForm } from "./validatSignUpForm";
import styles from "./SignUp.module.scss";
import { useRouter } from "next/router";
import Head from "next/head";
import setTokenCookie from "@/pages/auth/setTokenCookie";

function Signup() {
  const [errors, setErrors] = useState<any>({});
  const router = useRouter();

  //Check browser  hiddecookie
  //If cookie exist, then auto signin
  //Get task state from database
  //Task the user the where he left

  // Limited Options the user can select
  const schools = ["A初中", "B初中"];
  const grades = ["七年级", "八年级", "九年级"];
  const classes = ["1班", "2班"];
  const sexes = ["男", "女"];

  // Dynamically update inputs using useForm custom hook
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

    // Check inputs error
    const errors = validateForm(inputs);
    if (Object.keys(errors).length !== 0) {
      setErrors(errors);
      console.log("error", errors);
    } else {
      console.log("inputs", inputs);

      //Check if User already exist in our database
      //If NOT
      //Add user info to database)

      //Get StudentId in return

      //Set cookie
      const StudentId = "1";
      setTokenCookie(StudentId);

      //Update task redux store

      //Direct the user to the next page
      router.push("/intro");
    }
  };

  return (
    <>
      <Head>
        <title>CMPS | Create-self-efficacy-scale</title>
      </Head>
      <div className={styles.signup}>
        <h2 className={styles["signup-header"]}>创造力数学问题解决线上测试</h2>
        <h5 className={styles["signup-subheader"]}>请填写以下信息</h5>
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
    </>
  );
}

export default Signup;

export async function getServerSideProps() {
  // check authetication for user
  // if cookie
}
