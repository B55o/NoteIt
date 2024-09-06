import { state } from "../../appState/noteState.js";
import { newNoteContainerDisplay } from "../noteUtils/NewNoteContainerDisplay.js";
import { notesLengthChecker } from "../noteUtils/notesLengthChecker.styles.js";
import { renderNotesList } from "../noteUtils/renderNotesList.js";
export function handleNoteDelete(id) {
    state.notesUpdate(deleteNoteById(id, state.notes));
    updateUIAfterNoteChange();
}
function deleteNoteById(id, notes) {
    return notes.filter((note) => note.id !== id);
}
function updateUIAfterNoteChange() {
    notesLengthChecker(state.notes);
    newNoteContainerDisplay(state.notes, false);
    renderNotesList();
}
