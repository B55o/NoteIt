import { addNoteContainer, showNewNoteContainerButton } from "../../../pageContent/elements.getters.js";
import { notesLengthChecker } from "./notesLengthChecker.styles.js";
import { toggleVisibility } from "../../helpers/toggleVisibility.js";
export function newNoteContainerDisplay(notes, shouldDisplay) {
    toggleVisibility(addNoteContainer, showNewNoteContainerButton, shouldDisplay);
    if (!shouldDisplay) {
        notesLengthChecker(notes);
    }
}
