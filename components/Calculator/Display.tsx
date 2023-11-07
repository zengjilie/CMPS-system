import React from "react";
import styles from "./Display.module.scss";
import Close from "../Icon/Close";
import { useDispatch } from "react-redux";
import { hideCalc } from "../../redux/slices/calculatorSlice";

interface AppProps {
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
  answer: string;
}

const Display = ({ input, setInput, answer }: AppProps) => {
  const dispatch = useDispatch();
  const onChangeTagInput = (e: any) => {
    const re = /^[!%(-+\x2D-9^glox\xF7\u221A]+$/;

    if (e.target.value === "" || re.test(e.target.value)) {
      setInput(e.target.value);
    }
  };

  return (
    <>
      <div className={styles["display"]}>
        <div className={styles["display-header"]}>
          <h4>计算器</h4>
          <Close
            className={styles["close-btn"]}
            width={25}
            height={25}
            onClick={() => dispatch(hideCalc())}
          />
        </div>
        {answer === "" ? (
          <>
            <input
              type="text"
              name="input"
              className={styles["input"]}
              style={{ padding: "29px" }}
              value={input}
              placeholder="0"
              maxLength={12}
              // disabled
              onChange={onChangeTagInput}
              autoComplete="off"
            />
          </>
        ) : (
          <>
            <input
              type="text"
              name="input"
              className={styles["value"]}
              value={input}
              placeholder="0"
              maxLength={12}
              disabled
            />
            <input
              type="text"
              name="value"
              className={styles["input"]}
              value={answer}
              disabled
            />
          </>
        )}
      </div>
    </>
  );
};

export default Display;
