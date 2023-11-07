import React from "react";
import styles from "./NotesController.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { NoteType, RecordType, TaskIdType, TaskSetType } from "../../types";
import Plus from "../Icon/Plus";
import { addNote } from "../../redux/slices/noteSlice";
import NoteCard from "../NoteCard/NoteCard";
import { v4 as uuidv4 } from "uuid";
import { useRouter } from "next/router";
import HelperNote from "../HelperNote/HelperNote";
import { addRecord } from "../../redux/slices/recordSlice";

function NotesController() {
  const userid = useSelector((state: any) => state.user.userid);
  const router = useRouter();
  const taskSet: TaskSetType = router.pathname.split("/")[1] as TaskSetType;
  const taskId: TaskIdType = router.pathname.split("/").at(-1) as TaskIdType;
  const notes: NoteType[] = useSelector(
    (state: any) => state.notes[taskSet].allNotes
  );
  const dispatch = useDispatch<any>();

  const handleNoteClick = () => {
    dispatch(addNote({ taskSet, noteId: uuidv4() }));

    const record: RecordType = {
      userid: userid,
      taskcode: `${taskSet === "task_1" ? "A" : "B"}${taskId}`,
      action: `addnote${taskId}`,
      section: "note",
      createdat: new Date().toISOString(),
    };
    dispatch(addRecord({ record }));
  };

  return (
    <div className={styles["notes-controller"]}>
      <div className={styles["notes-header"]}>
        <h4>笔记</h4>

        <HelperNote text="你可以点击“添加笔记” 或者删除笔记。你最多可以添加20个笔记。" />
      </div>

      <div className={styles["notes-body"]}>
        {notes.map((note, i) => (
          <NoteCard key={note.noteId} noteId={note.noteId} text={note.text} />
        ))}
        <div
          className={styles["add-note-btn"]}
          onClick={() => handleNoteClick()}
        >
          <Plus className={styles["add-note-icon"]} height={20} width={20} />
          <p>增加笔记 . . .</p>
        </div>
      </div>
    </div>
  );
}

export default NotesController;
