// ES6 
// PAINTING OBJECT
class Painting{
    constructor(title, author, reference){
        this.title = title;
        this.author = author;
        this.reference = reference;
    }
};

//UI OBJECT 
//All the functionality goes here
class UI {
    //add painting to list when Submit button is clicked
    addPaintingToList(painting){
        //painting form where to add the list
        const paintingList = document.getElementById('paintings-list');
        //create tr element to build a table
        const tableRow = document.createElement('tr');
        //add inneHTML to the tableRow
        tableRow.innerHTML = `
            <td>${painting.title}</td>
            <td>${painting.author}</td>
            <td>${painting.reference}</td>
            <td><a class='delete'>X</a></td>
        `

        paintingList.appendChild(tableRow);

    }

    // show message, either error or success
    showMessage(){

    }

    //clear input fields once button is pressed
    clearFields(){

    }

    // delete painting from the painting list
    deletePainting(){

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
          referenceUI = document.getElementById('reference').value;

    //Instantiate Painting         
    const painting = new Painting(titleUI, authorUI, referenceUI);      

    //Instantiate UI
    const uiList = new UI();


    uiList.addPaintingToList(painting);

event.preventDefault();
}







