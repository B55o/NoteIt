import { getElementById } from "../helpers/getElementById.js";

export function toggleVisibility(
    containerId: string,
    buttonId: string,
    shouldShowContainer: boolean
  ) {
    const container = getElementById(containerId);
    const button = getElementById(buttonId);
  
    container.style.display = shouldShowContainer ? "flex" : "none";
    button.style.display = shouldShowContainer ? "none" : "flex";
  }