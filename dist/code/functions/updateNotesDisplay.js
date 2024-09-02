import { newNotesContainer, noNotesContainer, } from "../../pageContent/elements.getters.js";
export function updateNoNotesDisplay(notes) {
    noNotesContainer.style.display = notes.length === 0 ? "flex" : "none";
    newNotesContainer.style.display = notes.length === 0 ? "none" : "flex";
}
