import { state } from "../appState/noteState";
export function updateNoteInState(updatedNote) {
    const noteIndex = state.notes.findIndex((note) => note.id === updatedNote.id);
    noteIndex !== -1
        ? (state.notes[noteIndex] = updatedNote)
        : console.error("Note not found in the array.");
}
