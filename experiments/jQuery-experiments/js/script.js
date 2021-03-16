"use strict";

// JQUERY FORM INPUT /////////////////////////////////////////////////////////////

// Button
$(`#example-button`).on(`click`, function(event){
  // Text field val() = value
  let input = $(`#example-text-input`).val();
  alert(input);
})

// Range slider
// Not `click`, but `change` for sliders
$(`#range-slider`).on(`change`, function(event){
  let sliderInput = $(this).val();
  alert(sliderInput);
})

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
