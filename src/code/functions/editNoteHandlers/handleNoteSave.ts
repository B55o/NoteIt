import { INote } from "../../../models/INote.model.js";
import { renderNotesList } from "../noteUtils/renderNotesList.js";
import { updateNoteInState } from "../noteUtils/updateNoteState.js";

export function handleNoteSave(updatedNote: INote) {
  updateNoteInState(updatedNote);
  renderNotesList();
}