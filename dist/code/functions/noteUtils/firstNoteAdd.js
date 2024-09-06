import { emptyNotesContainer, addNoteContainer } from "../../../pageContent/elements.getters.js";
export function firstNoteAdd() {
    emptyNotesContainer.style.display = "none";
    addNoteContainer.style.display = "flex";
}
