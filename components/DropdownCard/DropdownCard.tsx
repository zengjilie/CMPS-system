import React from "react";
import { DropdownHeaderType, DropdownRowType } from "../../types";
import Delete from "../Icon/Delete";
import styles from "./DropdownCard.module.scss";
import {
  dropdownHeader,
  removeDropdown,
  updateDropdown,
  updateFinalDropdown,
} from "../../redux/slices/dropdownSlice";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import Star from "../Icon/Star";

const rowHeaders: DropdownHeaderType = dropdownHeader;
function DropdownCard({ dropdownId, allValues }: DropdownRowType) {
  const router = useRouter();
  const dispatch = useDispatch();
  const taskId = router.pathname.split("/").at(-1);

  const handleChange = (e: any) => {
    const { value, name } = e.target;
    let data: any = { dropdownId };
    data[`${name}`] = value;
    if (taskId !== "6") {
      dispatch(updateDropdown({ ...data }));
    } else {
      dispatch(updateFinalDropdown({ ...data }));
    }
  };

  return (
    <div className={styles["dropdown-card"]}>
      {taskId === "5" && (
        <div className={styles["select"]}>
          <Star
            width={20}
            height={20}
            stared={allValues.stared}
            onClick={() => {
              dispatch(
                updateDropdown({ dropdownId, stared: allValues.stared })
              );
            }}
          />
        </div>
      )}

      <select
        name="movie"
        onChange={(e: any) => handleChange(e)}
        value={allValues.movie}
      >
        {rowHeaders.movies.map((movie, i) => (
          <option
            disabled={
              taskId === "5" && movie !== allValues.movie ? true : false
            }
            value={movie}
            key={`${dropdownId}-${i}`}
          >
            {movie}
          </option>
        ))}
      </select>

      <select
        name="schedule"
        onChange={(e: any) => handleChange(e)}
        value={allValues.schedule}
      >
        {(() => {
          if (allValues.movie === rowHeaders.movies[0]) {
            return rowHeaders.schedules[0].map((schedule, i) => (
              <option
                disabled={
                  taskId === "5" && schedule !== allValues.schedule
                    ? true
                    : false
                }
                value={schedule}
                key={`${dropdownId}-schedule-${i}`}
              >
                {schedule}
              </option>
            ));
          } else if (allValues.movie === rowHeaders.movies[1]) {
            return rowHeaders.schedules[1].map((schedule, i) => (
              <option
                disabled={
                  taskId === "5" && schedule !== allValues.schedule
                    ? true
                    : false
                }
                value={schedule}
                key={`${dropdownId}-schedule-${i}`}
              >
                {schedule}
              </option>
            ));
          } else if (allValues.movie === rowHeaders.movies[2]) {
            return rowHeaders.schedules[2].map((schedule, i) => (
              <option
                disabled={
                  taskId === "5" && schedule !== allValues.schedule
                    ? true
                    : false
                }
                value={schedule}
                key={`${dropdownId}-schedule-${i}`}
              >
                {schedule}
              </option>
            ));
          } else if (allValues.movie === rowHeaders.movies[3]) {
            return rowHeaders.schedules[3].map((schedule, i) => (
              <option
                disabled={
                  taskId === "5" && schedule !== allValues.schedule
                    ? true
                    : false
                }
                value={schedule}
                key={`${dropdownId}-schedule-${i}`}
              >
                {schedule}
              </option>
            ));
          } else if (allValues.movie === rowHeaders.movies[4]) {
            return rowHeaders.schedules[4].map((schedule, i) => (
              <option
                disabled={
                  taskId === "5" && schedule !== allValues.schedule
                    ? true
                    : false
                }
                value={schedule}
                key={`${dropdownId}-schedule-${i}`}
              >
                {schedule}
              </option>
            ));
          } else if (allValues.movie === rowHeaders.movies[5]) {
            return rowHeaders.schedules[5].map((schedule, i) => (
              <option
                disabled={
                  taskId === "5" && schedule !== allValues.schedule
                    ? true
                    : false
                }
                value={schedule}
                key={`${dropdownId}-schedule-${i}`}
              >
                {schedule}
              </option>
            ));
          } else {
            return rowHeaders.schedules[6].map((schedule, i) => (
              <option
                disabled={
                  taskId === "5" && schedule !== allValues.schedule
                    ? true
                    : false
                }
                value={schedule}
                key={`${dropdownId}-schedule-${i}`}
              >
                {schedule}
              </option>
            ));
          }
        })()}
      </select>

      <select
        name="date"
        onChange={(e: any) => handleChange(e)}
        value={allValues.date}
      >
        {rowHeaders.dates.map((date, i) => (
          <option
            disabled={taskId === "5" && date !== allValues.date ? true : false}
            value={date}
            key={`${dropdownId}-${i}`}
          >
            {date}
          </option>
        ))}
      </select>

      <select
        name="type"
        onChange={(e: any) => handleChange(e)}
        value={allValues.type}
      >
        {rowHeaders.types.map((type, i) => (
          <option
            disabled={taskId === "5" && type !== allValues.type ? true : false}
            value={type}
            key={`${dropdownId}-${i}`}
          >
            {type}
          </option>
        ))}
      </select>

      <input
        type="text"
        name="totalprice"
        value={allValues.totalprice}
        placeholder="输入总价..."
        onChange={(e: any) => handleChange(e)}
        readOnly={taskId === "5" ? true : false}
      />

      {taskId !== "6" && taskId !== "5" && (
        <div className={styles["dropdown-card-delete"]}>
          <Delete
            width={20}
            height={20}
            onClick={() => dispatch(removeDropdown({ dropdownId }))}
          />
        </div>
      )}
    </div>
  );
}

export default DropdownCard;
