// Remember annual income is monthly income * 12
// Calculations
const montlyIncome = document.querySelector(".montly-income").value;
const expenses = document.querySelector(".expenses").value;
const annualIncome = document.querySelector(".annual-income").value;
const otherIncome = document.querySelector(".other-income").value;
const annualRentalIncome = monthlyIncome * 12;

const taxBands = {
  __2022__ : { 
    personalAllowance: 12570,
    basic: {
     breakPoint: 50270,
     taxRate: 0.2
    },
    higher: {
      breakPoint: 150000,
      taxRate: 0.4
    },
    additional: {
      taxRate: 0.45
    },
  }
}



function calculateTax(taxableIncome){
  let afterTaxRentalIncome;
  if(taxableIncome <= 0) return 0;
  if(taxableIncome > taxBands.__2022__.higher.breakPoint) {
    afterTaxRentalIncome = taxableIncome - (taxableIncome * taxBands.__2022__.additional.taxRate);
  } else if(taxableIncome > taxBands.__2022__.basic.breakPoint && taxableIncome < taxBands.__2022__.higher.breakPoint) {
    afterTaxRentalIncome = taxableIncome - (taxableIncome * taxBands.__2022__.higher.taxRate)
  } else if(taxableIncome > personalAllowance && taxableIncome < taxBands.__2022__.basic.breakPoint) {
    afterTaxRentalIncome = taxableIncome - (taxableIncome * taxBands.__2022__.basic.taxRate)
  } else {
    afterTaxRentalIncome = taxableIncome;
  }
  return afterTaxRentalIncome;
}

function testForErrors(inputArray){
  inputArray.forEach(function (i) {
    let error = false;
    if(input.value < 0 || isNaN(input.value)) {
      input.classList.add("warning");
      error = true;
    } else {
      error = false;
    }
    if(error == true) return error;
  })
}

const totalIncome = annualRentalIncome + annualIncome + otherIncome;
const taxableIncome = totalIncome - taxBands.__2022__.personalAllowance;
const inputs = Array.from(document.querySelectorAll('.inputs'))
const testInputs = testForErrors(inputs);

if(testInputs == false) {
  const afterTaxIncome = calculateTax(taxableIncome);
} else {
  return;
}


// const taxableIncomeMinusExpenses = taxableIncome - expenses;



