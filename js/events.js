//define functions here
function getIt(){
  $('p').on('click', function (){
   window.alert('Hey!'); 
  });
}
$(document).ready(function(){

// call functions here

});

function frameIt(){
  $('img').on('load', function(){
    $('img').addClass('tasty');
  })
};

