import { getElementById } from "../code/helpers/getElementById.js";

// empty notes list
export const emptyNotesContainer = getElementById("empty-notes-list-container");
export const addFirstNoteButton = getElementById("add-first-note");

// notes list 
export const notesList = getElementById("notes-list") as HTMLUListElement;
export const notesLiArray = notesList.getElementsByTagName("li");

// new note inputs
export const noteTitleInput = getElementById("new-note-title") as HTMLInputElement;
export const noteDescriptionInput = getElementById("new-note-description") as HTMLInputElement;

// new note container display actions
export const hideNewNoteContainerButton = getElementById("hide-new-note-container");
export const showNewNoteContainerButton = getElementById("show-new-note-container-button");

// add note actions & display
export const addNewNoteButton = getElementById("add-new-note");
export const addNoteContainer = getElementById("add-new-note-container");

// search notes input
export const searchPhrase = getElementById("search-input") as HTMLInputElement;