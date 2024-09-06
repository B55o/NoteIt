import { noteTitleInput, noteDescriptionInput } from "../../../pageContent/elements.getters.js";
export function resetNewNoteInput() {
    noteTitleInput.value = "";
    noteDescriptionInput.value = "";
}
