// click on a checkbox to mark an item as complete...

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


// select form
// when submitted...
// retrieve value...
// with the value, create a new li...


$("input[type='text']").keypress(function (e) {
  if (e.which === 13) {
    e.preventDefault();
    let newItem = $(this).val()
    console.log("form submitted...",);
    console.log("New Item: ", newItem);

    // $("input[type='text']").reset();
    $(this).val("");
  };
  // console.log($(this).val());
});

// $('form').on('submit', function (e) {
//   e.preventDefault();
//   console.log("form submitted...");
//   console.log($(input[type = 'text']).val());
// });
