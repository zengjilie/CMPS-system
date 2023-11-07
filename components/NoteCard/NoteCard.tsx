import React from "react";
import Delete from "../Icon/Delete";
import styles from "./NoteCard.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { removeNote, updateNote } from "../../redux/slices/noteSlice";
import { useRouter } from "next/router";
import { RecordType, TaskIdType, TaskSetType } from "../../types";
import { addRecord } from "../../redux/slices/recordSlice";

type AppProps = {
  noteId: string;
  text: string;
};

function NoteCard({ noteId, text }: AppProps) {
  const userid = useSelector((state: any) => state.user.userid);
  const dispatch = useDispatch<any>();
  const router = useRouter();
  const taskSet: TaskSetType = router.pathname.split("/")[1] as TaskSetType;
  const taskId: TaskIdType = router.pathname.split("/").at(-1) as TaskIdType;

  const inputHander = (e: any) => {
    dispatch(updateNote({ taskSet, noteId, text: e.target.value }));
  };

  const handleNoteClick = () => {
    dispatch(removeNote({ taskSet, noteId }));

    const record: RecordType = {
      userid: userid,
      taskcode: `${taskSet === "task_1" ? "A" : "B"}${taskId}`,
      action: `deletenote${taskId}`,
      section: "note",
      createdat: new Date().toISOString(),
    };
    dispatch(addRecord({ record }));
  };

  return (
    <div className={styles["note-card"]}>
      <input
        type="text"
        value={text}
        placeholder="请输入..."
        onChange={(e: any) => inputHander(e)}
      />
      <Delete width={20} height={20} onClick={() => handleNoteClick()} />
    </div>
  );
}

export default NoteCard;
