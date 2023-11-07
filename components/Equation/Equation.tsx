import styles from "./Equation.module.scss";
import React from "react";
import Draggable from "react-draggable";
import Close from "../Icon/Close";
import { EquationState, hideEqua } from "../../redux/slices/equationSlice";
import { useDispatch, useSelector } from "react-redux";
import { TextState, updateText } from "../../redux/slices/textSlice";
import { RecordType, TaskIdType, TaskSetType } from "../../types";
import { useRouter } from "next/router";
import { addRecord } from "../../redux/slices/recordSlice";

interface AppProps {
  textId: keyof TextState;
  addRef: React.RefObject<HTMLTextAreaElement>;
}

function Equation({ textId, addRef }: AppProps) {
  const userid = useSelector((state: any) => state.user.userid);
  const dispatch = useDispatch<any>();
  const router = useRouter();
  const taskSet: TaskSetType = router.pathname.split("/")[1] as TaskSetType;
  const taskId: TaskIdType = router.pathname.split("/").at(-1) as TaskIdType;
  const isEquaOn: EquationState = useSelector(
    (state: any) => state.equation.on
  );

  const inputHanlder = (e: any) => {
    const textAreaInput = addRef?.current?.value;
    const input = e.target.innerText;
    let val = input;

    dispatch(updateText({ textId, text: `${textAreaInput}${val}` }));

    const record: RecordType = {
      userid: userid,
      taskcode: `${taskSet === "task_1" ? "A" : "B"}${taskId}`,
      action: "addsymbol",
      section: "answer",
      createdat: new Date().toISOString(),
    };
    dispatch(addRecord({ record }));
  };

  return (
    <>
      {isEquaOn && (
        <Draggable>
          <div className={styles["equation"]}>
            <div className={styles["equation-header"]}>
              <h4>数学符号</h4>
              <Close
                className={styles["close-btn"]}
                width={25}
                height={25}
                onClick={() => dispatch(hideEqua())}
              />
            </div>
            <div className={styles["buttons"]}>
              <button
                className={styles["sign"]}
                onClick={(e: any) => inputHanlder(e)}
              >
                +
              </button>
              <button
                className={styles["sign"]}
                onClick={(e: any) => inputHanlder(e)}
              >
                -
              </button>
              <button
                className={styles["sign"]}
                onClick={(e: any) => inputHanlder(e)}
              >
                ^
              </button>
              <button
                className={styles["sign"]}
                onClick={(e: any) => inputHanlder(e)}
              >
                (
              </button>
              <button
                className={styles["sign"]}
                onClick={(e: any) => inputHanlder(e)}
              >
                )
              </button>
              <button
                className={styles["sign"]}
                onClick={(e: any) => inputHanlder(e)}
              >
                x
              </button>
              <button
                className={styles["sign"]}
                onClick={(e: any) => inputHanlder(e)}
              >
                ÷
              </button>
              <button
                className={styles["sign"]}
                onClick={(e: any) => inputHanlder(e)}
              >
                %
              </button>
              <button
                className={styles["sign"]}
                onClick={(e: any) => inputHanlder(e)}
              >
                √
              </button>
              <button
                className={styles["sign"]}
                onClick={(e: any) => inputHanlder(e)}
              >{">"}</button>
              <button
                className={styles["sign"]}
                onClick={(e: any) => inputHanlder(e)}
              >{"<"}</button>
              <button
                className={styles["sign"]}
                onClick={(e: any) => inputHanlder(e)}
              >{"<="}</button>
              <button
                className={styles["sign"]}
                onClick={(e: any) => inputHanlder(e)}
              >{">="}</button>
              <button
                className={styles["sign"]}
                onClick={(e: any) => inputHanlder(e)}
              >{">="}</button>
              <button
                className={styles["sign"]}
                onClick={(e: any) => inputHanlder(e)}
              >
                =
              </button>
            </div>
          </div>
        </Draggable>
      )}
    </>
  );
}

export default Equation;
