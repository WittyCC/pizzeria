//business logic
function Pizza(size, toppings) {
  this.size = pizzaSize;
  this.toppings = toppings;
}

var toppingArray = [];
var toppingQty = toppingArray.length;

//formula to compute cost
Pizza.prototype.costCompute = function() {
//pizza size select
  var doughCost = 0;
  if (size === "small") {
    doughCost = 9;
  } else if (size === "medium") {
    doughCost += 13;
  } else if (size === "large") {
    doughCost += 17;
  } else if (size === 0) {
    alert('Please select a size for your pizza.');
  }
  var toppingQty = toppingArray.length;
  var toppingCost = (toppingQty * 2);
  totalCost = (doughCost + toppingCost);
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
    var toppingQty = toppingArray.length;
    var toppingCost = (toppingQty * 2);
    var totalCost = (doughCost + toppingCost);

    $("#custThank").append(name);
    $("#finalOrder").append("<li>" + "A " + pizzaSize + " pizza with toppings of " + toppingArray.join(", ") + "." + "<br>");
    $("#totalCost").append(totalCost);
  })
})
