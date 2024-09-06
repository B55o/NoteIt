import { INote } from "../../models/INote.model.js";
import { INoteState } from "../../models/INoteState.js";
import { formatDate } from "../helpers/formatDate.js";

export const state: INoteState = {
  todayDate: formatDate(new Date()),
  notes: [],

  notesUpdate(newNotes: INote[]) {
    this.notes = newNotes;
  },
};
