import React from "react";
import { msTaskType } from "../../types";
import styles from "./MultiSelect.module.scss";
import Button from "../Button/Button";
import { useDispatch } from "react-redux";
import { toggleOption } from "../../redux/slices/multiSelectSlice";

interface AppProps {
  options: msTaskType[];
  taskId: "ms1Task1" | "ms2Task1" | "ms1Task2" | "ms2Task2";
}

function MultiSelect({ options, taskId }: AppProps) {
  const dispatch = useDispatch();
  return (
    <div className={styles["ms"]}>
      {options.map((option) => (
        <Button
          className={option.selected && styles["selected"]}
          key={`ms-option${option.optionId}`}
          type="secondary"
          text={option.name}
          click={() =>
            dispatch(
              toggleOption({ taskId: taskId, optionId: option.optionId })
            )
          }
        />
      ))}
    </div>
  );
}

export default MultiSelect;
