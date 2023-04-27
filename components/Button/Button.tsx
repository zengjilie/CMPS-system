import React from "react";
import styles from "./Button.module.scss";
import { useDispatch } from "react-redux";

interface AppProps {
  className?: any;
  type: "primary" | "secondary" | "calc" | "equa" | "inactive";
  click?: any;
  text: string;
}
function Button({ className, click, text, type }: AppProps) {
  const dispatch = useDispatch();
  return (
    <button
      className={`${className} ${styles["btn"]} ${styles[`${type}`]}`}
      onClick={() => click()}
    >
      {text}
    </button>
  );
}

export default Button;
