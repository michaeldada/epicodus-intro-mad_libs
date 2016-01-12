$(document).ready(function(){
  $("#blanks form").submit(function(event){
    var person1 = $("#person1").val();
    var person2 = $("#person2").val();
    var verb1 = $("#verb1").val();
    var noun1 = $("#noun1").val();
    $("#person1insert").text(person1);
    $("#person2insert").text(person2);
    $("#verb1insert").text(verb1);
    $("#noun1insert").text(noun1);
    event.preventDefault();
  });
});
