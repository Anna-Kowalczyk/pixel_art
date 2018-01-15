//create table rows x columns
var grid = function makeGrid() {
  var rows, columns;
  rows = $("#height").val();
  columns = $("#width").val();
  for (var i=0; i<rows; i++) {
    $("table").append("<tr></tr>");
    for (var j=0; j<columns; j++) {
      $("tr").last().append("<td></td>");
    }
  }
}

//remove grid (tr and td elements)
var clear = function removeGrid() {
  $("td").remove();
  $("tr").remove();
}

// clicking at the button
$("#go").on("click",function() {
  clear();
  grid();
});

// picked color
var pickedColor = function colorValue() {
  var color = $("input[type=color]").val();
  return color;
}

// change background color of clicked grid
$("table").on("mousedown","td",function() {
  var color = pickedColor();
  $(this).css("background-color",color);
});

// change h1 color when color is picked
$("input[type=color]").on("change",function() {
  var color = pickedColor();
  $("h1").css("color",color);
});
