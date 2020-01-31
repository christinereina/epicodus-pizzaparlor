// business logic below

function Player(name, mark) {
  this.name = name;
  this.mark = mark;
}

// user interface logic below

$(document).ready(function() {
  
  $("form").submit(function(event) {
    event.preventDefault();

    var userInput = parseInt($("input#user").val());
    var result = robot(userInput);

    $("#output").text(result);
  });
});