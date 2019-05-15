$(document).ready(function () {

  $(".data-caption").hide();
  
  $("#search").keyup(function(){
  
      // Retrieve the input field text 
      var filter = $(this).val();
  
      // Loop through the captions div 
     $(".images").each(function(){
  
       // If the div item does not contain the text phrase fade it out
       if ($(this).attr('data-caption').search(new RegExp(filter, "i")) < 0) {
              $(this).fadeOut();
  
       // Show the div item if the phrase matches 
       } else {
       $(this).show();
       }
      });
   });
  });