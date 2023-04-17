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
  const taskNum = router.pathname.split("/").at(-1);

  const handleChange = (e: any) => {
    const { value, name } = e.target;
    let data: any = { dropdownId };
    data[`${name}`] = value;
    if (taskNum !== "6") {
      dispatch(updateDropdown({ ...data }));
    } else {
      dispatch(updateFinalDropdown({ ...data }));
    }
  };

  return (
    <div className={styles["dropdown-card"]}>
      {taskNum === "5" && (
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

      <select name="movie" onChange={(e: any) => handleChange(e)}>
        {rowHeaders.movies.map((movie, i) => (
          <option value={movie} key={`${dropdownId}-${i}`}>
            {movie}
          </option>
        ))}
      </select>

      <select name="schedule" onChange={(e: any) => handleChange(e)}>
        {(() => {
          if (allValues.movie === rowHeaders.movies[0]) {
            return rowHeaders.schedules[0].map((schedule, i) => (
              <option value={schedule} key={`${dropdownId}-schedule-${i}`}>
                {schedule}
              </option>
            ));
          } else if (allValues.movie === rowHeaders.movies[1]) {
            return rowHeaders.schedules[1].map((schedule, i) => (
              <option value={schedule} key={`${dropdownId}-schedule-${i}`}>
                {schedule}
              </option>
            ));
          } else if (allValues.movie === rowHeaders.movies[2]) {
            return rowHeaders.schedules[2].map((schedule, i) => (
              <option value={schedule} key={`${dropdownId}-schedule-${i}`}>
                {schedule}
              </option>
            ));
          } else if (allValues.movie === rowHeaders.movies[3]) {
            return rowHeaders.schedules[3].map((schedule, i) => (
              <option value={schedule} key={`${dropdownId}-schedule-${i}`}>
                {schedule}
              </option>
            ));
          } else if (allValues.movie === rowHeaders.movies[4]) {
            return rowHeaders.schedules[4].map((schedule, i) => (
              <option value={schedule} key={`${dropdownId}-schedule-${i}`}>
                {schedule}
              </option>
            ));
          } else if (allValues.movie === rowHeaders.movies[5]) {
            return rowHeaders.schedules[5].map((schedule, i) => (
              <option value={schedule} key={`${dropdownId}-schedule-${i}`}>
                {schedule}
              </option>
            ));
          } else {
            return rowHeaders.schedules[0].map((schedule, i) => (
              <option value={schedule} key={`${dropdownId}-schedule-${i}`}>
                {schedule}
              </option>
            ));
          }
        })()}
      </select>

      <select name="date" onChange={(e: any) => handleChange(e)}>
        {rowHeaders.dates.map((date, i) => (
          <option value={date} key={`${dropdownId}-${i}`}>
            {date}
          </option>
        ))}
      </select>

      <select name="type" onChange={(e: any) => handleChange(e)}>
        {rowHeaders.types.map((type, i) => (
          <option value={type} key={`${dropdownId}-${i}`}>
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
      />

      {taskNum !== "6" && (
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
