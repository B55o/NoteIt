import { INote } from "../../models/INote.model.js";

export function deleteNote(id: string, notes: INote[]): INote[] {
    const noteToDelete: INote | undefined = notes.find((n: INote) => n.id === id);
    const updatedNotes: INote[] = noteToDelete
      ? notes.filter((n: INote) => n.id !== id)
      : notes;
  
    return updatedNotes;
  }