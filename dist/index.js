import { state } from "./code/appState/noteState.js";
import { addNote } from "./code/functions/noteUtils/addnote.js";
import { filterNotes } from "./code/functions/noteUtils/filterNotes.js";
import { firstNoteAdd } from "./code/functions/noteUtils/firstNoteAdd.styles.js";
import { newNoteContainerDisplay } from "./code/functions/noteUtils/NewNoteContainerDisplay.js";
import { renderNotesList } from "./code/functions/noteUtils/renderNotesList.js";
import { updateNoNotesDisplay } from "./code/functions/noteUtils/updateNotesDisplay.styles.js";
import { addFirstNoteButton, showNewNoteContainerButton, hideNewNoteContainerButton, addNewNoteButton, searchPhrase, } from "./pageContent/elements.getters.js";
// Function on page loaded
document.addEventListener("DOMContentLoaded", () => {
    renderNotesList();
    updateNoNotesDisplay(state.notes);
});
// Event listeners
addFirstNoteButton.addEventListener("click", () => firstNoteAdd());
showNewNoteContainerButton.addEventListener("click", () => newNoteContainerDisplay(state.notes, true));
hideNewNoteContainerButton.addEventListener("click", () => newNoteContainerDisplay(state.notes, false));
addNewNoteButton.addEventListener("click", () => addNote());
searchPhrase.addEventListener("keyup", () => filterNotes());
