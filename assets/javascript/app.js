$(function(){
  populate(topics,"button-clicked","#buttonAdded");
})
var topics=["funny dogs","animal","planets"];
function populate(topics,classToadd, areaToadd){
  $(areaToadd).empty();
  for (var i=0; i<topics.length; i++){
      var x=$('<button>');
      //modifying the button
      x.addClass(classToadd);
      x.attr('data-item',topics[i]);
      x.text(topics[i]);
      $(areaToadd).append(x);
  }
}
$(document).on('click',".button-clicked",function(){
  $('#search').empty();
  var item= $(this).data('item');
  
var queryURL="https://api.giphy.com/v1/gifs/search?q="+ 
item +"&api_key=llQSbWa6em9y6v1wu8YGzrfqvr4z8Qv8&limit=10";

$.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    console.log(response);
   for (var i=0; i<response.data.length; i++){
       $('#search').prepend('<p>Rating:'+response.data[i].rating+'</p>');
     
       var images = $('<div/>');
       var image = $('<img>');

       image.addClass('anImg')

      image.attr('src',response.data[i].images.fixed_height_still.url);

      image.attr('data-still',response.data[i].images.fixed_height_still.url);

      image.attr('data-animate',response.data[i].images.fixed_height.url);

       image.attr('data-state', 'still');


       images.append(image);

       $('#search').prepend(images);

   }

  })

   })

//to animate the images

$(document).on('click','img',function(){
  var state =$(this).attr('data-state');
 
  if (state=='still'){
    $(this).attr("scr",$(this).data("animate"));
    $(this).attr('data-state','animate');
  }else{
      (state=='animate')
      $(this).attr("scr",$(this).data('still'));
      $(this).attr('data-state','still');
  }
})

//search Box to add new items
$('#select-search').on('click', function(){
  var newSearch= $('input').eq(0).val();
  //eq(0)--grab whatever is the first input and  store within the text box
  topics.push(newSearch);
  populate(topics,"button-clicked","#buttonAdded");
  //to prevent reload of the page
  return false;

})
