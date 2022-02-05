let howToBtn = document.getElementById("how-to-btn")
let modal = document.getElementById("modal")
let span = document.getElementsByClassName("close")[0];
const modalText = document.getElementsByClassName("modal")
let modalExample = "Hello world";

// Modal Functionality start
howToBtn.onclick = function() {
    modal.style.display = "block"
}

span.onclick = function() {
    modal.style.display = "none";
  }
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
 
    }
  }
//  Modal functionality end

function startGame () {
console.log("hey")




}

function displayLiquor(){
    const newDiv = document.createElement("div");
    newDiv.classList.add('w3-card');
    document.modalText.appendChild(newDiv);
}





howToBtn.addEventListener("click", displayLiquor);





















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
