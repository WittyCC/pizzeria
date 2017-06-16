// var pizzaOrder = {
//    pizzaSize
//    selectedToppings
// }
function pizzaOrder(size, toppings) {
  this.size = size;
  this.toppings = toppings;
}

var custOrder = new pizzaOrder();

var pizzaSize = $("#pizzaSize").val();


//user interface logic
$(document).ready(function(){
  $("form#pizzaOrder").submit(function(event){
    event.preventDefault();
  })
})
