// business logic below
function Pizza (pizzaTopping, pizzaSize) {
  this.pizzaTopping = pizzaTopping,
  this.pizzaSize = pizzaSize,
  this.cost = 0
};

// user interface logic below

$(document).ready(function() {
  $("#input").ready(function(event) {
    event.preventDefault();

    $("#output").text(result);
  });
});