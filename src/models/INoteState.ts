import { INote } from "./INote.model.js";

export interface INoteState {
    todayDate: string;
    notes: INote[];

    notesUpdate: Function;
  }