import { deleteNote } from "./code/functions/deleteNote.js";
import { hideNewNoteContainer } from "./code/functions/hideNewNoteContainer.js";
import { notesLengthChecker } from "./code/functions/notesLengthChecker.js";
import { resetNewNoteInput } from "./code/functions/resetInput.js";
import { toggleVisibility } from "./code/functions/toggleVisibility.js";
import { updateNoNotesDisplay } from "./code/functions/updateNotesDisplay.js";
import { formatDate } from "./code/helpers/formatDate.js";
import { getElementById } from "./code/helpers/getElementById.js";
import { emptyNotesContainer, addNoteContainer, notesList, title, description, notesLiArray, } from "./pageContent/elements.getters.js";
// global variables
//TODO: replace with object handled state management system, update/move methods that should be included in the state object
const todayDateTemp = new Date();
const todayDateFormated = formatDate(todayDateTemp);
var notes = [];
//----------
// fuction on page loaded
document.addEventListener("DOMContentLoaded", () => {
    renderNotesList();
    updateNoNotesDisplay(notes);
});
//----------
// functions
//TODO: add event listeners
function firstNoteAdd() {
    emptyNotesContainer.style.display = "none";
    addNoteContainer.style.display = "flex";
}
function showNewNoteContainer() {
    toggleVisibility("add-new-note-container", "add-note-button", true);
}
function renderNotesList() {
    notesList.innerHTML = "";
    notes.forEach((note) => {
        const listItem = document.createElement("li");
        listItem.id = note.id;
        listItem.innerHTML = `
        <div class="note">
          <div class="note-main">
            <span id="note-title" class="note-title">${note.title}</span>
            <div class="note-button-bar">
              <button class="note-action-button">
                <img class="action-button-icon" src="./src/assets/EditIcon.png" alt="Edit"/>
              </button>
              <button class="note-action-button" onClick="handleNoteDelete('${listItem.id}')">
                <img class="action-button-icon" src="./src/assets/DeleteIcon.png" alt="Delete"/>
              </button>
            </div>
          </div>
          <span class="note-description">${note.description}</span>
          <span class="note-date">${note.date}</span>
        </div>
      `;
        notesList.appendChild(listItem);
    });
}
function addNote() {
    const newNote = {
        id: title.value + notes.length,
        title: title.value,
        description: description.value,
        date: todayDateFormated,
    };
    notes.push(newNote);
    notesLengthChecker(notes);
    hideNewNoteContainer(notes);
    renderNotesList();
    resetNewNoteInput();
    updateNoNotesDisplay(notes);
}
function handleNoteDelete(id) {
    notes = deleteNote(id, notes);
    notesLengthChecker(notes);
    hideNewNoteContainer(notes);
    renderNotesList();
}
function filterNotes() {
    const searchPhrase = getElementById("search-input");
    for (let i = 0; i < notesLiArray.length; i++) {
        const noteTitleElement = notesLiArray[i].getElementsByClassName("note-title")[0];
        const noteTitleValue = noteTitleElement.textContent;
        notesLiArray[i].style.display =
            noteTitleValue.indexOf(searchPhrase.value) > -1 ? "" : "none";
    }
}
// ------------
