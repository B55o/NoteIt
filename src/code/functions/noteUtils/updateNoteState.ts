import { INote } from "../../../models/INote.model.js";
import { state } from "../../appState/noteState.js";

export function updateNoteInState(updatedNote: INote) {
  const noteIndex = state.notes.findIndex((note: INote) => note.id === updatedNote.id);
  noteIndex !== -1
    ? (state.notes[noteIndex] = updatedNote)
    : console.error("Note not found in the array.");
}
