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

export interface ScrollHeaderType {
  name: string;
  price: number;
}
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
