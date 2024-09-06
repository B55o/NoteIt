import { addNoteContainer, showNewNoteContainerButton } from "../../pageContent/elements.getters.js";
import { notesLengthChecker } from "./noteUtils/notesLengthChecker.js";
import { toggleVisibility } from "./toggleVisibility.js";
export function newNoteContainerDisplay(notes, shouldDisplay) {
    toggleVisibility(addNoteContainer, showNewNoteContainerButton, shouldDisplay);
    if (!shouldDisplay) {
        notesLengthChecker(notes);
    }
}
