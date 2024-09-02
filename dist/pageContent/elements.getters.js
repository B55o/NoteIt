import { getElementById } from "../code/helpers/getElementById.js";
export const emptyNotesContainer = getElementById("empty-notes-list-container");
export const addNoteContainer = getElementById("add-new-note-container");
export const notesList = getElementById("notes-list");
export const notesLiArray = notesList.getElementsByTagName("li");
// -- new note -> inputs --
export const title = getElementById("new-note-title");
export const description = getElementById("new-note-description");
export const noNotesContainer = getElementById("empty-notes-list-container");
export const newNotesContainer = getElementById("add-note-button");
