//check off specific todos
$('li').on('click', function () {
  $(this).toggleClass('completed');
  //   if ($(this).css('color') === 'rgb(128, 128, 128)') {
  //     $(this).css({
  //       color: 'black',
  //       'text-decoration': 'none',
  //     });
  //   } else {
  //     $(this).css({
  //       'text-decoration': 'line-through',
  //       color: 'gray',
  //     });
  //   }
});

$('span').on('click', function (e) {
  $(this)
    .parent()
    .fadeOut(500, function () {
      $(this).remove();
    });
  e.stopPropagation(); //it prevents us from event bubbling up...
});

$("input[type='text']").on('keypress', function (e) {
  if (e.which === '13') {
    $(this).val();
  }
});
