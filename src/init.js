$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position
    // console.log($('body').height(),$('body').width());
    var dancer = new dancerMakerFunction(
      ($(".dancefloor").height() * Math.random()) + 10,
      ($(".dancefloor").width() * Math.random()) + 10,
      Math.random() * 1000
    );
    $('.dancefloor').append(dancer.$node);
    window.dancers.push(dancer.$node);
    dancer.$node.on('mouseover', function(e) {
      var left = parseInt(dancer.$node.css('left'));
      var top = parseInt(dancer.$node.css('top'));

      if (e.clientX > left) {
        dancer.$node.css('left', `${left + 100}px`);
      }
      if (e.clientX < left) {
        dancer.$node.css('left', `${left - 100}px`);
      }

      if (e.clientY < top) {
        dancer.$node.css('top', `${top + 100}px`);
      }
      if (e.clientY > top) {
        dancer.$node.css('top', `${top - 100}px`);
      }
    });
  });
  $('.lineUpButton').on('click', function(event) {
    for (var dancer of window.dancers) {
      dancer.css('left', `${$('.dancefloor').width() / 2}px`);
    }
  });
});

