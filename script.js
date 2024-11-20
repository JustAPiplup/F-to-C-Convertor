// F to C Convertor

document.getElementById("convert").addEventListener("click", convertUnit);

function convertUnit() {
  // Input
  var input = +document.getElementById("input").value;

  // Process
  var formula = (input - 32) * (5 / 9);
  var round = formula.toFixed(0);
  var formula = round;

  document.getElementById("input").value = "";
  // Output
  document.getElementById("output").innerHTML = formula;
  document.getElementById("image").src = "images/thermometer.webp";
  document.getElementById("link").href = "https://www.google.com/";
  document.getElementById("link").innerHTML = "Image was found on Google";
  document.getElementById("convert").classList.add("color");
}
