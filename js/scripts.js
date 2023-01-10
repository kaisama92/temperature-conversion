function convert() {
  return number1 * 1.8 + 32;
}

const number1 = parseInt(prompt("Temp. in degrees C to be converted to degrees F= "));

window.alert("If it is currently " + number1 + " degrees Celsius, then it is currently: " + convert() + " degrees Fahrenheit.");

