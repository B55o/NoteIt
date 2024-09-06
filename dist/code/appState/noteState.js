import { formatDate } from "../helpers/formatDate.js";
export const state = {
    todayDate: formatDate(new Date()),
    notes: [],
    notesUpdate(newNotes) {
        this.notes = newNotes;
    },
};
