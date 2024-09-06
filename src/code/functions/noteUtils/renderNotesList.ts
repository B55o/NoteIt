import { INote } from "../../../models/INote.model.js";
import { notesList } from "../../../pageContent/elements.getters.js";
import { state } from "../../appState/noteState.js";
import { sanitizeId } from "../../helpers/sanitizeId.js";
import { handleNoteDelete } from "../editNoteHandlers/deleteNote.js";
import { handleNoteEdit } from "../editNoteHandlers/handleNoteEdit.js";
import { notesLengthChecker } from "./notesLengthChecker.styles.js";


export function renderNotesList() {
  // Clear the current list
  notesList.innerHTML = "";
  if (state.notes.length > 0 && state.notes.length !== undefined) {
    state.notes.forEach((note: INote) => {
      const sanitizedId = sanitizeId(note.id)
      const listItem = document.createElement("li") as HTMLLIElement;
      listItem.id = sanitizedId;
      listItem.innerHTML = `
          <div id="${sanitizedId}" class="note">
            <div class="note-main">
              <span class="note-title">${note.title}</span>
              <div class="note-button-bar">
              <button class="note-action-button" id="edit-${sanitizedId}">
                  <img class="action-button-icon" src="./src/assets/EditIcon.png"/>
                </button>
                <button class="note-action-button" id="delete-${sanitizedId}">
                  <img class="action-button-icon" src="./src/assets/DeleteIcon.png"/>
                </button>
              </div>
            </div>
            <span class="note-description">${note.description}</span>
            <span class="note-date">${note.date}</span>
          </div>
        `;
      // elements
      const deleteButton = listItem.querySelector(`#delete-${sanitizedId}`);
      const editButton = listItem.querySelector(`#edit-${sanitizedId}`);

      // listeners
      deleteButton?.addEventListener("click", () => handleNoteDelete(sanitizedId));
      editButton?.addEventListener("click", () =>
        handleNoteEdit(note, listItem)
      );

      // actions
      notesList.appendChild(listItem);
    });
  } else {
    state.notesUpdate([]);
    notesLengthChecker(state.notes);
  }
}
