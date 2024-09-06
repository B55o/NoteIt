import { sanitizeId } from "../../helpers/sanitizeId.js";
import { handleNoteSave } from "./handleNoteSave.js";
export function handleNoteEdit(note, listItem) {
    let currentTitle = note.title;
    let currentDescription = note.description;
    const sanitizedId = sanitizeId(note.id);
    // Getters from edited note
    const titleElement = listItem.querySelector(".note-title");
    const descriptionElement = listItem.querySelector(".note-description");
    const buttonBar = listItem.querySelector(".note-button-bar");
    // Change span to input with current values and button ids&icosn
    titleElement.innerHTML = `<input type="text" class="new-note-title" value="${note.title}" />`;
    descriptionElement.innerHTML = `<textarea class="new-note-description">${note.description}</textarea>`;
    buttonBar.innerHTML = `
  <button class="note-action-button" id="save-${sanitizedId}">
    <img class="action-button-icon" src="./src/assets/saveIcon.png"/>
  </button>
  <button class="note-action-button" id="cancel-${sanitizedId}">
    <img class="action-button-icon" src="./src/assets/CancelIcon.png"/>
  </button>
`;
    const saveButton = listItem.querySelector(`#save-${sanitizedId}`);
    const cancelButton = listItem.querySelector(`#cancel-${sanitizedId}`);
    // New fields getters
    const titleInput = titleElement.querySelector(".new-note-title");
    const descriptionInput = descriptionElement.querySelector(".new-note-description");
    // New fields getters as event listeners
    titleInput.addEventListener("input", () => {
        note.title = titleInput.value;
    });
    // Event listeners
    descriptionInput.addEventListener("input", () => {
        note.description = descriptionInput.value;
    });
    saveButton.onclick = () => {
        handleNoteSave(note);
    };
    cancelButton.onclick = () => {
        const noUpdated = Object.assign(Object.assign({}, note), { title: currentTitle, description: currentDescription });
        handleNoteSave(noUpdated);
    };
}
