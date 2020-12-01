var AmoebaDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('amoebaDancer');
  this.$node.prepend('<img src="./static/amoeba.png" />');

};

AmoebaDancer.prototype = Object.create(makeDancer.prototype);
AmoebaDancer.prototype.constructor = AmoebaDancer;

AmoebaDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  this.$node.css('transform', `rotate(${(Math.random()) * 100 - 50}deg)`);
};