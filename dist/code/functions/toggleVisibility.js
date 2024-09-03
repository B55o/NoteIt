export function toggleVisibility(container, button, shouldShowContainer) {
    container.style.display = shouldShowContainer ? "flex" : "none";
    button.style.display = shouldShowContainer ? "none" : "flex";
}
