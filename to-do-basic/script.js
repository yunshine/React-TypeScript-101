// click on a checkbox to mark an item as complete...
function markDone(e) {}

$('.far').on('click', function (e) {
  console.log($(this).parent());
  $(this).parent().toggleClass('done');
  e.stopPropagation;
});
