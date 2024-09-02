export function getElementById(id: string): HTMLElement {
    const element = document.getElementById(id);
    if (!element) {
      throw new Error(`Element with ID "${id}" not found.`);
    }
    return element;
  }