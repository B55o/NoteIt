import { emptyNotesContainer, newNotesContainer } from "../../pageContent/elements.getters.js";
export function notesLengthChecker(notes) {
    emptyNotesContainer.style.display = notes.length === 0 ? "flex" : "none";
    newNotesContainer.style.display = notes.length === 0 ? "none" : "flex";
    newNotesContainer.style.visibility =
        notes.length === 0 ? "hidden" : "visible";
}
