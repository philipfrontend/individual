var countDownDate = new Date("Nov 15, 2023 23:59:59").getTime();

var countdownfunction = setInterval(function () {
  var now = new Date().getTime();
  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("min").innerHTML = minutes;
  document.getElementById("sec").innerHTML = seconds;
  //   document.querySelector(".days").innerHTML = days;
  //   document.querySelector(".hours").innerHTML = hours;
  //   document.querySelector(".minutes").innerHTML = minutes;
  //   document.querySelector(".seconds").innerHTML = seconds;
//   console.log(days + " - " + hours + " - " + minutes + " - " + seconds);
  if (distance < 0) {
    clearInterval(countdownfunction);
    // document.querySelector(".countdown").innerHTML = "EXPIRED";
  }
}, 1000);
