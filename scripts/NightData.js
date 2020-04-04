//left off - update today then be able to select
//global variables
const WEEKDAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var numDays = 0;

var selectedYear = 0;
var selectedMonth = 0;
var selectedDate = 0;

var activeBtn;
var activeDate;
var activeMonth;
var activeYear;

var currDate;
var currMonth;
var currYear;

window.onload = function() {
  clock_ND();
  today_ND();
  document.getElementById("todayBtn_ND").addEventListener("click", today_ND);
  document.getElementById("prevBtn_ND").addEventListener("click", prevChange_ND);
  document.getElementById("nextBtn_ND").addEventListener("click", nextChange_ND);
  document.getElementById("logBtn_ND").addEventListener("click", goToLogPage_ND);
  document.getElementById("homeBtn_ND").addEventListener("click", goToHomePage_ND);
  document.getElementById("aboutUsBtn_ND").addEventListener("click", goToAboutUsPage_ND);
}

//adds time to time div
function clock_ND() {
  var today = new Date();
  var hours = today.getHours();
  var minutes = today.getMinutes();
  var seconds = today.getSeconds();

  hours = checkClock_ND(hours);
  minutes = checkClock_ND(minutes);
  seconds = checkClock_ND(seconds);

  var time = hours + ":" + minutes + ":" + seconds;
  document.getElementById("clock_ND").innerHTML = time;

  setTimeout(clock_ND, 500);
}

function checkClock_ND(time) {
  if (time < 10) {
    time = "0" + time;
  }
  return time;
}

//changes month and selectedYear if back arrow clicked
function prevChange_ND() {
  if (selectedMonth != 0) {
    selectedMonth--;
  } else {
    selectedMonth = 11;
    selectedYear--;
  }

  choose_ND();
  maintain_ND();
}

//changes month and selectedYear if next arrow clicked
function nextChange_ND() {
  if (selectedMonth != 11) {
    selectedMonth++;
  } else {
    selectedMonth = 0;
    selectedYear++;
  }

  choose_ND();
  maintain_ND();
}

function today_ND() {
  var today = new Date();
  currMonth = today.getMonth();
  currYear = today.getFullYear();
  currDate = today.getDate();

  //get selected day
  selectedMonth = currMonth;
  selectedYear = currYear;
  selectedDate = currDate;

  activeDate = selectedDate;
  activeMonth = selectedMonth;
  activeYear = selectedYear;

  //switch to correct month and year
  choose_ND();

  //get list of buttons
  var dateList = document.getElementById("daysID_ND");
  //search through list of buttons for the innerText that matches currDay
  for (var i = 0; i < dateList.childNodes.length; i++) {
    //add class = "active"
    if (dateList.childNodes[i].innerText == currDate) {
      activeBtn = dateList.childNodes[i];
      activeBtn.className += "active_ND";
    }
  }

  updateHeader_ND();
}

function select_ND() {
  var dateList = document.getElementById("daysID_ND");
  for (var i = 0; i < dateList.childNodes.length; i++) {
    dateList.childNodes[i].addEventListener("click", clicked_ND);
  }
}

function clicked_ND() {
  var activeDayList = document.getElementsByClassName("active_ND");
  if (activeDayList.length > 0) {
    activeDayList[0].className = activeDayList[0].className.replace("active_ND", "");
  }
  activeBtn = this;
  activeDate = activeBtn.innerText; //activeDay gets the day that is clicked
  activeMonth = selectedMonth;
  activeYear = selectedYear;
  activeBtn.className += "active_ND"; //activeDay gets the active class

  updateHeader_ND();
}

function updateHeader_ND() {
  var activeDay = new Date(activeYear, activeMonth, activeDate).getDay();
  document.getElementById("selected_ND").innerHTML = WEEKDAYS[activeDay] + "<br>" + MONTHS[activeMonth] + " " + activeDate + ", " + activeYear;
}

function maintain_ND() {
  if (selectedMonth == activeMonth && selectedYear == activeYear) {
    //get list of buttons
    var dateList = document.getElementById("daysID_ND");
    //search through list of buttons for the innerText that matches currDay
    for (var i = 0; i < dateList.childNodes.length; i++) {
      //add class = "active"
      if (dateList.childNodes[i].innerText == activeDate) {
        dateList.childNodes[i].className += "active_ND";
      }
    }
  }
}

function choose_ND() {
  var dateBtn;
  var dateLi;
  var monthYear;

  //previousMonth = selectedMonth;
  document.getElementById("monthName_ND").innerHTML = MONTHS[selectedMonth] + " " + selectedYear;
  //prevNumDays = numDays;

  //determines how many days per month
  monthYear = new Date(selectedYear, selectedMonth + 1, 0); //the last day of the current month
  numDays = monthYear.getDate();

  //determines which weekday the first day of the month is
  var date = new Date(selectedYear, selectedMonth, 1);
  var weekday = date.getDay();

  //delete buttons when switching months
  //blank
  var dateList = document.getElementById("daysID_ND");
  while (dateList.firstChild) {
    dateList.removeChild(dateList.firstChild);
  }

  //add new buttons
  //blank buttons - so that each month starts on the correct weekday
  for (var blankDayCounter = 0; blankDayCounter < weekday; blankDayCounter++) {
    dateLi = document.createElement("li");
    dateBtn = document.createElement("button");

    dateBtn.className += "blankBtn_ND";
    dateBtn.disabled = true;
    dateBtn.innerHTML = "";
    dateLi.appendChild(dateBtn);
    document.getElementById("daysID_ND").appendChild(dateLi);
  }

  //add day buttons
  for (var dayCounter = 1; dayCounter <= numDays; dayCounter++) {
    dateLi = document.createElement("li");
    dateBtn = document.createElement("button");

    dateBtn.innerHTML = dayCounter;
    dateLi.appendChild(dateBtn);
    document.getElementById("daysID_ND").appendChild(dateLi);
  }

  //allow for selection
  select_ND();
}

function goToLogPage_ND() {
  window.location.href = "../html/LogSleep.html"; //temp link - REPLACE WITH LINK TO LOG PAGE
}

function goToHomePage_ND() {
  window.location.href = "../html/home.html"; //temp link - REPLACE WITH LINK TO HOME PAGE
}

function goToAboutUsPage_ND() {
  window.location.href = "../html/AboutUs.html";
}
