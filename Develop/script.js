
$(function () {
  // TODO: Add a listener for click events on the save button
  //help was provided during Tutoring session with Juan Delgado
  $(".saveBtn").on("click", function () {
    var id = $(this).closest(".time-block").attr("id");
    var description = $(this).siblings(".description").val().trim();
    localStorage.setItem(id, description);
  });

  // TODO: Add code to get any user input that was saved in localStorage
  //help was provided during Tutoring session with Juan Delgado
  $(".time-block").each(function () {
    var id = $(this).attr("id");
    var savedDescription = localStorage.getItem(id);
    if (savedDescription !== null) {
      $(this).find(".description").val(savedDescription);
    }
  });

  //code for generating color coding for each time block
  //help was provided during Tutoring session with Juan Delgado
  const currentHour = dayjs().hour();

  for (var i = 9; i < 18; i++) {

    let getElement = $("#hour-" + i)
    console.log(i)
    console.log(getElement)


    if (i < currentHour) {
      getElement.addClass("past");
    }
    if (i > currentHour) {
      getElement.addClass("future");
    }
    if (i === currentHour) {
      getElement.addClass("present");
    }
  }

  // added code to show today's current date
  var today = dayjs();
  $('#1a').text(today.format('MMM D, YYYY'));

});




