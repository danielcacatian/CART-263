"use strict";

// $ = function name
// $(`#id-name`);
let $mainHeading = $(`#main-heading`);
// css() = style.
// css(`css attribute`, `value`);
$mainHeading.css(`color`, `#339966`);
$mainHeading.css(`font-size`, `4rem`);
// OR
$(`#main-heading`).css(`color`, `#ff0000`);

// For class
// If CSS is used like this, it is required to write the css attribute in "quote marks" or cammelCase
$(`.header`).css({
  "color": `blue`,
  "background-color": `black`
});

// Changing HTMl text
// $().text(`string`);
let spanText = $(`#example-span`).text();
let reversedSpanText = spanText.split(``).reverse().join(``);
$(`#example-span`).text(reversedSpanText);

// Changing the HTML tag
// $().html(`<p> </p>`);
let spanHTML = $(`#example-span`).html();
$(`#example-span`).html(`<strong>${spanHTML}</strong>`);

// Attributes
// attr(`contenteditable`, `true`) --> allows to manually edit the content
$(`#main-heading`).attr(`contenteditable`, `true`);

// attr(`href`) = `element link` )
let $link = $(`#thicc-link`);
if ($link.attr(`href`) === `https://thi.cc`){
  $link.text(`THICC`);
}

// Create/Add elements onto HTML
//$(`<p> ONLY THE TAGS </p>`);
let $p = $(`<p></p>`);
$p.text(`Fresh, fresh paragraph!`);
// How to put it and where
// --> append(html element) *after the element
// --> prepend() *before
$(`#second-section`).append($p);
// OR
$(`h2`).after($p); //After each h2

// Remove something
// $(element-name).remove();
