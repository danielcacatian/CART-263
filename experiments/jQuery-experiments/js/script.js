"use strict";

// JQUERY FORM EXTRAS /////////////////////////////////////////////////////////////

// Each
// each(function) = Changes each of the elements selected
$(`.header`).each(function(){
  let reverseText = $(this).text().split(``).reverse().join(``);
  $(this).text(reverseText);
})

// Animations
$(`#button`).on(`click`, function(event){
  // animate() --> transitions to the change attributes in the parentheses
  // $(`.header`).animate({
  //   "opacity": 0.5,
  //   "font-size": "3rem"
  // }, 2000, function(){
  //   $(this).text("ANIMATED!!!");
  // })
  // Cannot animate certain CSS attributes such as color, transform, etc.

  // Alternative for animate (instead of adding millisecondes)
  $(`.header`).animate({
    "opacity": 0.1,
    "height": `200px`
  },{
    duration: 2000,
    complete: function(){
      $(this).text("ANIMATED!!!");
    },
    // Type of animation
    easing: `linear`
  })
  });

// Add/remove class from elements
// addClass(`class name`) *no dot
$(`.header`).addClass(`highlight`);
// removeClass
$(`.header`).on(`click`, function(event){
  $(this).removeClass(`highlight`);
})

// Togle on/off
setInterval(function(){
  $(`.header`).toggleClass(`highlight`);
}, 500);

// Hide/show an element
// $(`#button`).on(`click`, function(event){
//   // fadeOut(millisecondes, function) --> calls after the element finished fading out
//   $(`.header`).fadeOut(2500, function(){
//     $(this).fadeIn(2500);
//
//   // Also fadeToggle()
//   // $(`.header`).fadeToggle(2500);
//   });

// slideUp,In,Down,etc.
// $(`#button`).on(`click`, function(event){
//   // fadeOut(millisecondes, function) --> calls after the element finished fading out
//   $(`.header`).slideUp(2500, function(){
//     $(this).slideDown(500);

  // Also fadeToggle()
  // $(`.header`).fadeToggle(2500);
  // });

// // hide()
  // $(`#main-heading`).hide();
  // setTimeout(function(){
  //   //show()
  //   $(`.header`).show();
  // }, 2000);
// });


// JQUERY FORM INPUT /////////////////////////////////////////////////////////////
//
// // Button
// $(`#example-button`).on(`click`, function(event){
//   // Text field val() = value
//   let input = $(`#example-text-input`).val();
//   alert(input);
// })
//
// // Range slider
// // Not `click`, but `change` for sliders
// $(`#range-slider`).on(`change`, function(event){
//   let sliderInput = $(this).val();
//   alert(sliderInput);
// })

// JQUERY EVENTS /////////////////////////////////////////////////////////////
//
// // addEventListener = on()
// $(`#main-heading`).on(`click`, function(event) {
//   // $(this) = whatever has been clicked/being called
//   // $(this).remove();
// });
//
// // Adding HTML elements
// $(`section`).on(`click`, function(event){
//   $(this).append(`<p>This will be added on EVERY click.</p>`);
// })
// // one() = executes on only the FIRST click
// $(`section`).one(`click`, function(event){
//   $(this).append(`<p>This will be added on the FIRST click.</p>`);
// });
//
// // Alternative
// $(`#main-heading`).click(function(event){
//   // $(this).remove();
// });
//
// // Stop/remove an event
// $(`.header`).on(`click`, function(event) {
//   $(this).css(`color`, `red`);
//   //off() = stops paying attention
//   $(`.header`).off(`click`);
// });

// JQUERY OVERVIEW /////////////////////////////////////////////////////////////
//
// // $ = function name
// // $(`#id-name`);
// let $mainHeading = $(`#main-heading`);
// // css() = style.
// // css(`css attribute`, `value`);
// $mainHeading.css(`color`, `#339966`);
// $mainHeading.css(`font-size`, `4rem`);
// // OR
// $(`#main-heading`).css(`color`, `#ff0000`);
//
// // For class
// // If CSS is used like this, it is required to write the css attribute in "quote marks" or cammelCase
// $(`.header`).css({
//   "color": `blue`,
//   "background-color": `black`
// });
//
// // Changing HTMl text
// // $().text(`string`);
// let spanText = $(`#example-span`).text();
// let reversedSpanText = spanText.split(``).reverse().join(``);
// $(`#example-span`).text(reversedSpanText);
//
// // Changing the HTML tag
// // $().html(`<p> </p>`);
// let spanHTML = $(`#example-span`).html();
// $(`#example-span`).html(`<strong>${spanHTML}</strong>`);
//
// // Attributes
// // attr(`contenteditable`, `true`) --> allows to manually edit the content
// $(`#main-heading`).attr(`contenteditable`, `true`);
//
// // attr(`href`) = `element link` )
// let $link = $(`#thicc-link`);
// if ($link.attr(`href`) === `https://thi.cc`){
//   $link.text(`THICC`);
// }
//
// // Create/Add elements onto HTML
// //$(`<p> ONLY THE TAGS </p>`);
// let $p = $(`<p></p>`);
// $p.text(`Fresh, fresh paragraph!`);
// // How to put it and where
// // --> append(html element) *after the element
// // --> prepend() *before
// $(`#second-section`).append($p);
// // OR
// $(`h2`).after($p); //After each h2
//
// // Remove something
// // $(element-name).remove();
