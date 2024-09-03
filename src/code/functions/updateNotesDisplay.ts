import { INote } from "../../models/INote.model.js";
import {
  emptyNotesContainer,
  showNewNoteContainerButton,
} from "../../pageContent/elements.getters.js";

export function updateNoNotesDisplay(notes: INote[]) {
  emptyNotesContainer.style.display = notes.length === 0 ? "flex" : "none";
  showNewNoteContainerButton.style.display = notes.length === 0 ? "none" : "flex";
}
