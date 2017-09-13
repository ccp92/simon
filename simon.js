$(document).ready(

  function simon () {

    var initial = Math.floor((Math.random()*4) + 1);
    var seq = [initial];
    console.log(seq);
    // Declared outside of the function to prevent it being over-written on each button press.
    var comp = [];
    // Comparison array to compare the generated sequence against the user's attempt.

    function check () {
      var correct = true;
      for (var i=0; i <= comp.length-1; i++) {
        if (seq[i] == comp[i]) {

          // Generates a random number between 1 and 4
          console.log('Correct');
        } else {
          console.log(seq);
          console.log(comp);
          correct = false;
        }
      };
      console.log(correct)
      var selected = Math.floor((Math.random()*4) + 1);
      if (seq.length == comp.length && correct == true) {
        seq.push(selected);
        console.log(seq)
        comp = [];
      } else if (correct == false) {
        alert('Incorrect');
        seq = [selected];
        comp = [];
      }


    };

    //   } else
    //   if (seq.join('') == comp.join('')) {
    //     var selected = Math.floor((Math.random()*4) + 1);
    //     // Generates a random number between 1 and 4
    //     seq.push(selected);
    //     console.log(seq);
    //     // Pushes the randomly generated number into the sequence
    //     alert('Correct! Can you remember this many?')
    //     comp = [];
    //     console.log(comp);
    //     // This resets the comparison array. Currently stops the game progressing.
    //   } else {
    //     alert('Incorrect. Game Over')
    //     // If the two arrays do not match, then a game over message is presented.
    //   }
    //   console.log(seq);
    //   console.log(comp);
    // };

    $('#red1').click(
      function red1 () {
        comp.push(1);
        // Adds a 1 to the empty comparison array.
        if (seq.length == comp.length) {
          check ();
        } else {
        }
        // Checks to see if the sequence and the comparison array are the same length.
        // If they are, compares the two arrays.
        // If not, allows user to continue entry.
      }
    )

    $('#blue2').click(
      function blue2 () {
        comp.push(2);
        // Adds a 2 to the empty comparison array.
        if (seq.length == comp.length) {
          check ();
        }
        // Checks to see if the sequence and the comparison array are the same length.
        // If they are, compares the two arrays.
        // If not, allows user to continue entry.
      }
    )

    $('#green3').click(
      function green3 () {
        comp.push(3);
        // Adds a 3 to the empty comparison array.
        if (seq.length == comp.length) {
          check ();
        }
        // Checks to see if the sequence and the comparison array are the same length.
        // If they are, compares the two arrays.
        // If not, allows user to continue entry.
      }
    )

    $('#yellow4').click(
      function yellow4 () {
        comp.push(4);
        // Adds a 4 to the empty comparison array.
        if (seq.length == comp.length) {
          check ();
        }
        // Checks to see if the sequence and the comparison array are the same length.
        // If they are, compares the two arrays.
        // If not, allows user to continue entry.
      }
    )

});
