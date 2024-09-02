import { INote } from "../../models/INote.model.js";
import {
  newNotesContainer,
  noNotesContainer,
} from "../../pageContent/elements.getters.js";

export function updateNoNotesDisplay(notes: INote[]) {
  noNotesContainer.style.display = notes.length === 0 ? "flex" : "none";
  newNotesContainer.style.display = notes.length === 0 ? "none" : "flex";
}
