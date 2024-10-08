import { INote } from "../../../models/INote.model.js";
import { addNoteContainer, showNewNoteContainerButton } from "../../../pageContent/elements.getters.js";
import { notesLengthChecker } from "./notesLengthChecker.styles.js";
import { toggleVisibility } from "../../helpers/toggleVisibility.js";

export function newNoteContainerDisplay(notes: INote[], shouldDisplay: boolean) {
  toggleVisibility(addNoteContainer, showNewNoteContainerButton, shouldDisplay);
  if (!shouldDisplay) {
    notesLengthChecker(notes);
  }
}
