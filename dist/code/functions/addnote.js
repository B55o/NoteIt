import { noteTitleInput, noteDescriptionInput, } from "../../pageContent/elements.getters";
import { state } from "../appState/noteState.js";
import { newNoteContainerDisplay } from "./NewNoteContainerDisplay.js";
import { notesLengthChecker } from "./noteUtils/notesLengthChecker.js";
import { renderNotesList } from "./noteUtils/renderNotesList.js";
import { resetNewNoteInput } from "./noteUtils/resetInput.js";
import { updateNoNotesDisplay } from "./noteUtils/updateNotesDisplay.js";
export function addNote() {
    const noteTitle = noteTitleInput.value.length > 0 ? noteTitleInput.value : "untitled note";
    const newNote = {
        id: noteTitle + state.notes.length,
        title: noteTitleInput.value,
        description: noteDescriptionInput.value,
        date: state.todayDate,
    };
    state.notes.push(newNote);
    notesLengthChecker(state.notes);
    newNoteContainerDisplay(state.notes, false);
    renderNotesList();
    resetNewNoteInput();
    updateNoNotesDisplay(state.notes);
}
