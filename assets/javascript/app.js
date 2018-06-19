
var topics=["EritreanCulture","animal","planets"]

$("button").on('click', function(){
    console.log("clicked")
    var x = $(this).data('search');
        console.log(x); 
var queryURL= "https://api.giphy.com/v1/gifs/search?q="+ 
x +"&api_key=llQSbWa6em9y6v1wu8YGzrfqvr4z8Qv8&limit=10";
console.log(queryURL);

$.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
   console.log(response);

   for (var i=0; i<response.data.length; i++){
    $('#img').prepend('<p>Rating:'+response.data[i].rating+'</p>');
  $("#img").prepend("<img src='"+response.data[i].
        images.fixed_height_still.url+"'>");
   
   }
  });
})