import React, { useState } from "react";
import Delete from "../Icon/Delete";
import styles from "./NoteCard.module.scss";
import { useDispatch } from "react-redux";
import { removeNote, updateNote } from "../../redux/slices/noteSlice";
import { useRouter } from "next/router";
import { TaskSetType } from "../../types";

type AppProps = {
  noteId: string;
  text: string;
};

function NoteCard({ noteId, text }: AppProps) {
  const dispatch = useDispatch();
  const router = useRouter();
  const taskSet: TaskSetType = router.pathname.split("/")[1] as TaskSetType;

  const inputHander = (e: any) => {
    dispatch(updateNote({ taskSet, noteId, text: e.target.value }));
  };

  return (
    <div className={styles["note-card"]}>
      <input
        type="text"
        value={text}
        placeholder="请输入..."
        onChange={(e: any) => inputHander(e)}
      />
      <Delete
        width={20}
        height={20}
        onClick={() => dispatch(removeNote({ taskSet, noteId }))}
      />
    </div>
  );
}

export default NoteCard;
