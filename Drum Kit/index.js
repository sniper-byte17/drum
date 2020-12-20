var numberOfDrumButtons=document.querySelectorAll(".drum").length;

for (var m=0;m<numberOfDrumButtons;m++){

  document.querySelectorAll(".drum")[m].addEventListener("click",function (){

    var buttonInnerHTML = this.innerHTML;

  makebeat(buttonInnerHTML);
  makeAniamtion(buttonInnerHTML)
  });
}

document.addEventListener("keypress",function(somi) {

makebeat(somi.key);
makeAniamtion(somi.key);
});

function makebeat(key){

  switch (key) {
    case "e":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "a":
      var kickbass = new Audio("sounds/kick-bass.mp3");
      kickbass.play();
      break;

    case "d":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "x":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "c":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "w":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "q":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    default:console.log(key);
  }
}

function makeAniamtion(presskey) {

  var keyAnime=document.querySelector("." + presskey);

  keyAnime.classList.add("pressed");

  setTimeout (function () {
    keyAnime.classList.remove("pressed");
  },100);
}
