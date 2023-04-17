//Task Type
export interface TaskType {
  taskname: string;
  finished: boolean;
  current: boolean;
}
export interface TaskState {
  allTasks: TaskType[];
}

export interface UserState {
  fullname: string;
}

//Info Type
export interface InfoType {
  name: string;
  on: boolean;
}
export interface InfoState {
  allInfos: InfoType[];
}

//Note Type
export interface NoteType {
  noteId: string;
  text: string;
}
export interface noteState {
  allNotes: NoteType[];
}

//Scroll Type
export type ScrollHeaderType = {
  name: string;
}[];
export interface ScrollRowType {
  scrollId: string;
  allValues: {
    stared: boolean;
    type1: string;
    type2: string;
    type3: string;
    type4: string;
    totalprice: string;
  };
}
export interface ScrollState {
  allScrolls: ScrollRowType[];
  finalScroll: ScrollRowType;
}

// Dropdown Type
export type DropdownHeaderType = {
  names: string[];
  movies: string[];
  schedules: string[][];
  dates: string[];
  types: string[];
};
export interface DropdownRowType {
  dropdownId: string;
  allValues: {
    stared: boolean;
    movie: string;
    schedule: string;
    date: string;
    type: string;
    totalprice: string;
  };
}
export interface DropdownState {
  allDropdowns: DropdownRowType[];
  finalDropdown: DropdownRowType;
}

// csesSlice Type
export interface csesTaskType {
  taskId: string;
  name: string;
  score: number;
}
export interface csesState {
  allTasks: csesTaskType[];
}

// Multiselect Type
export interface msTaskType {
  optionId: string;
  name: string;
  selected: boolean;
}

export interface MSState {
  allMSs: {
    ms1Task1: msTaskType[];
    ms2Task1: msTaskType[];
    ms1Task2: msTaskType[];
    ms2Task2: msTaskType[];
  };
}
