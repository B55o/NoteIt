import { INote } from "../../../models/INote.model.js";
import { state } from "../../appState/noteState.js";
import { newNoteContainerDisplay } from "../noteUtils/NewNoteContainerDisplay.js";
import { notesLengthChecker } from "../noteUtils/notesLengthChecker.styles.js";
import { renderNotesList } from "../noteUtils/renderNotesList.js";

export function handleNoteDelete(id: string): void {
  state.notesUpdate(deleteNoteById(id, state.notes));
  updateUIAfterNoteChange();
}

function deleteNoteById(id: string, notes: INote[]): INote[] {
  return notes.filter((note) => note.id !== id);
}

function updateUIAfterNoteChange(): void {
  notesLengthChecker(state.notes);
  newNoteContainerDisplay(state.notes, false);
  renderNotesList();
}
