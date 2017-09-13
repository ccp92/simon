$(document).ready(

  function simon () {

    var initial = Math.floor((Math.random()*4) + 1);
    var seq = [initial];
    // Upon page load, a new sequence is created. Will likely adjust this to be on press of a start button in future.
    console.log(seq);
    // Declared outside of the function to prevent it being over-written on each button press.
    var comp = [];
    // Comparison array to compare the generated sequence against the user's attempt.

    function check () {
      var correct = true;
      for (var i=0; i <= comp.length-1; i++) {
        // For loop to check each item in the sequence
        if (seq[i] !== comp[i]) {
          correct = false;
        }
        // To save adding an if and an else, have used !== and initialised correct as false.
      };
      var selected = Math.floor((Math.random()*4) + 1);
      if (seq.length == comp.length && correct == true) {
        seq.push(selected);
        comp = [];
        // Resetting the comparison array upon a successful sequence.
        alert('Correct');
      } else if (correct == false) {
        var score = seq.length - 1;
        alert('Game Over. Final score: ' + score + '. Click OK to try again.');
        seq = [selected];
        // Starts a new game with a fresh sequence.
        comp = [];
        // Resets the comparison array to be blank for a new game.
      }


    };

    $('button').click(
      // targetting the button id to avoid having to repeat code.
      function buttonPress () {
        console.log(this.dataset.value);
        comp.push(parseInt(this.dataset.value));
        // buttons all have a data-value with their id numbers 1-4. This pulls the matching number from the button.
        check ();
        // Runs the check function to confirm if the button press is correct.
      }
    )

});
