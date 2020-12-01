var TardigradeDancer = function (top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.legs = 6;
  this.color = '#D2B48C'; // tan
  this.move = 'shift';
  this.$node.addClass('TardigradeDancer');
  this.$node.prepend('<img src="./static/tardigrade-drawing.png" />');
};

TardigradeDancer.prototype = Object.create(makeDancer.prototype);
TardigradeDancer.prototype.constructor = TardigradeDancer;

TardigradeDancer.prototype.step = function () {
  makeDancer.prototype.step.call(this);
  this.$node.css('transform', `scale(${1 + Math.random() * 2})`);
};


