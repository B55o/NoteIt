export function sanitizeId(id: string) {
    return id.replace(/[^a-zA-Z0-9_-]/g, '_');
}  