// ES6 
// PAINTING OBJECT
class Painting{
    constructor(title, author, reference){
        this.title = title;
        this.author = author;
        this.reference = reference;
        this.price = price;
    }
};

//UI OBJECT 
//All the functionality goes here
class UI {
    //add painting to list when Submit button is clicked
    addPaintingToList(painting){

        // show price with local formating
        const price =  parseInt(painting.price.value).toLocaleString(
            undefined, // leave undefined to use the browser's locale,
            // or use a string like 'en-US' to override it.
            { minimumFractionDigits: 2 }
        );

        //painting form where to add the list
        const paintingList = document.getElementById('paintings-list');
        //create tr element to build a table
        const tableRow = document.createElement('tr');
        //add inneHTML to the tableRow
        tableRow.innerHTML = `
            <td>${painting.title}</td>
            <td>${painting.author}</td>
            <td>${painting.reference}</td>
            <td>${price}</td>
            <td><a class='delete'>X</a></td>
        `
        paintingList.appendChild(tableRow);
    }

    // show message, either error or success
    showMessage(message,className){
        // create message element
        const div = document.createElement('div');
        div.className = `alert ${className}`;
        div.appendChild(document.createTextNode(message));

        //append to form
   
        const parentFormUI = document.querySelector('.add-error');
        const formUI = document.querySelector('.painting-form');
        parentFormUI.insertBefore(div,formUI);

        //set Timeout after 3 seconds
        setTimeout(function(){
            document.querySelector('.alert').remove()}, 3000);
    }

    //clear input fields once button is pressed
    clearFields(){
        document.querySelector('#title').value = '';
        document.querySelector('#author').value = '';
        document.querySelector('#reference').value = '';
        document.querySelector('#price').value = '';
    }

    // delete painting from the painting list
    deletePainting(target){
        if(target.className === 'delete'){
            target.parentElement.parentElement.remove();
        }
    }
};


//EVENT LISTENERS
//Submit Button 
const formUI = document.querySelector('.painting-form');
formUI.addEventListener('submit', addPainting);

function addPainting(event){
    //UI inputs
    const titleUI = document.getElementById('title').value,
          authorUI = document.getElementById('author').value,
          referenceUI = document.getElementById('reference').value,
          priceUI = document.getElementById('price').value;

    //Instantiate Painting         
    const painting = new Painting(titleUI, authorUI, referenceUI, priceUI);      

    //Instantiate UI
    const uiList = new UI();

    //Validate input, all the fields must be fillled 
    if(titleUI === '' || authorUI === '' || referenceUI === '' || priceUI === ''){
        //If any field missing show error, UI show message prototype
        uiList.showMessage("Fill in all the fields", "error");
    }
    else {
        //UI Add Painting Prototype
        uiList.addPaintingToList(painting);

        //UI Clear Fields Prototype
        uiList.clearFields();

        //show success message
        uiList.showMessage("Item added successfully", "success");
    }

event.preventDefault();
}

//Event Listener Delete Click 
const deleteLink = document.querySelector('#paintings-list');

deleteLink.addEventListener('click', removePainting);

function removePainting(event){

    uiList = new UI();

    uiList.deletePainting(event.target);
    
    uiList.showMessage("Item removed", "success");

event.preventDefault();    
}








