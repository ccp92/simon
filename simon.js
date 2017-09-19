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
        $('#response').text('Correct');
      } else if (correct == false) {
        var score = seq.length - 1;
        $('#response').text('Game Over. Final score: ' + score + '. Click to try again.')
        seq = [selected];
        // Starts a new game with a fresh sequence.
        comp = [];
        // Resets the comparison array to be blank for a new game.
      }


    };

    $('button').click(
      // targetting the button id to avoid having to repeat code.
      function buttonPress () {
        var button = parseInt(this.dataset.value);
        // buttons all have a data-value with their id numbers 1-4. This pulls the matching number from the button.
        var audio = new Audio('simonSound'+button+'.mp3');
        audio.play();
        // the above specifies the specific audio file to play and then plays it when the button is pressed.
        // will link this to the selected css class so that it's also played when replaying the sequence.
        comp.push(parseInt(button));
        // this adds the button press to the comparison array, ready for the check function.
        if (seq.length !== comp.length) {
          $('#response').text('');
        }
        check ();
        // Runs the check function to confirm if the button press is correct.
      }
    )

});
