$(document).ready(function() {
  window.dancers = [];
  var id = 0;

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
    dancer.$node.attr('id', `${id++}`);
    $('.dancefloor').append(dancer.$node);
    window.dancers.push(dancer.$node);

    dancer.$node.on('mouseover', function(e) {
      var left = parseInt(dancer.$node.css('left'));
      var top = parseInt(dancer.$node.css('top'));

      if (e.clientX < left) {
        dancer.$node.css('left', `${left + 100}px`);
      }
      if (e.clientX > left) {
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
  $('.collideButton').on('click', function(event) {
    if (window.dancers.length > 1) {
      var dancer1 = window.dancers[0];
      var dancer2 = window.dancers[1];

      var top1 = parseInt(dancer1.css('top'));
      var top2 = parseInt(dancer2.css('top'));
      var left1 = parseInt(dancer1.css('left'));
      var left2 = parseInt(dancer2.css('left'));
      var midpoint = {
        top: (top1 + top2) / 2,
        left: (left1 + left2) / 2
      };
      dancer1.css(midpoint);
      dancer2.css(midpoint);
      setTimeout(function() {
        $(`#${dancer1.attr('id')}`).remove();
        $(`#${dancer2.attr('id')}`).css('transform', `scale(${5})`);
      }, 1000);
      window.dancers.shift();
    }
  }); 
});

