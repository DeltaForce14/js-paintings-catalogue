//Painting Constructor, ES5 
function Painting(title, author, reference){
    this.title =title;
    this.author = author;
    this.reference = reference;
};

//UI Constructor, set of prototype methods
//empty function, everything will go is as prototype
function UI(){};

//ADD PAINTING PROTOTYPES
//Prototype: UI object to add painting to the list 
UI.prototype.addPaintingToList = function(painting){
    const paintingListUI = document.getElementById('paintings-list');
    
    //Create tr(table row) element
    const tableRow = document.createElement('tr');
    //insert innerHTML to tr
    tableRow.innerHTML = `
        <td>${painting.title}</td>
        <td>${painting.author}</td>
        <td>${painting.reference}</td>
        <td><a href="#" class="delete">X</a></td>
    `;

    paintingListUI.appendChild(tableRow);
}


//Prototype: Show Alert
UI.prototype.showMessage = function(message, className){
    //create div
    const div = document.createElement('div');
    //add class name
    div.className = `alert ${className}`;
    // add text
    div.appendChild(document.createTextNode(message));
    //get parent
    const divError = document.querySelector('.add-error');
    const form = document.querySelector('.painting-form');

    divError.insertBefore(div,form);

    //timeout after 3 seconds
    setTimeout(function(){
        document.querySelector('.alert').remove()}, 3000);
    
}

//Prototype: Clear Fileds 
UI.prototype.clearFields = function(){
    document.getElementById('title').value = "";
    document.getElementById('author').value = "";
    document.getElementById('reference').value = "";
}

//ADD PAINTING PROTOTYPES END -----

//DELETE PAINTINGS PROTOTYPES
UI.prototype.deletePainting = function(target){
    if(target.className === 'delete'){
        console.log('deleting...')
        target.parentElement.parentElement.remove();
    }
}

//DELETE PAINTINGS PROTOTYPES END ----

//ADD PAINTING START
//UI Elements
const formUI = document.querySelector(".painting-form");


//Event Listeners 
formUI.addEventListener('submit',addPainting);


//Add paiting to the list
function addPainting(event){
    //Form values
    const titleUI = document.getElementById('title').value,
          authorUI = document.getElementById('author').value,
          referenceUI = document.getElementById('reference').value;

    //Instantiate Painting      
    const painting = new Painting(titleUI,authorUI,referenceUI);   

    //Instantiate UI
    const uiList = new UI();

    //validation input
    if(titleUI === '' || authorUI === '' || referenceUI === ''){
        uiList.showMessage("Please enter all the information", "error");
    } else {
        //add painting to the list of paintings
        //prototype creates enter UI constructor
         uiList.addPaintingToList(painting);

        //show the painting was added successfully
        uiList.showMessage("Painting added", "success");

        //clear fields
        uiList.clearFields();
    }

    event.preventDefault();
}

//ADD PAINTING END -----


//DELETE PAINTINGS by Clicking X
// UI Element: List Table
const paintingList = document.getElementById('paintings-list');
console.log(paintingList);

//Event Listener
paintingList.addEventListener('click',removePainting);

function removePainting(event){
    //Instantiate UI
    const uiList2 = new UI();
    // delete Painting prototype
    uiList2.deletePainting(event.target);

    //show message 
    uiList2.showMessage("Painting removed", 'success');

event.preventDefault(); //add for page not to go to the top
}

