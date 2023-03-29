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
  saveBtn = $('.saveBtn');
  var savedText = JSON.parse(localStorage.getItem("savedText")) || [];
  // console.log(savedText);
  saveBtn.on('click', function () {
    var parentEl = this.parentElement;
    var parentId = parentEl.id;
    var parentTextArea = parentEl.textarea;
    console.log(parentTextArea);
    var saveText = {
      id: parentId,
      text: parentTextArea.value,
    }
    console.log(saveText);
    savedText.push(saveText);
    localStorage.setItem("savedText", JSON.stringify("savedText"));
  })
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
    containerEl = $('.container-lg');
    for(var i = 0; i < 9; i++) {
      var divId = containerEl.children()[i].id;
      var IdNum = divId.substring(divId.indexOf('-') + 1);
      Number(IdNum);
      var time = Number(dayjs().format('H'));
      if (IdNum == time) {
        containerEl.children()[i].setAttribute('class', 'present row time-block');
      }
      else if (IdNum < time) {
        containerEl.children()[i].setAttribute('class', 'past row time-block');
      }
      else  if (IdNum > time){
        containerEl.children()[i].setAttribute('class', 'future row time-block');
      }
    }
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
  var currentDay = $('#currentDay');

  currentDay.text(dayjs().format('MMMM D, YYYY'));
});
