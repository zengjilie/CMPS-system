import React from "react";
import styles from "./Button.module.scss";
import { useDispatch } from "react-redux";
import { ClipLoader } from "react-spinners";

interface AppProps {
  className?: any;
  type: "primary" | "secondary" | "calc" | "equa" | "inactive";
  click?: any;
  text: string;
  clip?: boolean;
  isClipLoading?: boolean;
  size?: string;
  image?: string;
}
function Button({
  className,
  click,
  text,
  type,
  clip,
  isClipLoading,
  size,
  image,
}: AppProps) {
  const dispatch = useDispatch();
  return (
    <button
      className={`${className} ${styles["btn"]} ${styles[`${size}`]} ${
        styles[`${type}`]
      }`}
      onClick={() => click()}
    >
      {text}
      {clip && <ClipLoader color="#fff" loading={isClipLoading} size={20} />}
    </button>
  );
}

export default Button;
