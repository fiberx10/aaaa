console.log("akdcnaerf") ;
var  guest = document.getElementsByClassName("guest") ;
var title = guest[0]
var para = guest[2]
var submit = guest[1]
var isShopper = false ;
var type = document.getElementById("mce-TYPE") ;
var checker = document.getElementById("switch-button-checkbox") ;
var checker2 = document.getElementById("switch-button-label") ;
var img  = document.getElementById("open_menu") ;


function openx(){
     var header = document.getElementsByClassName("header-page")[0] ;
     if(header.style.display == "none" ){
       header.style.display = "block"
       img.src = "assets/cancel.png"
     } else {
        header.style.display = "none"
        img.src = "assets/menu.png"
     } ;

}

function check() {
    console.log("checked") ;
   if (isShopper){
      isShopper = false
      title.innerHTML = "VENDORS"
      para.innerHTML = "THANKS FOR JOINING THE BUSINESS VENDOR WAITLIST FOR HIGH INTERESTED SHOPPERS. STAY UP TO DATE FOR WHEN WE LAUNCH "
      submit.value = "SELL WITH US"

      submit.id = "submit" ;
      title.id = "guest" ;
      checker.classList.remove("switch-button-checkbox-after")
      checker.classList.add("switch-button-checkbox")
      checker2.classList.remove("switch-button-label-after")
      checker2.classList.add("switch-button-label")
      type.value = "Vendor"
    } else {
    isShopper = true
    title.innerHTML = "SHOPPERS"
    para.innerHTML = "THANKS FOR JOINING THE SHOPPERS WAITLIST FOR BRANDS YOU LOVE. STAY UP TO DATE FOR WHEN WE LAUNCH SHOP WITH US "
    submit.value = "SHOP WITH US"
    type.value = "Shopper"
    submit.id = "submit2" ;
    title.id = "guest2";
    checker.classList.remove("switch-button-checkbox")
    checker.classList.add("switch-button-checkbox-after")
    checker2.classList.remove("switch-button-label")
    checker2.classList.add("switch-button-label-after")

}
} 


  // Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementsByClassName("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn[0].onclick = function() {
  console.log("hllo")
  modal.style.display = "block";
  if (window.innerWidth < 800 ) {
    alert("we are comming  !!!") ;
  }
}
btn[1].onclick = function() {
  console.log("hllo")
  modal.style.display = "block";
  if (window.innerWidth < 800 ) {
    alert("we are comming  !!!") ;
  }
}
btn[2].onclick = function() {
  console.log("hllo")
  modal.style.display = "block";
  if (window.outerWidth < 500 ) {
    alert("we are comming  !!!") ;
  }
}



btn[3].onclick = function() {

  if (window.innerWidth < 800 ) {
    alert("we are comming  !!!") ;
  }
}
btn[4].onclick = function() {
  if (window.innerWidth < 800 ) {
    alert("we are comming  !!!") ;
  }
}
btn[5].onclick = function() {
  if (window.outerWidth < 500 ) {
    alert("we are comming  !!!") ;
  }
}






// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  console.log("hllo")
  modal.style.display = "none";
  if (window.innerWidth < 800 ) {
    alert("we are comming  !!!") ;
  }
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}



