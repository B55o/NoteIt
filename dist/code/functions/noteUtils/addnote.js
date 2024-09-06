import { noteTitleInput, noteDescriptionInput, } from "../../../pageContent/elements.getters.js";
import { state } from "../../appState/noteState.js";
import { sanitizeId } from "../../helpers/sanitizeId.js";
import { newNoteContainerDisplay } from "./NewNoteContainerDisplay.js";
import { notesLengthChecker } from "./notesLengthChecker.styles.js";
import { renderNotesList } from "./renderNotesList.js";
import { resetNewNoteInput } from "./resetInput.js";
import { updateNoNotesDisplay } from "./updateNotesDisplay.styles.js";
export function addNote() {
    let updatedNotes = state.notes;
    const noteTitle = noteTitleInput.value.length > 0 ? noteTitleInput.value : "untitled note";
    const sanitizedId = sanitizeId(noteTitle.replace(/\s/g, "") + state.notes.length);
    const newNote = {
        id: sanitizedId,
        title: noteTitleInput.value,
        description: noteDescriptionInput.value,
        date: state.todayDate,
    };
    updatedNotes.push(newNote);
    state.notesUpdate(updatedNotes);
    notesLengthChecker(state.notes);
    newNoteContainerDisplay(state.notes, false);
    renderNotesList();
    resetNewNoteInput();
    updateNoNotesDisplay(state.notes);
}
