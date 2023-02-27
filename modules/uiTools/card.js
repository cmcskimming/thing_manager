function create(parent=document.body,id=undefined,className=undefined){
    let newCard = document.createElement('box');
    if(id !== undefined){newCard.id=id;}
    if(className !== undefined){newCard.className=className;}

    let parentElement = parent;
    let newCardReference = parentElement.appendChild(newCard);
    
    
    console.log("created card");

    
    return newCardReference;
}

export var card={create};