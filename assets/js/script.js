var pageContentEl = document.getElementById("page-content");
var promptEl = document.getElementById("prompt");
let howToBtn = document.getElementById("how-to-btn");
var submitBtn = document.getElementById("start");
let modal = document.getElementById("modal");
let span = document.getElementsByClassName("close")[0];

howToBtn.onclick = function() {
    modal.style.display = "block";
};

span.onclick = function() {
    modal.style.display = "none";
};
window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
};

var gameOn = function(event) {
  var targetEl = event.target;
  if (targetEl.matches("#start")) {
    resetPage();
    displayLiquorBases();
  }
};

var resetPage = function() {
  promptEl.remove();
  return newPromptEL = document.createElement("div");
};

//popular alcohol bases we are working with
var liquorBases = ["gin", "vodka", "tequila", "whiskey", "rum", "brandy"];
//empty array to hold drink ids associated with each base
var cocktailLists = [];

var displayLiquorBases = function() {
  //iterate for every base liquor
  for (i = 0; i < liquorBases.length; i++) {
    //create a card for each base
    var liquorBaseEl = document.createElement("div");
    liquorBaseEl.className = "card";
    liquorBaseEl.textContent = liquorBases[i].charAt(0).toUpperCase() + liquorBases[i].slice(1);
    
    //create a select button for each card
    var liquorBaseButtonEl = document.createElement("button");
    liquorBaseButtonEl.type = "click";
    liquorBaseButtonEl.className = "btn";
    liquorBaseButtonEl.textContent = "Select";

    //append new elements to page
    liquorBaseEl.appendChild(liquorBaseButtonEl);
    newPromptEL.appendChild(liquorBaseEl);
    pageContentEl.appendChild(newPromptEL);
  }
};

var selectLiquorBase = function(event) {

}

var getLiquorData = function() {
  //iterate through all liquor bases
  for (i = 0; i < liquorBases.length; i++) {
    //select a liquor from the array
    var liquorBase = liquorBases[i];
    //grab the api for this liquor
    var apiUrl = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" + liquorBase;
    
    //fetch the api
    fetch(apiUrl).then(function(response) {
      //request was successful
      if (response.ok) {
        //parse the response
        response.json().then(function(data) {
          console.log(data);
          //empty array to hold drink Ids
          var drinkIds = [];
          for (i = 0; i < data.drinks.length; i++) {
            //push every drink Id associated with this liquor into the array
            drinkIds.push(data.drinks[i].idDrink);
          }
          //push every liquor with their respective drink Id arrays into another array
          cocktailLists.push({liquorBase:drinkIds});
        });
      }
    }); 
  } 
  console.log(cocktailLists);
};

pageContentEl.addEventListener("click", gameOn);

getLiquorData();




























// // Script to open and close sidebar
// function w3_open() {
//     document.getElementById("mySidebar").style.display = "block";
//     document.getElementById("myOverlay").style.display = "block";
//   }
  
//   function w3_close() {
//     document.getElementById("mySidebar").style.display = "none";
//     document.getElementById("myOverlay").style.display = "none";
//   }
  
//   // Modal Image Gallery
//   function onClick(element) {
//     document.getElementById("img01").src = element.src;
//     document.getElementById("modal01").style.display = "block";
//     var captionText = document.getElementById("caption");
//     captionText.innerHTML = element.alt;
//   }