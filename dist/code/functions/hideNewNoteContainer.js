import { notesLengthChecker } from "./notesLengthChecker.js";
import { toggleVisibility } from "./toggleVisibility.js";
export function hideNewNoteContainer(notes) {
    toggleVisibility("add-new-note-container", "add-note-button", false);
    notesLengthChecker(notes);
}
