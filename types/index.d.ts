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

export interface InfoType {
  name: string;
  on: boolean;
}
export interface InfoState {
  allInfos: InfoType[];
}

export interface NoteType {
  noteId: string;
  text: string;
}
export interface noteState {
  allNotes: NoteType[];
}

export type ScrollHeaderType = {
  name: string;
  price: number;
}[];

export interface ScrollRowType {
  scrollId: string;
  allValues: {
    type1: number;
    type2: number;
    type3: number;
    type4: number;
    totalprice: number;
  };
}
export interface ScrollState {
  allScrolls: ScrollRowType[];
}

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
    movie: string;
    schedule: string;
    date: string;
    type: string;
    totalprice: string;
  };
}
export interface DropdownState {
  allDropdowns: DropdownRowType[];
}
