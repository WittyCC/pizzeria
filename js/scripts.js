//business logic
function Pizza(size, toppings) {
  this.size = pizzaSize;
  this.toppings = toppings;
}

// function orderToppings(topping){
//   this.topping = []
//}
//var custOrder = new pizzaOrder();

var size = $("#pizzaSize").val();
var doughCost;
var toppingQty = toppingArray.length;
var toppingCost = (toppingQty * 2);

//formula to compute cost
function costCompute(doughCost, toppingCost) {
  if (size === 1) {
    doughCost = 9;
  } else if (size === 2) {
    doughCost = 13;
  } else if (size === 3) {
    doughCost = 17;
  } else {
    alert('Please select a size for your pizza.');
  }

  var totalCost = (doughCost + toppingCost);
    return totalCost
}


//user interface logic
$(document).ready(function(){
  $("form#pizzaOrder").submit(function(event){
    event.preventDefault();
    $("#finalOrder").show();
    var name = $("input#customerName").val();
    var pizzaSize = $("#pizzaSize").val();
    var toppingArray = [];
    $("input:checkbox[name=topping]:checked").each(function(){
      toppingArray.push($(this).val());
    })

    $("#custThank").append(name);
    $("#finalOrder").append("<li>" + pizzaSize + "pizza with toppings of " + toppingArray.join(", ") + "for a total cost of" + "<br>")
    

  })
})
