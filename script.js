$(function () {
  saveBtn = $('.saveBtn');
  var savedText = JSON.parse(localStorage.getItem("savedText")) || [];
  saveBtn.on('click', function () {
    var parentEl = this.parentElement;
    var saveText = {
      id: parentEl.id,
      text: this.previousElementSibling.value,
    }
    savedText.push(saveText);
    localStorage.setItem("savedText", JSON.stringify(savedText));
    console.log(savedText);
  })
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
    function getSavedItems () {
      for (var i = 0; i < savedText.length; i++) {
        console.log(savedText);
        var timeId = savedText[i].id;
        var timeText = savedText[i].text;
        console.log(timeId);
        console.log(timeText);
        $("#" + timeId).children(".description").val(timeText);
      }
    }
    console.log(savedText);
    getSavedItems ();

  var currentDay = $('#currentDay');

  currentDay.text(dayjs().format('MMMM D, YYYY'));
});
