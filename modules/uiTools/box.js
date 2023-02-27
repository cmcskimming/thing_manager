function create(parent=document.body,id=undefined,className=undefined){
    let newBox = document.createElement('box');
    if(id !== undefined){newBox.id=id;}
    if(className !== undefined){newBox.className=className;}

    let parentElement = parent;
    let newBoxReference = parentElement.appendChild(newBox);
    
    
    console.log("created box");


    return newBoxReference;
}

export var box={create};