import { deleteNote } from "./code/functions/deleteNote.js";
import { firstNoteAdd } from "./code/functions/firstNoteAdd.js";
import { newNoteContainerDisplay } from "./code/functions/NewNoteContainerDisplay.js";
import { notesLengthChecker } from "./code/functions/notesLengthChecker.js";
import { resetNewNoteInput } from "./code/functions/resetInput.js";
import { updateNoNotesDisplay } from "./code/functions/updateNotesDisplay.js";
import { formatDate } from "./code/helpers/formatDate.js";
import { INote } from "./models/INote.model.js";
import {
  notesList,
  title,
  description,
  notesLiArray,
  addFirstNoteButton,
  showNewNoteContainerButton,
  hideNewNoteContainerButton,
  addNewNoteButton,
  searchPhrase,
  // noteDeleteButton,
} from "./pageContent/elements.getters.js";

// global variables
//TODO: replace with object handled state management system, update/move methods that should be included in the state object

const todayDateTemp = new Date();
const todayDateFormated = formatDate(todayDateTemp);
var notes: INote[] = [];

//----------

// fuction on page loaded

document.addEventListener("DOMContentLoaded", () => {
  renderNotesList();
  updateNoNotesDisplay(notes);
});

//----------

// main functions

function renderNotesList() {
  notesList.innerHTML = "";

  notes.forEach((note: INote) => {
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
              <button id="note-delete-button" class="note-action-button" onClick="handleNoteDelete('${listItem.id}')">
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
  const newNote: INote = {
    id: title.value + notes.length,
    title: title.value,
    description: description.value,
    date: todayDateFormated,
  };

  notes.push(newNote);
  notesLengthChecker(notes);
  newNoteContainerDisplay(notes, false);
  renderNotesList();
  resetNewNoteInput();
  updateNoNotesDisplay(notes);
}

//TODO: embed methods: delete and edit into generated html <li> element
function handleNoteDelete(id: string) {
  notes = deleteNote(id, notes);

  notesLengthChecker(notes);
  newNoteContainerDisplay(notes, false);
  renderNotesList();
}

function filterNotes() {
  for (let i = 0; i < notesLiArray.length; i++) {
    const noteTitleElement =
      notesLiArray[i].getElementsByClassName("note-title")[0];
    const noteTitleValue = noteTitleElement.textContent;
    notesLiArray[i].style.display =
      noteTitleValue!.indexOf(searchPhrase.value) > -1 ? "" : "none";
  }
}
// ------------

// event listeners

addFirstNoteButton.addEventListener("click", () => firstNoteAdd());
showNewNoteContainerButton.addEventListener("click", () =>
  newNoteContainerDisplay(notes, true)
);
hideNewNoteContainerButton.addEventListener("click", () =>
  newNoteContainerDisplay(notes, false)
);
addNewNoteButton.addEventListener("click", () => addNote());
searchPhrase.addEventListener("keyup", () => filterNotes());
// noteDeleteButton.addEventListener("click", ()=> handleNoteDelete("1"))

// --------------
