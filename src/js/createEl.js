

export function createPa(element, classNa, parent){
    let elementNa= document.createElement(`${element}`);
    elementNa.classList.add(`${classNa}`)
    parent.appendChild(elementNa);
    console.log(elementNa)

    return elementNa;
}


export function createEl(element, classNa,text, parent){
    let elementNa= document.createElement(`${element}`);
    elementNa.classList.add(`${classNa}`)
    elementNa.textContent=`${text}`;
    parent.appendChild(elementNa);
    console.log(elementNa)
}