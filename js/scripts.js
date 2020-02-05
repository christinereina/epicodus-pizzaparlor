// business logic below
function Pizza (size, topping, sauce)
  this.size = size,
  this.topping = topping,
  this.sauce = sauce,
  this.cost = 0;

  // Pizza.prototype.size = function () {

  // }

  // Pizza.prototype.toppings = function () {
    
  // }

// user interface logic below

$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    var size = parseInt($("#size").val());
    var toppings = $("input[name=toppings]:checked").val();
    var sauce = $("input[name=sauce]:checked").val();

});
  });