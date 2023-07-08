import React, { useState } from "react";
import { useForm } from "../../lib/hooks/useForm";
import { validateForm } from "./validatSignUpForm";
import styles from "./SignUp.module.scss";
import { useRouter } from "next/router";
import Head from "next/head";
import setTokenCookie from "@/pages/auth/setTokenCookie";
import { API } from "../../lib/api";
import { UserType } from "../../types";
import { useDispatch } from "react-redux";
import { setUserInfo } from "../../redux/slices/userSlice";
import ClipLoader from "react-spinners/ClipLoader";

function Signup() {
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<any>({});
  const router = useRouter();
  const dispatch = useDispatch();

  // Limited Options the user can select
  const schools = ["A高中"];
  const grades = ["高一", "高二"];
  const sexes = ["男", "女"];

  // Dynamically update inputs using useForm custom hook
  const { inputs, handleChange } = useForm({
    school: schools[0],
    grade: grades[0],
    userclass: "",
    fullname: "",
    sex: sexes[0],
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
      setLoading(true);
      // Get User Info, add user to db
      const { data }: { data: UserType } = await API.post({
        path: "/users",
        data: inputs,
      });

      // Set global fullname and userid
      dispatch(
        setUserInfo({
          userclass: data.userclass,
          fullname: data.fullname,
          grade: data.grade,
          school: data.school,
          sex: data.sex,
          userid: data.userid,
        })
      );
      //set cookie, cookie only last for 2 hours
      setTokenCookie();

      setLoading(false);
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
        <div className={styles["signup-wrapper"]}>
          <h2 className={styles["signup-header"]}>
            创造力数学问题解决能力测试
          </h2>
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
              <label htmlFor="userclass">班级</label>
              <input
                type="text"
                id="userclass"
                name="userclass"
                placeholder={"请输入你的班级"}
                value={inputs.userclass}
                onChange={handleChange}
                onKeyDown={() => setErrors({ ...errors, userclass: "" })}
              />
            </fieldset>
            {errors.fullname && (
              <small className={styles.error}>{errors.userclass}</small>
            )}

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

            <button type="submit" className={styles["signup-btn"]}>
              {!loading ? (
                <span>登录</span>
              ) : (
                <ClipLoader color="#fff" loading={true} size={20} />
              )}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Signup;

export async function getServerSideProps() {
  // check authetication for user
  // if cookie
}
