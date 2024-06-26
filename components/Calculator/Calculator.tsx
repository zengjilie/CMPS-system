import React, { useState } from "react";
import Display from "./Display";
import Buttons from "./Buttons";
import styles from "./Calculator.module.scss";
import { evaluate, round } from "mathjs";
import { useDispatch, useSelector } from "react-redux";
import Draggable from "react-draggable";
import { RecordType, TaskIdType, TaskSetType } from "../../types";
import { useRouter } from "next/router";
import { addRecord } from "../../redux/slices/recordSlice";

function Calculator() {
  const userid = useSelector((state: any) => state.user.userid);
  const router = useRouter();
  const dispatch = useDispatch<any>();
  const taskSet: TaskSetType = router.pathname.split("/")[1] as TaskSetType;
  const taskId: TaskIdType = router.pathname.split("/").at(-1) as TaskIdType;
  //@ts-ignore
  const [input, setInput] = useState<string>("");
  const [answer, setAnswer] = useState<string>("");
  const isCalcOn = useSelector((state: any) => state.calculator.on);

  //input
  const inputHandler = (event: any) => {
    if (answer === "Invalid Input!!") return;
    let val = event.target.innerText;

    if (val === "x2") val = "^2";
    else if (val === "x3") val = "^3";
    else if (val === "3√") val = "^(1÷3)";
    else if (val === "log") val = "log(";

    let str = input + val;
    if (str.length > 14) return;

    if (answer !== "") {
      setInput(answer + val);
      setAnswer("");
    } else setInput(str);
    // setInput(str);
  };

  //Clear screen
  const clearInput = () => {
    setInput("");
    setAnswer("");
  };

  // check brackets are balanced or not
  //@ts-ignore
  const checkBracketBalanced = (expr) => {
    let stack = [];
    for (let i = 0; i < expr.length; i++) {
      let x = expr[i];
      if (x === "(") {
        stack.push(x);
        continue;
      }

      if (x === ")") {
        if (stack.length === 0) return false;
        else stack.pop();
      }
    }
    return stack.length === 0;
  };

  // calculate final answer
  //@ts-ignore
  const calculateAns = () => {
    if (input === "") return;
    let result = 0;
    let finalexpression = input;
    //  finalexpression = input.replaceAll("^", "**");  //for eval()
    finalexpression = finalexpression.replaceAll("x", "*");
    finalexpression = finalexpression.replaceAll("÷", "/");

    // evaluate square root
    let noSqrt = input.match(/√[0-9]+/gi);

    if (noSqrt !== null) {
      let evalSqrt = input;
      for (let i = 0; i < noSqrt.length; i++) {
        evalSqrt = evalSqrt.replace(
          noSqrt[i],
          `sqrt(${noSqrt[i].substring(1)})`
        );
      }
      finalexpression = evalSqrt;
    }

    //@ts-ignore
    try {
      // check brackets are balanced or not
      if (!checkBracketBalanced(finalexpression)) {
        const errorMessage = { message: "Brackets are not balanced!" };
        throw errorMessage;
      }
      result = evaluate(finalexpression); //mathjs

      const record: RecordType = {
        userid: userid,
        taskcode: `${taskSet === "task_1" ? "A" : "B"}${taskId}`,
        action: "calculate",
        section: "answer",
        createdat:new Date().toISOString(),
      };

      dispatch(addRecord({ record }));
    } catch (error: any) {
      //@ts-ignore
      result =
        error.message === "Brackets are not balanced!"
          ? "Brackets are not balanced!"
          : "Invalid Input!!"; //error.message;
    }
    isNaN(result)
      ? setAnswer(result.toString())
      : setAnswer(round(result, 3).toString());
  };

  // remove last character
  const backspace = () => {
    if (answer !== "") {
      setInput(answer.toString().slice(0, -1));
      setAnswer("");
    } else setInput((prev) => prev.slice(0, -1));
  };

  // change prefix of expression
  const changePlusMinus = () => {
    //need to change for answer
    if (answer === "Invalid Input!!") return;
    else if (answer !== "") {
      let ans = answer.toString();
      if (ans.charAt(0) === "-") {
        let plus = "+";
        setInput(plus.concat(ans.slice(1, ans.length)));
      } else if (ans.charAt(0) === "+") {
        let minus = "-";
        setInput(minus.concat(ans.slice(1, ans.length)));
      } else {
        let minus = "-";
        setInput(minus.concat(ans));
      }
      setAnswer("");
    } else {
      if (input.charAt(0) === "-") {
        let plus = "+";
        setInput((prev) => plus.concat(prev.slice(1, prev.length)));
      } else if (input.charAt(0) === "+") {
        let minus = "-";
        setInput((prev) => minus.concat(prev.slice(1, prev.length)));
      } else {
        let minus = "-";
        setInput((prev) => minus.concat(prev));
      }
    }
  };

  return (
    <>
      {isCalcOn && (
        <div className={styles["wrapper"]}>
          <Draggable>
            <div className={styles["main"]}>
              <Display input={input} setInput={setInput} answer={answer} />
              <Buttons
                inputHandler={inputHandler}
                clearInput={clearInput}
                backspace={backspace}
                changePlusMinus={changePlusMinus}
                calculateAns={calculateAns}
              />
            </div>
          </Draggable>
        </div>
      )}
    </>
  );
}

export default Calculator;
