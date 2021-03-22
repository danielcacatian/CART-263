"use strict";

// JQUERY UI EFFECTS /////////////////////////////////////////////////////
// effect()
// give a specific effect to an element
$(`#prisoner`).effect({
  effect: `shake`, // shake; shakes the element
  duration: 2000, // duration of the animation (milliseconds)
  times: 15, // how many times it shakes
  distance: 5, //distance it shakes from left to right (pixels)
  complete: makePrisonerDraggable // after the effect finishes
});

$(`#escape-tunnel`).droppable({
  drop: function (event, ui){
    ui.draggable.remove();
// hide()
// hides and can be combined with effect()
    $(this).hide({
      effect: `blind`,
      duration: 500,
    });
  }
});

function makePrisonerDraggable(){
  $(`#prisoner`).draggable({
    containment: `#prison`,
    start: function() {
      $(this).css(`text-decoration`, `underline`);
  // animate() or addClass()
  // transitions to the CSS changes
      $(this).addClass(`prisoner-dragging`, 750);
    },
    stop: function() {
      $(this).removeClass(`prisoner-dragging`, 750);
    }
  });
}

// JQUERY UI INTERACTIONS /////////////////////////////////////////////////////
// // draggable()
// // Allows the HTML element to be draggable and placed anywhere
// $(`#prisoner`).draggable({
//   //axis: `x`, // draggable only on the X axis
//   containment: `#prison`, //contained within its parent (in this case the div)
//   // draggable events
//   start: function() { //when it STARTS being dragged
//     $(this).css(`text-decoration`, `underline`);
//   },
//   drag: function() { //when it is CONTINIOUSLY being dragged
//   },
//   stop: function() { //when it STOPS being dragged
//     $(this).css(`text-decoration`, `none`);
//   }
// });
//
// setTimeout(function(){
//   $(`#prisoner`).draggable(`disable`); //disables draggable
// }, 5000);
//
// // droppable()
// // listens for when something is dropped into the drop zone (the tunnel)
// $(`#escape-tunnel`).droppable({
//   drop: function (event, ui){ // listens if something is dropped
//     ui.draggable.remove(); // removes the element thats being dragged ONLY
//   }
// });
