export function createPa(element, classNa, parent) {
  const elementNa = document.createElement(`${element}`);
  elementNa.classList.add(`${classNa}`);
  parent.appendChild(elementNa);

  return elementNa;
}

export function createEl(element, classNa, text, parent) {
  const elementNa = document.createElement(`${element}`);
  elementNa.classList.add(`${classNa}`);
  elementNa.textContent = `${text}`;
  parent.appendChild(elementNa);

  return elementNa;
}

export function createBe(element, classNa, parent, brother) {
  const elementNa = document.createElement(`${element}`);
  elementNa.classList.add(`${classNa}`);
  parent.insertBefore(elementNa, brother);

  return elementNa;
}
