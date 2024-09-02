import { getElementById } from "../code/helpers/getElementById.js";

export const emptyNotesContainer = getElementById("empty-notes-list-container");
export const addNoteContainer = getElementById("add-new-note-container");
export const notesList = getElementById("notes-list") as HTMLUListElement;
export const notesLiArray = notesList.getElementsByTagName("li");

// -- new note -> inputs --
export const title = getElementById("new-note-title") as HTMLInputElement;
export const description = getElementById("new-note-description") as HTMLInputElement;

export const noNotesContainer = getElementById("empty-notes-list-container") as HTMLElement;
export const newNotesContainer = getElementById("add-note-button") as HTMLElement;
