function BrickController() {
  this.color = 'Green',
  this.size = '2 x 6',
  this.price = 0.03,
  this.quantity = 697
}

angular
  .module('controllerQuizApp')
  .controller('BrickController', BrickController);