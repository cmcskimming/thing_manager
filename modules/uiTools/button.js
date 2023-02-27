function create(parent=undefined,id=undefined,className=undefined,text="button"){
    let newButton = document.createElement('button');
    if(id !== undefined){newButton.id=id;}
    if(className !== undefined){newButton.className=className}
    newButton.textContent = text;

    let parentElement = document.body;
    let newButtonReference = parentElement.appendChild(newButton);
    
    
    console.log("created button");

    
    return newButtonReference;
}

export var button={create};