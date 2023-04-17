import React from "react";
import styles from "./TextInput.module.scss";
import { useDispatch } from "react-redux";
import { TextState, updateText } from "../../redux/slices/textSlice";

interface AppProps {
  textId: keyof TextState;
  text: string;
  placeholder: string;
  wordLimit: number;
  equaRef?: any;
}

function TextInput({
  textId,
  text,
  placeholder,
  wordLimit,
  equaRef,
}: AppProps) {
  const dispatch = useDispatch();
  const changeHandler = (e: any) => {
    dispatch(updateText({ textId, text: e.target.value }));
  };

  return (
    <div className={styles["text-input"]}>
      <textarea
        className={styles["text-input-area"]}
        name={textId}
        value={text}
        onChange={(e: any) => changeHandler(e)}
        placeholder={placeholder}
        ref={equaRef}
        maxLength={wordLimit}
      ></textarea>
      <small>
        {text.length ? text.length : 0}/{wordLimit}
      </small>
    </div>
  );
}

export default TextInput;
