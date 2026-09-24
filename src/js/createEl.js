

export function createEl(element,parent,classNa){
    let elementNa= document.createElement(`${element}`);
    elementNa.classList.add(`${classNa}`)
    parent.appendChild(`${elementNa}`);
    console.log(elementNa)

    return elementNa;
}

