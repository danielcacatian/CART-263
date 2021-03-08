//DOM FORM INPUT//////////////////////////////////////////////////////////////////
// regular button
let button = document.getElementById(`example-button`);

button.addEventListener(`click`, function(event){
  event.target.style[`display`] = `none`;
});

// text input
let textInput = document.getElementById(`example-text-input`);
let submitButton = document.getElementById(`submit-button`);

submitButton.addEventListener(`click`, function(event){
  let input = textInput.value;
  alert(input);
});

textInput.addEventListener(`keydown`, function(event){
  if (event.keyCode === 13){
    let input = textInput.value;
    alert(input);
  }
});

// slider
let slider = document.getElementById(`example-slider`);
let sliderButton = document.getElementById(`check-button`);

sliderButton.addEventListener(`click`, function(event){
  let value = slider.value;
  alert(value);
});

slider.addEventListener(`change`, function(event){
  alert(slider.value);
})

// color picker
let picker = document.getElementById(`color-picker`);

picker.addEventListener(`input`, function(event){
  let color = picker.value;
  document.body.style[`background-color`] = color;
})

//DOM EVENTS//////////////////////////////////////////////////////////////////
// let paragraph = document.getElementById(`paragraph`);
// let mainHeading = document.getElementById(`main-heading`);
// let subHeading = document.getElementById(`sub-heading`);
//
// let originalText = paragraph.innerText;
// let opacity = 1;
//
// // fadeOut();
//
// // requestAnimationFrame uses the framerate of the browser (avoid setInterval and setTimeout)
// // function fadeOut(){
// //   opacity -= 0.01;
// //   paragraph.style[`opacity`] = opacity;
// //   if (opacity > 0){
// //     requestAnimationFrame(fadeOut);
// //   }
// // }
//
// //addEventListener
// //(`click`) when the mouse is clicked
// mainHeading.addEventListener(`click`, setRedTextColor);
// subHeading.addEventListener(`click`, setRedTextColor);
//
// function setRedTextColor(event){
//   //event.target => only activates when the specific element is clicked
//   event.target.style[`color`] = `#ff0000`;
// }
//
// //(`contextmenu`) right clicked with the mouse
// paragraph.addEventListener(`contextmenu`, function(event){
//   paragraph.innerText = `SECRET MESSAGE!!! TOAST IS GREAT!!!`;
// })
//
// //(`mouseleave`) mouse leaves over the element => opposite is `mouseeneter`
// paragraph.addEventListener(`mouseleave`, function(event){
//   paragraph.innerText = originalText;
// })
//
// //(`keydown`) when a key is pressed down
// document.addEventListener(`keydown`, function(event){
//   if(event.keyCode === 32){
//     paragraph.style[`color`] = `#ff0000`;
//   }
//   paragraph.innerText = paragraph.innerText + event.key;
// });
//
// //(`offline`) when there is no wifi
// window.addEventListener(`offline`, function(event){
//   mainHeading.innerText = `:(`;
// })


// setTimeout(function() {
//   paragraph.style[`color`] = `#ff0000`;
// }, 3000)
//
// setInterval(blink, 500);
//
// function blink(){
//   let opacity = paragraph.style[`opacity`];
//   if (opacity === `1`){
//     paragraph.style[`opacity`] = `0`;
//   }
//   else {
//     paragraph.style[`opacity`] = `1`;
//   }
// }

//DOM OVERVIEW//////////////////////////////////////////////////////////////////
// //Use getElementById
// let mainHeading = document.getElementById(`main-heading`);
// //Style
// //with brackets
// mainHeading.style[`color`] = `#339966`;
// mainHeading.style[`font-size`] = `4rem`;
// //or camel-case
// mainHeading.style.fontFamily = `Courier, monospace`;
// mainHeading.style.backgroundColor = `red`;
// //Inner text
//
// let pronoun = document.getElementById(`pronoun`);
//
// pronoun.innerHTML = `<strong>you</strong>`;
// if (pronoun.innerText === `we`){
//   pronoun.innerText = `you`;
// }
//
// let wellSection = document.getElementById(`well-section`);
//
// wellSection.style[`color`] = `blue`;
//
// //Change image (setAttribute)
// let image = document.getElementById(`clown-image`);
//
// image.setAttribute(`src`, `http://loremflickr.com/320/240/clown`);
//
// //Use getElementsByClassName
// // let headers = document.getElementsByClassName(`header`);
// //or
// let headers = document.querySelectorAll(`.header`);
//
// for (let i = 0; i < headers.length; i++){
//   headers[i].style[`color`] = `#ff0000`;
// }
//
// //Use getElementsByTagName
// let h2s = document.getElementsByTagName(`h2`);
//
// for (let i = 0; i < h2s.length; i++){
//   h2s[i].style[`font-size`] = `2rem`;
// }
//
// //Adding onto the HTML webpage
// let newP = document.createElement(`p`);
// newP.innerText = `Gosh, I sure do like clowns.`;
//
// let clownSection = document.getElementById(`clown-section`);
// clownSection.appendChild(newP);
//
// //Removing elements
// mainHeading.parentElement.removeChild(mainHeading);
