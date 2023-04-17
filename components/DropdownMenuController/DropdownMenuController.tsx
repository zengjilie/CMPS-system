import React from "react";
import { DropdownHeaderType, DropdownRowType } from "../../types";
import { useDispatch, useSelector } from "react-redux";
import styles from "./DropdownMenuController.module.scss";
import { addDropdown, dropdownHeader } from "../../redux/slices/dropdownSlice";
import DropdownCard from "../DropdownCard/DropdownCard";
import Plus from "../Icon/Plus";
import { v4 as uuidv4 } from "uuid";
import { useRouter } from "next/router";
import Star from "../Icon/Star";

const rowHeaders: DropdownHeaderType = dropdownHeader;

function DropdownMenuController() {
  const router = useRouter();
  const dispatch = useDispatch();
  const dropdowns: DropdownRowType[] = useSelector(
    (state: any) => state.dropdowns.allDropdowns
  );
  const finalDropdown: DropdownRowType = useSelector(
    (state: any) => state.dropdowns.finalDropdown
  );

  const taskNum = router.pathname.split("/").at(-1);

  return (
    <div className={styles["dropdowns-controller"]}>
      <div className={styles["dropdowns-body"]}>
        <div className={styles["dropdowns-row-headers"]}>
          {rowHeaders.names.map((name, i) => {
            if ((taskNum === "4" || taskNum === "6") && name === "红星") {
              return <></>;
            } else if (taskNum === "5" && name === "红星") {
              return (
                <div
                  className={styles["dropdowns-row-header"]}
                  key={`row-header${i}`}
                >
                  <Star width={20} height={20} stared={false} />
                </div>
              );
            } else {
              return (
                <p
                  className={styles["dropdowns-row-header"]}
                  key={`row-header${i}`}
                >
                  {name}
                </p>
              );
            }
          })}
          {taskNum !== "6" && (
            <div className={styles["dropdowns-row-padding"]}></div>
          )}
        </div>
        {taskNum !== "6" ? (
          <>
            {dropdowns.map((dropdown, i) => (
              <DropdownCard
                key={dropdown.dropdownId}
                dropdownId={dropdown.dropdownId}
                allValues={dropdown.allValues}
              />
            ))}
          </>
        ) : (
          <DropdownCard
            dropdownId={finalDropdown.dropdownId}
            allValues={finalDropdown.allValues}
          />
        )}

        {taskNum !== "6" && (
          <div
            className={styles["add-dropdown-btn"]}
            onClick={() => dispatch(addDropdown({ dropdownId: uuidv4() }))}
          >
            <Plus
              className={styles["add-dropdown-icon"]}
              height={20}
              width={20}
            />
            <p>增加行 . . .</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default DropdownMenuController;
