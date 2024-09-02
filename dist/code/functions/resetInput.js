import { description, title } from "../../pageContent/elements.getters.js";
export function resetNewNoteInput() {
    title.value = "";
    description.value = "";
}
