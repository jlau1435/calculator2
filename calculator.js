//The variable value holds the current value of the calculator
var value = 0

$("#output").val(value);

//When I click the clear button do...
$("#clear").click(function(e) {
   e.preventDefault();
  
  //Display a zero on the calculator
  $("#output").val("0");
  value = 0;
  
});
  
$("#num7").click(function(e) {
  e.preventDefault();
  
  $("#output").val("7");
    value = 7;
    
  $("#num7").val("7");
  value = 7;
  
});

$("#num8").click(function(e) {
  e.preventDefault();

  $("#output").val("8");
  value = 8;

  $("#num8").val("8");
  value = 8;
  
  
}); 

$("#num9").click(function(e) {
  e.preventDefault();

  $("#output").val("9");
  value = 9;

  $("#num9").val("9");
  value = 9;

}); 

$("#num4").click(function(e) {
  e.preventDefault();

  $("#output").val("4");
  value = 4;

  $("#num4").val("4");
  value = 4;

}); 

$("#num3").click(function(e) {
  e.preventDefault();

  $("#output").val("3");
  value = 3;

  $("#num3").val("3");
  value = 3;

}); 

$("#num5").click(function(e) {
  e.preventDefault();

  $("#output").val("5");
  value = 5;

  $("#num5").val("5");
  value = 5;

}); 

$("#num6").click(function(e) {
  e.preventDefault();

  $("#output").val("6");
  value = 6;

  $("#num6").val("6");
  value = 6;

}); 

$("#num1").click(function(e) {
  e.preventDefault();

  $("#output").val("1");
  value = 1;

  $("#num1").val("1");
  value = 1;

}); 

$("#num2").click(function(e) {
  e.preventDefault();

  $("#output").val("2");
  value = 2;

  $("#num2").val("2");
  value = 2;

});

$("#num0").click(function(e) {
  e.preventDefault();

  $("#output").val("0");
  value = 0;

  $("#num0").val("0");
  value = 0;

});


















































