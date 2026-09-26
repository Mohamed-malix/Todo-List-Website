

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

    return elementNa;
}


export function createBe(element, classNa,parent,brother){
    let elementNa= document.createElement(`${element}`);
    elementNa.classList.add(`${classNa}`)
    parent.insertBefore(elementNa, brother);
    console.log(elementNa)

    return elementNa;
}