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
      $(`.secret`).one(`click`, clue);
    }
  },
  width: 400
});

$(`#answer`).droppable({
  drop: function(event, ui){
    let letter = ui.draggable.text();
    $(this).append(letter);
    ui.draggable.draggable(`disable`);
    ui.draggable.addClass(`used`, 250);
    // Check if they got it
    if ($(this).text() === `Temptation`) {
      $(`#solved-dialog`).dialog(`open`);
      // Plays SFX
      $(`#correct-SFX`) [0].play();
    }
  }
});

// Reset button (clears the dropped letters)
$(`#reset-button`).on(`click`, function(event, ui){
  $(`#answer`).empty();
  $(`.secret`).draggable(`enable`);
  $(`.secret`).removeClass(`used`, 250);
});

// When you find a clue
function clue(){
  $(this).addClass(`found`, 250);
  $(`.secret`).draggable({
    helper: `clone`
  });
}
