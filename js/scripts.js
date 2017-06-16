//business logic
function Pizza(size, toppings) {
  this.size = pizzaSize;
  this.toppings = toppings;
}

var totalCost = 0;
var toppingArray = [];
var toppingQty = toppingArray.length;

//formula to compute cost
Pizza.prototype.costCompute = function() {
//pizza size select
  if (this.size === "small") {
    totalCost = (this.toppings.length + 9);
  } else if (this.size === "medium") {
    totalCost = (this.toppings.length + 13);
  } else if (size === "large") {
    totalCost = (this.toppings.length + 17);
  } else if (size === 0) {
    alert('Please select a size for your pizza.');
  }
  return totalCost;
}

//user interface logic
$(document).ready(function(){
  $("form#pizzaOrder").submit(function(event){
    event.preventDefault();
    debugger;
    $("#orderConfirm").show();
    var name = $("input#customerName").val();
    var pizzaSize = $("#pizzaSize").val();

    $("input:checkbox[name=topping]:checked").each(function(){
      var toppingSelect = $(this).val();
      toppingArray.push(toppingSelect);
    })
    // var toppingQty = toppingArray.length;
    // var toppingCost = (toppingQty * 2);

    var newOrder = new Pizza(size, toppings);
    finalTotal = newPizza.costCompute();

    $("#custThank").append(name);
    $("#finalOrder").append("<li>" + "A " + pizzaSize + " pizza with toppings of " + toppingArray.join(", ") + "." + "<br>");
    $("#totalCost").append(totalCost);
  })
})
