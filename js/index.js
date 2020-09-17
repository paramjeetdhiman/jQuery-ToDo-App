//check off specific todos

//add listeners to parent or which exists on page when load but we are really only listening to the li that are clicked inside the ul

$('ul').on('click', 'li', function () {
  $(this).toggleClass('completed'); 
});
  
$('ul').on('click', 'span', function (e) {
  $(this)
    .parent()
    .fadeOut(500, function () {
      $(this).remove();
    }); 
  e.stopPropagation(); //it prevents us from event bubbling up...
});

$("input[type='text']").on('keypress', function (e) {
  if (e.which === 13) {
    //grabbing new todo text from input
    const todoText = $(this).val();
    //create a new li and add to ul
    $('ul').append(`<li><span>X</span> ${todoText}</li>`);
    $(this).val(''); //setter
  }
});
