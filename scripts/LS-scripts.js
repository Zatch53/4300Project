

function shiftRight() {
  var x = document.getElementById("LS-login-form");
  var y = document.getElementById("LS-signup-form");
  var z = document.getElementById("LS-btn");
  x.style.left = "-550px";
  y.style.left = "75px";
  z.style.left = "110px";
}

function shiftLeft() {
  var x = document.getElementById("LS-login-form");
  var y = document.getElementById("LS-signup-form");
  var z = document.getElementById("LS-btn");
  x.style.left = "75px";
  y.style.left = "550px";
  z.style.left = "0px";
}

function loginClick() {
  window.location = '../html/home\.html';
}

function signupClick() {
  var name = document.getElementById("LS-name-signup");
  var email = document.getElementById("LS-email-signup");
  var password = document.getElementById("LS-password-signup");
  var password2 = document.getElementById("LS-password-ckeck");
  var checkbox = document.getElementById("LS-checkbox-signup");

  //if (validateEmail(email.value) & validatePasswords(password.value, password2.value) & checkbox.value == true) {
    window.location = '../html/home\.html';
  //} else {
  //  alert('spam');
  //  return false;
  //}
}

function validateEmail(email) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    return (true);
  }
  alert("You have entered an invalid email address!");
  return (false);
}

function validatePassword(passval)
{
  var passw=  /^[A-Za-z]\w{7,14}$/;
  if(passval.match(passw)) {
    return true;
  }
  else {
    alert('Wrong...!')
    return false;
  }
}

function validatePasswords(passval1, passval2) {
  if(!(validatePassword(passval1) & validatePassword(passval2))) {
    return false;
  }
  if (!passval1.match(passval2)) {
    return false;
  }

  return true;
}
