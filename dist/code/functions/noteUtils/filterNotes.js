import { notesLiArray, searchPhrase, } from "../../../pageContent/elements.getters.js";
export function filterNotes() {
    for (let i = 0; i < notesLiArray.length; i++) {
        const noteTitleElement = notesLiArray[i].getElementsByClassName("note-title")[0];
        const noteTitleValue = noteTitleElement.textContent;
        notesLiArray[i].style.display =
            noteTitleValue.indexOf(searchPhrase.value) > -1 ? "" : "none";
    }
}
