// BUSINESS LOGIC

// function Order(name, pizzas) {
//   this.name;
//   this.pizzas = [];
// }

var size = "";
var toppings = [];
var toppingSelect = "";
var cost = 0;
var finalTotal = 0;

function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
}

//formula to compute cost
Pizza.prototype.costCompute = function() {
  if (this.size === "small") {
    cost = (this.toppings.length * 2) + 9;
    return cost;
  } else if (this.size === "medium") {
    cost = (this.toppings.length * 2) + 13;
    return cost;
  } else if (this.size === "large") {
    cost = (this.toppings.length * 2) + 17;
    return cost;
  }
}

//USER INTERFACE LOGIC

$(document).ready(function(){
//  var order = new Order();
  $("form#pizzaOrder").submit(function(event){
    event.preventDefault();
//debugger;
    var name = $("input#customerName").val();

    size = $("#size").val();

    $("input:checkbox[name=topping]:checked").each(function(){
      toppingSelect = $(this).val();
      toppings.push(toppingSelect);
    });

    var newPizza = new Pizza(size, toppings);
    finalTotal = newPizza.costCompute();
    $("#orderConfirm").show();
    $("#custThank").append(name);
    $("#finalOrder").append("<li>" + "A " + size + " pizza with toppings of " + toppings.join(", ") + "." + "<br>");
    $("#totalCost").text(finalTotal);
  })
});
