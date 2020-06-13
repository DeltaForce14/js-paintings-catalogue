//Painting Constructor, ES5 
function Painting(title,author,reference){
    this.title = title;
    this.author = author;
    this.reference = reference;
};

//UI Constructor, set of prototype methods
//empty function, everything will go is as prototype
function UI (){};

//UI elements
const formUI = document.querySelector(".painting-form");


// Event Listeners 
formUI.addEventListener("submit",addPainting);

function addPainting(event){
    //UI inputs
    const titleUI = document.getElementById("title").value,
          authorUI = document.getElementById("author").value,
          referenceUI = document.getElementById("reference").value

    //createing new painting from input
    const painting = new Painting(titleUI, authorUI, referenceUI);   

    console.log(painting);

    event.preventDefault();
}



