import React from "react";
import { DropdownHeaderType, DropdownRowType } from "../../types";
import { useDispatch, useSelector } from "react-redux";
import styles from "./DropdownMenuController.module.scss";
import { addDropdown, dropdownHeader } from "../../redux/slices/dropdownSlice";
import DropdownCard from "../DropdownCard/DropdownCard";
import Plus from "../Icon/Plus";
import { v4 as uuidv4 } from "uuid";

const rowHeaders: DropdownHeaderType = dropdownHeader;

function DropdownMenuController() {
  const dispatch = useDispatch();
  const dropdowns: DropdownRowType[] = useSelector(
    (state: any) => state.dropdowns.allDropdowns
  );

  return (
    <div className={styles["dropdowns-controller"]}>
      <div className={styles["dropdowns-header"]}>
        <h4>下拉菜单</h4>
      </div>

      <div className={styles["dropdowns-body"]}>
        <div className={styles["dropdowns-row-headers"]}>
          {rowHeaders.names.map((name, i) => (
            <p
              className={styles["dropdowns-row-header"]}
              key={`row-header${i}`}
            >
              {name}
            </p>
          ))}
          <div className={styles["dropdowns-row-padding"]}></div>
        </div>

        {dropdowns.map((dropdown, i) => (
          <DropdownCard
            key={dropdown.dropdownId}
            dropdownId={dropdown.dropdownId}
            allValues={dropdown.allValues}
          />
        ))}

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
      </div>
    </div>
  );
}

export default DropdownMenuController;
