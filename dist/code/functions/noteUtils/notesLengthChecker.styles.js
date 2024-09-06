import { emptyNotesContainer, showNewNoteContainerButton } from "../../../pageContent/elements.getters.js";
export function notesLengthChecker(notes) {
    emptyNotesContainer.style.display = notes.length === 0 ? "flex" : "none";
    showNewNoteContainerButton.style.display = notes.length === 0 ? "none" : "flex";
    showNewNoteContainerButton.style.visibility =
        notes.length === 0 ? "hidden" : "visible";
}
