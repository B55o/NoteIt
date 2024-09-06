import { renderNotesList } from "../noteUtils/renderNotesList.js";
import { updateNoteInState } from "../noteUtils/updateNoteState.js";
export function handleNoteSave(updatedNote) {
    updateNoteInState(updatedNote);
    renderNotesList();
}
