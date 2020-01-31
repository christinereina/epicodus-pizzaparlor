// business logic below
function Pizza (pizzaSize) {
   this.pizzaSize = pizzaSize,
   this.cost = 0
};

function pizzaPrice(pizza) {
  if (pizza.pizzaSize === "personal") {
    pizza.cost = 7.50
    console.log(pizza.cost)
  }
}

// user interface logic below

$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var size = $("#size").val();
    var pizza = new Pizza(size);
    pizzaPrice(pizza);
    // console.log(size)
  });
});

