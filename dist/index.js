"use strict";
// helpers
function getElementById(id) {
    const element = document.getElementById(id);
    if (!element) {
        throw new Error(`Element with ID "${id}" not found.`);
    }
    return element;
}
function formatDate(date) {
    const finalOptions = {
        month: "long",
        day: "numeric",
    };
    return date.toLocaleDateString("en-US", finalOptions);
}
//-----------
// variables
const todayDateTemp = new Date();
const todayDateFormated = formatDate(todayDateTemp);
var notes = [];
var filteredNotes = [];
//----------
// fuction on page loaded
document.addEventListener("DOMContentLoaded", () => {
    renderNotesList();
    updateNoNotesDisplay();
});
//----------
// Global used HTML elements getters
const emptyNotesContainer = getElementById("empty-notes-list-container");
const addNoteContainer = getElementById("add-new-note-container");
const notesList = getElementById("notes-list");
const notesLiArray = notesList.getElementsByTagName("li");
// -- new note -> inputs --
const title = getElementById("new-note-title");
const description = getElementById("new-note-description");
const noNotesContainer = getElementById("empty-notes-list-container");
const newNotesContainer = getElementById("add-note-button");
//---------------------
// functions
function firstNoteAdd() {
    emptyNotesContainer.style.display = "none";
    addNoteContainer.style.display = "flex";
}
function notesLengthChecker() {
    emptyNotesContainer.style.display = notes.length === 0 ? "flex" : "none";
    newNotesContainer.style.display = notes.length === 0 ? "none" : "flex";
    newNotesContainer.style.visibility =
        notes.length === 0 ? "hidden" : "visible";
}
function toggleVisibility(containerId, buttonId, shouldShowContainer) {
    const container = getElementById(containerId);
    const button = getElementById(buttonId);
    container.style.display = shouldShowContainer ? "flex" : "none";
    button.style.display = shouldShowContainer ? "none" : "flex";
}
function showNewNoteContainer() {
    toggleVisibility("add-new-note-container", "add-note-button", true);
}
function hideNewNoteContainer() {
    toggleVisibility("add-new-note-container", "add-note-button", false);
    notesLengthChecker();
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
function resetNewNoteInput() {
    title.value = "";
    description.value = "";
}
function addNote() {
    const newNote = {
        id: title.value + notes.length,
        title: title.value,
        description: description.value,
        date: todayDateFormated,
    };
    notes.push(newNote);
    notesLengthChecker();
    hideNewNoteContainer();
    renderNotesList();
    resetNewNoteInput();
    updateNoNotesDisplay();
}
function updateNoNotesDisplay() {
    noNotesContainer.style.display = notes.length === 0 ? "flex" : "none";
    newNotesContainer.style.display = notes.length === 0 ? "none" : "flex";
}
function deleteNote(id) {
    const noteToDelete = notes.find((n) => n.id === id);
    const updatedNotes = noteToDelete
        ? notes.filter((n) => n.id !== id)
        : notes;
    return updatedNotes;
}
function handleNoteDelete(id) {
    notes = deleteNote(id);
    notesLengthChecker();
    hideNewNoteContainer();
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
