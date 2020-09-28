// click on a checkbox to mark an item as complete...
function markDone(e) {}

$('.far').on('click', function (e) {
  console.log($(this).parent());
  $(this).parent().toggleClass('done');
  console.log($(this).attr('class'));
  if ($(this).attr('class') === 'far fa-square') {
    $(this).attr('class', 'far fa-check-square');
  } else {
    $(this).attr('class', 'far fa-square');
  }
  e.stopPropagation;
});
