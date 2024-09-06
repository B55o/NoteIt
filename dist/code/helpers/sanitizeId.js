export function sanitizeId(id) {
    return id.replace(/[^a-zA-Z0-9_-]/g, '_');
}
