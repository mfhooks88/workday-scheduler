// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?

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




