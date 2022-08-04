// Set the date we're counting down to
var countDownDate = new Date("Aug 24, 2022 15:30:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time 
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  // document.getElementById("time").innerHTML = days +  ": " + hours +  ": "
  // + minutes + ": " + seconds + "sec ";
  document.getElementById("days0").innerHTML = days;
  document.getElementById("hours0").innerHTML = hours;
  document.getElementById("min0").innerHTML = minutes;
  document.getElementById("sec0").innerHTML = seconds;

  document.getElementById("days1").innerHTML = days;
  document.getElementById("hours1").innerHTML = hours;
  document.getElementById("min1").innerHTML = minutes;
  document.getElementById("sec1").innerHTML = seconds;

  document.getElementById("days2").innerHTML = days;
  document.getElementById("hours2").innerHTML = hours;
  document.getElementById("min2").innerHTML = minutes;
  document.getElementById("sec2").innerHTML = seconds;

  document.getElementById("days3").innerHTML = days;
  document.getElementById("hours3").innerHTML = hours;
  document.getElementById("min3").innerHTML = minutes;
  document.getElementById("sec3").innerHTML = seconds;
  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("time").innerHTML = "EXPIRED";
  }
}, 1000);