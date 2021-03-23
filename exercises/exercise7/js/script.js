"use strict";

/**
Code Taker++
Daniel Cacatian

Da Vinki???
Add-on to Activity 8: Code Taker created by Pippin Barr.
*/

// Solved dialog
$(`#solved-dialog`).dialog({
  autoOpen: false,
  buttons: {
    "I know.": function() {
      $(this).dialog(`close`);
    }
  }
});

// Instructions dialog
$(`#instructions-dialog`).dialog({
  buttons: {
    "Understood": function() {
      $(this).dialog(`close`);
      $(`.secret`).one(`mouseover`, clue);
    }
  },
  width: 400
});

function clue(){
  $(this).addClass(`found`, 500);
  $(`.secret`).draggable({
    helper: `clone`
  });
}

$(`#answer`).droppable({
  drop: function(event, ui){
    let letter = ui.draggable.text();
    $(this).append(letter);
    ui.draggable.draggable(`disable`);
    ui.draggable.removeClass(`found`, 500);
    // Check if they got it
    if ($(this).text() === `Temptation`) {
      $(`#solved-dialog`).dialog(`open`);
    }
  }
});