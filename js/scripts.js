//user interface logic
$(document).ready(function(){
  var order = new Order();
  $("form#pizzaOrder").submit(function(event){
    event.preventDefault();
debugger;
    var name = $("input#customerName").val();
    var pizzaSize = $("#pizzaSize").val();

    $("#orderConfirm").show();

    $("input:checkbox[name=topping]:checked").each(function(){
      var toppingSelect = $(this).val();
      toppingArray.push(toppingSelect);
    })

    $("#custThank").append(name);
    $("#finalOrder").append("<li>" + "A " + pizzaSize + " pizza with toppings of " + toppingArray.join(", ") + "." + "<br>");
    $("#totalCost").text(order.costCompute());
  })
})

//business logic
function Order() {
  this.name;
  this.pizzas = [];
}

function Pizza(size, toppings) {
  this.size = pizzaSize;
  this.toppings = [];
}

var toppingArray = [];
var toppingQty = toppingArray.length;

//formula to compute cost
Order.prototype.costCompute = function() {
  var cost = 0;
  this.pizzas.forEach(function(pizza) {
    if (pizza.size === "small") {
      cost += 9;
    } else if (pizza.size === "medium") {
      cost += 13;
    } else if (size === "large") {
      cost += 17;
    }

    pizza.toppings.forEach(function(topping) {
      if (topping === "mozzarella cheese") {
        cost += 2;
      }
      if (topping === "pepperoni") {
        cost += 2;
      }
      if (topping === "green bell peppers") {
        cost += 2;
      }
      if (topping === "black olives") {
        cost += 2;
      }
      if (topping === "mushrooms") {
        cost += 2;
      }
      if (topping === "fresh onions") {
        cost += 2;
      }
      if (topping === "italian sausage") {
        cost += 2;
      }
      if (topping === "canadian bacon") {
        cost += 2;
      }
      if (topping === "anchovies") {
        cost += 2;
      }
    });
  });
  return cost;
}

Order.prototype.addPizza = function(pizza) {
  this.pizzas.push(pizza);
}

Pizza.prototype.addTopping = function(topping) {
  this.toppings.push(topping);
}
