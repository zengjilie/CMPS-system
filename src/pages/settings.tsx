import React, { useState } from "react";
import Layout from "../../components/Layout";
import styles from "../../theme/page-styles/settings.module.scss";
import { useForm } from "../../lib/hooks/useForm";
import { useDispatch, useSelector } from "react-redux";
import { validateForm } from "../../components/SignUp/validatSignUpForm";
import setTokenCookie from "./auth/setTokenCookie";
import { useRouter } from "next/router";
import { UserType } from "../../types";
import { API } from "../../lib/api";
import { setUserInfo } from "../../redux/slices/userSlice";
import { ClipLoader } from "react-spinners";
import Button from "../../components/Button/Button";
import { GetServerSideProps } from "next";

export default function Settings() {
  const { userInfo, userid } = useSelector((state: any) => state.user);
  const [errors, setErrors] = useState<any>({});
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();

  const schools = ["A中学", "B中学"];
  const grades = ["初一","初二","初三","高一", "高二","高三"];
  const sexes = ["男", "女"];

  const { inputs, handleChange } = useForm({
    ...userInfo,
  });

  const formHandler = async (e: any) => {
    e.preventDefault();

    // Check inputs error
    const errors = validateForm(inputs);
    if (Object.keys(errors).length !== 0) {
      setErrors(errors);
      console.log("error", errors);
    } else {
      setLoading(true);
      // Update User Info
      const { Attributes: data }: { Attributes: UserType } = await API.patch({
        path: `/users?userid=${userid}`,
        data: inputs,
      });

      //update redux
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
      router.push("/settings");
    }
  };
  return (
    <div className={styles["settings"]}>
      <h2 className={styles["settings-header"]}>个人信息中心</h2>
      <h5 className={styles["settings-subheader"]}>
        请修改完个人信息后点击“更改信息”按键
      </h5>
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
            <span>更改信息</span>
          ) : (
            <ClipLoader color="#fff" loading={true} size={20} />
          )}
        </button>
      </form>
      <Button text="返回作答" type="primary" click={() => router.back()} />
    </div>
  );
}

Settings.getLayout = function getLayout(page: React.ReactNode) {
  return <Layout>{page}</Layout>;
};

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const cmpsToken = req.cookies["cmpsToken"];
  if (!cmpsToken) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  return { props: {} };
};
