
$(document).ready(function() {
  $('form#numbers').submit(function(event){
    var count_to = parseInt($("#count_to").val());
    var count_by = parseInt($("#count_by").val());
    for (var x=0; x<=count_to; x+=count_by ){
      console.log(x)}
    event.preventDefault();
  });
});
