//check the data in current task, whether it's empty

import { CurrentDataType } from "../../types";

//if empty, submit button will not be activated
export const isCurrentDataEmpty = (
  taskId: string,
  currentData: CurrentDataType
): boolean => {
  let isEmpty: boolean = true;
  switch (taskId) {
    case "1":
      isEmpty = currentData.text === "";
      break;
    case "2":
      isEmpty =
        currentData?.ms?.filter((i) => i.selected === true).length === 0;
      break;
    case "3":
      isEmpty =
        currentData?.ms?.filter((i) => i.selected === true).length === 0;
      break;
    case "4":
      //could be dropdown or scroll
      if (currentData?.dropdowns) {
        isEmpty = currentData?.dropdowns.length === 0;
      } else if (currentData?.scrolls) {
        isEmpty = currentData?.scrolls.length === 0;
      }
      break;
    case "5":
      // check dropdowns/scrolls+text
      if (currentData?.dropdowns) {
        if (currentData?.dropdowns.length !== 0 && currentData?.text !== "") {
          isEmpty = false;
        }
      } else if (currentData?.scrolls) {
        if (currentData?.scrolls.length !== 0 && currentData?.text !== "") {
          isEmpty = false;
        }
      }
      break;
    case "6":
      // check dropdowns/scrolls+textA+textB
      if (currentData?.finalDropdown) {
        if (
          currentData?.finalDropdown?.allValues.totalprice !== "" &&
          currentData?.textA !== "" &&
          currentData?.textB !== ""
        ) {
          isEmpty = false;
        }
      } else if (currentData?.finalScroll) {
        if (
          currentData?.finalScroll.allValues.totalprice !== "" &&
          currentData?.textA !== "" &&
          currentData?.textB !== ""
        ) {
          isEmpty = false;
        }
      }
      break;
    default:
      break;
  }
  //check
  return isEmpty;
};
