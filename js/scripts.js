// business logic below
function Pizza(pizzaSize, pizzaTopping) {
   this.pizzaSize = pizzaSize,
   this.pizzaTopping = pizzaTopping,
   this.cost =0;

Pizza.prototype.price = function () {
  sizeCost = 0;
  if (this.pizzaSize === "personal") {
    this.cost = 6.50;
    console.log(sizeCost);
  } else if (this.pizzaSize === "small") {
    this.cost = 8.00;
  } else if (this.pizzaSize === "medium") {
    this.cost = 9.50;
  } else if (this.pizzaSize === "large") {
    this.cost = 11.50;
    console.log(this.cost)
  } 
}


// user interface logic below

// $(document).ready(function() {
//   $("form").submit(function(event) {
//     event.preventDefault();
//     var size = $("#size").val();
//     var pizza = new Pizza(size);
// });
//   });