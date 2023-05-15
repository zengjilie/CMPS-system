import { CurrentDataType, NoteState, NoteType, RecordType } from "../../types";
import { dropdownHeader } from "../../redux/slices/dropdownSlice";

export const makeRecord = ({
  userid,
  taskSet,
  taskId,
  currentData,
  notes,
}: {
  userid: string;
  taskSet: string;
  taskId: string;
  currentData: CurrentDataType;
  notes: NoteState;
}) => {
  let record: RecordType = {
    userid: userid,
    taskcode: `${taskSet === "task_1" ? "A" : "B"}${taskId}`,
    action: `submit${taskId}`,
    section: "system",
    createdat: new Date().toISOString(),
    answer1: "",
    answer2: "",
    answer3: "",
    notes: "",
  };

  //construct answer
  switch (taskId) {
    case "1":
      record.answer1 = currentData.text;
      break;
    case "2":
      record.answer1 = currentData?.ms
        ?.filter((i) => i.selected === true)
        ?.map((i) => {
          if (i.selected) {
            return i.name.charAt(0);
          }
        })
        .join("|");
      break;
    case "3":
      record.answer1 = currentData?.ms
        ?.filter((i) => i.selected === true)
        ?.map((i) => {
          if (i.selected) {
            return i.name.charAt(0);
          }
        })
        .join("|");
      break;
    case "4":
      //could be dropdown or scroll
      if (currentData?.dropdowns) {
        record.answer1 = currentData?.dropdowns
          .map((i) => {
            const movieIndex = dropdownHeader.movies.indexOf(i.allValues.movie);
            const scheduleIndex = dropdownHeader.schedules[movieIndex].indexOf(
              i.allValues.schedule
            );
            const dateIndex = dropdownHeader.dates.indexOf(i.allValues.date);
            const typeIndex = dropdownHeader.types.indexOf(i.allValues.type);
            console.log(movieIndex, scheduleIndex);
            return `${movieIndex}${scheduleIndex}${dateIndex}${typeIndex}_${i.allValues.totalprice}`;
          })
          .join("|");
      } else if (currentData?.scrolls) {
        record.answer1 = currentData?.scrolls
          .map((i) => {
            return `${i.allValues.type1}${i.allValues.type2}${i.allValues.type3}${i.allValues.type4}_${i.allValues.totalprice}`;
          })
          .join("|");
      }
      break;
    case "5":
      // check dropdowns/scrolls+text
      if (currentData?.dropdowns) {
        record.answer1 = currentData.dropdowns
          .filter((i) => i.allValues.stared === true)
          .map((i) => {
            const movieIndex = dropdownHeader.movies.indexOf(i.allValues.movie);
            const scheduleIndex = dropdownHeader.schedules[movieIndex].indexOf(
              i.allValues.schedule
            );
            const dateIndex = dropdownHeader.dates.indexOf(i.allValues.date);
            const typeIndex = dropdownHeader.types.indexOf(i.allValues.type);

            return `${movieIndex}${scheduleIndex}${dateIndex}${typeIndex}_${i.allValues.totalprice}`;
          })
          .join("|");
      } else if (currentData?.scrolls) {
        record.answer1 = currentData.scrolls
          .filter((i) => i.allValues.stared === true)
          .map((i) => {
            return `${i.allValues.type1}${i.allValues.type2}${i.allValues.type3}${i.allValues.type4}_${i.allValues.totalprice}`;
          })
          .join("|");
      }
      record.answer2 = currentData.text;
      break;
    case "6":
      record.answer1 = currentData.textA;
      record.answer2 = currentData.textB;

      // check dropdowns/scrolls+textA+textB
      if (currentData?.finalDropdown) {
        const movieIndex = dropdownHeader.movies.indexOf(
          currentData.finalDropdown.allValues.movie
        );
        const scheduleIndex = dropdownHeader.schedules[movieIndex].indexOf(
          currentData.finalDropdown.allValues.schedule
        );
        const dateIndex = dropdownHeader.dates.indexOf(
          currentData.finalDropdown.allValues.date
        );
        const typeIndex = dropdownHeader.types.indexOf(
          currentData.finalDropdown.allValues.type
        );

        record.answer3 = `${movieIndex}${scheduleIndex}${dateIndex}${typeIndex}_${currentData.finalDropdown.allValues.totalprice}`;
      } else if (currentData?.finalScroll) {
        record.answer3 = `${currentData.finalScroll.allValues.type1}${currentData.finalScroll.allValues.type2}${currentData.finalScroll.allValues.type3}${currentData.finalScroll.allValues.type4}${currentData.finalScroll.allValues.type5}_${currentData.finalScroll.allValues.totalprice}`;
      }
      break;
    default:
      break;
  }

  //construct notes
  if (taskSet === "task_1") {
    record.notes = notes.task_1.allNotes.map((i) => i.text).join("|");
  } else {
    record.notes = notes.task_2.allNotes.map((i) => i.text).join("|");
  }

  return record;
};
