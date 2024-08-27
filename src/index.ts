// helpers

function getElemetById(id: string): HTMLElement {
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
  title: string;
  description: string;
  date: string;
}

//-----------

// variables

const todayDateTemp = new Date();
const todayDateFormated = formatDate(todayDateTemp);
const notes: INote[] = [];

//----------

// functions
function firstNoteAdd() {
  const emptyNotesContainer = getElemetById("empty-notes-list-container");
  const addNoteContainer = getElemetById("add-new-note-container");

  emptyNotesContainer.style.display = "none";
  addNoteContainer.style.display = "flex";
}

function toggleVisibility(
  containerId: string,
  buttonId: string,
  shouldShowContainer: boolean
) {
  const container = getElemetById(containerId);
  const button = getElemetById(buttonId);

  container.style.display = shouldShowContainer ? "flex" : "none";
  button.style.display = shouldShowContainer ? "none" : "flex";
}

function showNewNoteContainer() {
  toggleVisibility("add-new-note-container", "add-note-button", true);
}

function hideNewNoteContainer() {
  toggleVisibility("add-new-note-container", "add-note-button", false);
}

function renderNotesList() {
  const notesList = document.getElementById("notes-list") as HTMLUListElement;
  notesList.innerHTML = "";

  notes.forEach((note: INote) => {
    const listItem = document.createElement("li");
    listItem.id = note.title + notes.length;
    listItem.innerHTML = `
        <div class="note">
          <div class="note-main">
            <span class="note-title">${note.title}</span>
            <div class="note-button-bar">
              <button class="note-action-button">
                <img class="action-button-icon" src="./src/assets/EditIcon.png" alt="Edit"/>
              </button>
              <button class="note-action-button">
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
  const title = getElemetById("new-note-title") as HTMLInputElement;
  const description = getElemetById("new-note-description") as HTMLInputElement;

  title.value = "";
  description.value = "";
}

function addNote() {
  const title = getElemetById("new-note-title") as HTMLInputElement;
  const description = getElemetById("new-note-description") as HTMLInputElement;
  const newNote: INote = {
    title: title.value,
    description: description.value,
    date: todayDateFormated,
  };

  notes.push(newNote);
  hideNewNoteContainer();
  renderNotesList();
  resetNewNoteInput();
  updateNoNotesDisplay();
}

function updateNoNotesDisplay() {
  const noNotesContainer = getElemetById(
    "empty-notes-list-container"
  ) as HTMLElement;
  const newNotesContainer = getElemetById("add-note-button") as HTMLElement;

  noNotesContainer.style.display = notes.length === 0 ? "flex" : "none";
  newNotesContainer.style.display = notes.length === 0 ? "none" : "flex";
}

document.addEventListener("DOMContentLoaded", () => {
  renderNotesList();
  updateNoNotesDisplay();
});

// ------------
