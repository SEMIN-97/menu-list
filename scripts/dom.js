export const render = (container, template) => {
  document.querySelector(container).innerHTML = template;
}

export const addClass = (element, className) => {
    element.classList.add(className);
}

export const removeClass = (element, className) => {
    element.classList.remove(className);
}