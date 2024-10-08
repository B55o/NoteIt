import { addNoteContainer, showNewNoteContainerButton } from "../../pageContent/elements.getters.js";
import { notesLengthChecker } from "./notesLengthChecker.js";
import { toggleVisibility } from "./toggleVisibility.js";
export function NewNoteContainerDisplay(notes, shouldDisplay) {
    toggleVisibility(addNoteContainer, showNewNoteContainerButton, shouldDisplay);
    notesLengthChecker(notes);
}
