function countdown(dateEnd) {
  var timer, days, hours, minutes, seconds;

  dateEnd = new Date(dateEnd);
  dateEnd = dateEnd.getTime();

  if (isNaN(dateEnd)) {
    return;
  }

  timer = setInterval(calculate, 1000);

  function calculate() {
    var dateStart = new Date();
    var dateStart = new Date(dateStart.getUTCFullYear(),
      dateStart.getUTCMonth(),
      dateStart.getUTCDate(),
      dateStart.getUTCHours(),
      dateStart.getUTCMinutes(),
      dateStart.getUTCSeconds());
    var timeRemaining = parseInt((dateEnd - dateStart.getTime()) / 1000)

    if (timeRemaining >= 0) {
      days = parseInt(timeRemaining / 86400);
      timeRemaining = (timeRemaining % 86400);
      hours = parseInt(timeRemaining / 3600);
      timeRemaining = (timeRemaining % 3600);
      minutes = parseInt(timeRemaining / 60);
      timeRemaining = (timeRemaining % 60);
      seconds = parseInt(timeRemaining);


      document.getElementById("days").innerText = parseInt(days, 10);
      document.getElementById("hours").innerText = ("0" + hours).slice(-2);
      document.getElementById("minutes").innerText = ("0" + minutes).slice(-2);
      document.getElementById("seconds").innerText = ("0" + seconds).slice(-2);

      document.getElementById("days2").innerText = parseInt(days, 10);
      document.getElementById("hours2").innerText = ("0" + hours).slice(-2);
      document.getElementById("minutes2").innerText = ("0" + minutes).slice(-2);
      document.getElementById("seconds2").innerText = ("0" + seconds).slice(-2);
    } else {
      return;
    }
  }

  function display(days, hours, minutes, seconds) {}
}




countdown ('09/22/2021 02:00:00 AM');