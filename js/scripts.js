// business logic below
function Pizza (pizzaSize, pizzaTopping) {
   this.pizzaSize = pizzaSize,
   this.pizzaTopping = pizzaTopping,
};

Pizza.prototype.price = function () {
  sizeCost = 0;
  if (this.pizzaSize === "personal") {
    sizeCost = 6.50;
  } else if (this.pizzaSize === "small") {
    sizeCost = 8.00;
  } else if (this.pizzaSize === "medium") {
    sizeCost = 9.50;
  } else if (this.pizzaSize === "large") {
    sizeCost = 11.50;
}
}

// user interface logic below

$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var size = $("#size").val();
    var pizza = new Pizza(size);
    // pizzaPrice(pizza);
  });
});

