import { INote } from "../../models/INote.model.js";
import { notesLengthChecker } from "./notesLengthChecker.js";
import { toggleVisibility } from "./toggleVisibility.js";

export function hideNewNoteContainer(notes: INote[]) {
  toggleVisibility("add-new-note-container", "add-note-button", false);
  notesLengthChecker(notes);
}
