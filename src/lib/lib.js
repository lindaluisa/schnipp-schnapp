export const createHTML = (html, className) => {
  const div = document.createElement('div');
  div.classList.add(className);
  div.innerHTML = html;
  return div;
}