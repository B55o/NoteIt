export function deleteNote(id, notes) {
    const noteToDelete = notes.find((n) => n.id === id);
    const updatedNotes = noteToDelete
        ? notes.filter((n) => n.id !== id)
        : notes;
    return updatedNotes;
}
