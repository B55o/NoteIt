export function toggleVisibility(
    container: HTMLElement,
    button: HTMLElement,
    shouldShowContainer: boolean
  ) {
  
    container.style.display = shouldShowContainer ? "flex" : "none";
    button.style.display = shouldShowContainer ? "none" : "flex";
  }