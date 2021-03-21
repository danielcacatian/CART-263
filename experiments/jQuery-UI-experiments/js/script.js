"use strict";

// JQUERY UI EFFECTS /////////////////////////////////////////////////////


// JQUERY UI INTERACTIONS /////////////////////////////////////////////////////
// draggable()
// Allows the HTML element to be draggable and placed anywhere
$(`#prisoner`).draggable({
  //axis: `x`, // draggable only on the X axis
  containment: `#prison`, //contained within its parent (in this case the div)
  // draggable events
  start: function() { //when it STARTS being dragged
    $(this).css(`text-decoration`, `underline`);
  },
  drag: function() { //when it is CONTINIOUSLY being dragged
  },
  stop: function() { //when it STOPS being dragged
    $(this).css(`text-decoration`, `none`);
  }
});

setTimeout(function(){
  $(`#prisoner`).draggable(`disable`); //disables draggable
}, 5000);

// droppable()
// listens for when something is dropped into the drop zone (the tunnel)
$(`#escape-tunnel`).droppable({
  drop: function (event, ui){ // listens if something is dropped
    ui.draggable.remove(); // removes the element thats being dragged ONLY
  }
});
