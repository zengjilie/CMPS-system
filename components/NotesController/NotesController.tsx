import React, { useEffect, useState } from "react";
import styles from "./NotesController.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { NoteType } from "../../types";
import Plus from "../Icon/Plus";
import { addNote } from "../../redux/slices/noteSlice";
import NoteCard from "../NoteCard/NoteCard";
import { v4 as uuidv4 } from "uuid";
import Info from "../Icon/Info";

function NotesController() {
  const notes: NoteType[] = useSelector((state: any) => state.notes.allNotes);
  const dispatch = useDispatch();

  return (
    <div className={styles["notes-controller"]}>
      <div className={styles["notes-header"]}>
        <h4>笔记</h4>

        <div className={styles["notes-detail-icon"]}>
          <Info width={20} height={20} />
          <small>
            你可以点击“添加笔记” 或者删除笔记。你最多可以添加20个笔记。
          </small>
        </div>
      </div>

      <div className={styles["notes-body"]}>
        {notes.map((note, i) => (
          <NoteCard key={note.noteId} noteId={note.noteId} text={note.text} />
        ))}
        <div
          className={styles["add-note-btn"]}
          onClick={() => dispatch(addNote({ noteId: uuidv4() }))}
        >
          <Plus className={styles["add-note-icon"]} height={20} width={20} />
          <p>增加笔记 . . .</p>
        </div>
      </div>
    </div>
  );
}

export default NotesController;
