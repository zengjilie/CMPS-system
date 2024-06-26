//User Type
export interface UserState {
  userInfo: UserType;
  userid: string;
}
//Task Type
export interface TaskProgressType {
  id: string;
  name: string;
  finished: boolean;
  current: boolean;
}

export interface TaskProgressOptionType {
  taskName: string;
  taskOptions: TaskProgressType[];
}

export interface TaskProgressState {
  task_1: TaskProgressOptionType;
  task_2: TaskProgressOptionType;
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
export interface NoteState {
  task_1: {
    allNotes: NoteType[];
  };
  task_2: {
    allNotes: NoteType[];
  };
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
    type5?: string;
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

//Task Experience Type
export interface TaskOptionType {
  name: string;
  score: number;
}
export interface TaskExpType {
  taskName: string;
  taskOptions: TaskOptionType[];
}

export interface TaskExpState {
  task_1: TaskExpType;
  task_2: TaskExpType;
  task_all: TaskExpType;
}

//Current page Data type
export interface CurrentDataType {
  text?: string;
  ms?: msTaskType[];
  dropdowns?: DropdownRowType[];
  textA?: string;
  textB?: string;
  finalDropdown?: DropdownRowType;
  scrolls?: ScrollRowType[];
  finalScroll?: ScrollRowType;
}

export type TaskSetType = "task_1" | "task_2";
export type TaskIdType = "1" | "2" | "3" | "4" | "5" | "6" | "exp";

//UserType
export interface UserType {
  userid?: string;
  userclass: string;
  fullname: string;
  grade: string;
  school: string;
  studentid: string;
  sex: string;
  createdat?: string;
  usertoken?: string;
}

//RecordType
export interface RecordType {
  userid: string;
  taskcode: string;
  action: string;
  section: string;
  createdat: string;
  answer1?: string;
  answer2?: string;
  answer3?: string;
  notes?: string;
}

//SurveyType
export interface SurveyType {
  userid: string;
  taskcode:
    | "A"
    | "B"
    | "ALL"
    | "MPSAS"
    | "CSTM"
    | "AT"
    | "EMO"
    | "AAP"
    | "STSR";
  answer: string;
}

// Survey Task Type
export interface SurveyTaskType {
  taskId: string;
  name: string;
  score: number;
}
export interface SurveyState {
  allTasks: SurveyTaskType[];
}
