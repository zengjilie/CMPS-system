import React from "react";
import styles from "./ChatCard.module.scss";

function ChatCard({
  name,
  role,
  text,
  textImage,
  image,
}: {
  name: string;
  role: "me" | "notme";
  text: string;
  textImage?: string;
  image: string;
}) {
  if (role === "me") {
    return (
      <div className={styles["chat-card"]} style={{ marginLeft: "auto" }}>
        <div className={styles["chat-card-text"]}>
          <small style={{ marginLeft: "auto" }}>{name}</small>
          <p className={styles[role]}>{text}</p>
        </div>
        <img className={styles["chat-card-avatar"]} src={image} alt="" />
      </div>
    );
  } else {
    return (
      <div
        className={styles["chat-card"]}
        style={{ marginRight: "auto", flexDirection: "row-reverse" }}
      >
        <div className={styles["chat-card-text"]}>
          <small style={{ marginRight: "auto" }}>{name}</small>
          <p className={styles[role]}>
            {text}
            <br />
            {textImage && (
              <img src={textImage} alt="" width="100%" height="auto" />
            )}
          </p>
        </div>
        <img className={styles["chat-card-avatar"]} src={image} alt="" />
      </div>
    );
  }
}

export default ChatCard;
