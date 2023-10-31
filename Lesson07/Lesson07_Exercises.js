/*
function calculateTax(cost, taxPercent = 0.07) {
  console.log(cost * taxPercent);
}
calculateTax(2000, 0.07);
calculateTax(9587);
*/

//7a.
function greet(){
  console.log('Hello!');
}

greet();

//7.b
function greet2(name = 'there'){
  console.log(`Hello ${name}!`);
}

greet2('Avion');
greet2('Simon');
greet2('Carmen');
greet2();

//7d.
function convertToFahrenheit(celsius){
  return (celsius * 9/5) + 32;
}
convertToFahrenheit(25);

//7e.
function convertToCelsius(fahrenheit){
  return (fahrenheit - 32) * 5/9;
}
convertToCelsius(86);

//7f.
function convertTemperature(degrees, unit){
  if(unit ==='C'){
    const temps = convertToFahrenheit(degrees);
    return `It's ${temps}°F.`;
  }
  else if(unit === 'F'){
    const temps = convertToCelsius(degrees);
    return `It's ${temps}°C.`;
  }
}

console.log(convertTemperature(25, 'C'));
console.log(convertTemperature(86, 'F'));