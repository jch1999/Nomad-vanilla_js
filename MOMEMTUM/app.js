const Calculator = {
  Add: function(a, b) {
    return (a + b);
  },
  Sub: function(a, b) {
    return (a - b);
  },
  Div: function(a, b) {
    return (a / b);
  },
  Mul: function(a, b) {
    return (a * b);
  },
  Power: function(a, b) {
    return (a ** b);
  },
};

// Calculator.Add(5, 5);
// Calculator.Sub(5, 5);
// Calculator.Mul(5, 5);
// Calculator.Div(5, 5);
// Calculator.Power(5, 5);
// console.log(Calculator.Add(2, 3));

// const age = 96;
// function calculateKrAge(ageOfForeigner) {
//   //return ageOfForeigner + 2
//   return "hello";
// }
// const krAge = calculateKrAge(age)
// console.log(krAge);

const plusResult = Calculator.Add(2, 3);
const minusResult = Calculator.Sub(plusResult, 10);
const timesResult = Calculator.Mul(10, minusResult);
const divideResult = Calculator.Div(timesResult, plusResult);
const powerResult = Calculator.Power(divideResult, minusResult);