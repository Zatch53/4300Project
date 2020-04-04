var quotes = [
  "Man is the only mammal that willingly delays sleep.",
  "In general, most healthy adults need seven to nine hours of sleep a night.",
  "Sleeping directly after learning something new will improve your ability to remember it effectively.",
  " Most parents miss out on 400 to 750 hours of sleep in a baby's first year.",
  "Wake up with determination. Go to bed with satisfaction",
  "Do something today that your future self will thank you for",
  "Humans spend a third of their life sleeping (25 years or more).",
  "Heart disease, diabetes, and obesity all have been linked to chronic sleep loss."
];
/*Generates random quote from var */
function HnewQuote() {
  var randomNumber = Math.floor(Math.random() * quotes.length);
  document.getElementById("quoteDisplay").innerHTML = quotes[randomNumber];
}
HnewQuote();
/*Shows/hides avg sleep stat tab made with data of all users*/
function HfunCompare(){
  var x=document.getElementById("HAVGtable");
  if (x.style.display==="block"){
    x.style.display="none";
  }else{
    x.style.display="block";
  }
}