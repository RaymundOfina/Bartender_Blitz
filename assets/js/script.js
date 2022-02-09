let howToBtn = document.getElementById("how-to-btn")
let modal = document.getElementById("modal")
let span = document.getElementsByClassName("close")[0];

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



document.getElementById("whiskey").onclick = function(){
  location.href= "whiskeypage"
}
























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
  