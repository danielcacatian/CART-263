//Use getElementById//////////////////////////////////////////////////////////
let mainHeading = document.getElementById(`main-heading`);
//Style
//with brackets
mainHeading.style[`color`] = `#339966`;
mainHeading.style[`font-size`] = `4rem`;
//or camel-case
mainHeading.style.fontFamily = `Courier, monospace`;
mainHeading.style.backgroundColor = `red`;
//Inner text

let pronoun = document.getElementById(`pronoun`);

pronoun.innerHTML = `<strong>you</strong>`;
if (pronoun.innerText === `we`){
  pronoun.innerText = `you`;
}

let wellSection = document.getElementById(`well-section`);

wellSection.style[`color`] = `blue`;

//Change image (setAttribute)//////////////////////////////////////////////////
let image = document.getElementById(`clown-image`);

image.setAttribute(`src`, `http://loremflickr.com/320/240/clown`);

//Use getElementsByClassName//////////////////////////////////////////////////
// let headers = document.getElementsByClassName(`header`);
//or
let headers = document.querySelectorAll(`.header`);

for (let i = 0; i < headers.length; i++){
  headers[i].style[`color`] = `#ff0000`;
}

//Use getElementsByTagName//////////////////////////////////////////////////
let h2s = document.getElementsByTagName(`h2`);

for (let i = 0; i < h2s.length; i++){
  h2s[i].style[`font-size`] = `2rem`;
}

//Adding onto the HTML webpage//////////////////////////////////////////////////
let newP = document.createElement(`p`);
newP.innerText = `Gosh, I sure do like clowns.`;

let clownSection = document.getElementById(`clown-section`);
clownSection.appendChild(newP);

//Removing elements////////////////////////////////////////////////////////////
mainHeading.parentElement.removeChild(mainHeading);
