// helpers

function getElementById(id: string): HTMLElement {
  const element = document.getElementById(id);
  if (!element) {
    throw new Error(`Element with ID "${id}" not found.`);
  }
  return element;
}

function formatDate(date: Date) {
  const finalOptions: Intl.DateTimeFormatOptions = {
    month: "long",
    day: "numeric",
  };
  return date.toLocaleDateString("en-US", finalOptions);
}

// -------

// interfaces

interface INote {
  id: string;
  title: string;
  description: string;
  date: string;
}

//-----------

// variables

const todayDateTemp = new Date();
const todayDateFormated = formatDate(todayDateTemp);
var notes: INote[] = [];

//----------

// fuction on page loaded

document.addEventListener("DOMContentLoaded", () => {
  renderNotesList();
  updateNoNotesDisplay();
});

//----------

// HTML elements getters

const emptyNotesContainer = getElementById("empty-notes-list-container");
const addNoteContainer = getElementById("add-new-note-container");
const notesList = getElementById("notes-list") as HTMLUListElement;

// -- new note -> inputs --
const title = getElementById("new-note-title") as HTMLInputElement;
const description = getElementById("new-note-description") as HTMLInputElement;

const noNotesContainer = getElementById(
  "empty-notes-list-container"
) as HTMLElement;
const newNotesContainer = getElementById("add-note-button") as HTMLElement;

//---------------------

// functions
function firstNoteAdd() {
  emptyNotesContainer.style.display = "none";
  addNoteContainer.style.display = "flex";
}

function notesLengthChecker() {
    emptyNotesContainer.style.display = notes.length === 0 ? "flex" : "none";
    newNotesContainer.style.display = notes.length === 0 ? "none" : "flex";
    newNotesContainer.style.visibility = notes.length === 0 ? "hidden": "visible";
}

function toggleVisibility(
  containerId: string,
  buttonId: string,
  shouldShowContainer: boolean
) {
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

  notes.forEach((note: INote) => {
    const listItem = document.createElement("li");
    listItem.id = note.id;
    listItem.innerHTML = `
        <div class="note">
          <div class="note-main">
            <span class="note-title">${note.title}</span>
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
  const newNote: INote = {
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

function deleteNote(id: string): INote[] {
  const noteToDelete: INote | undefined = notes.find((n: INote) => n.id === id);
  const updatedNotes: INote[] = noteToDelete
    ? notes.filter((n: INote) => n.id !== id)
    : notes;

  return updatedNotes;
}

function handleNoteDelete(id: string) {
  notes = deleteNote(id);

  notesLengthChecker();
  hideNewNoteContainer();
  renderNotesList();
}
// ------------
