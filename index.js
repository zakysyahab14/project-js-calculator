let choose = parseInt(prompt("Choose calculator you want = A. Addition S. Substraction M. Multiplication D. Division"));
let digitA = parseInt(prompt("Input first number"));
let digitB = parseInt(prompt("input second number"));
switch (choose) {
    case A:
        console.log(typeof digitA);
        console.log(typeof digitB);
        const resultAddition = parseInt(digitA) + parseInt(digitB);
        console.log("Addition between " + digitA + "+" + digitB + "= " + resultAddition);
        alert("Addition between " + digitA + "+" + digitB + "= " + resultAddition)
        break;
    case B:
        const resultSubstraction = digitA - digitB;
        console.log("Substraction between " + digitA + "+" + digitB + "= " + resultSubstraction);
        alert("Substraction between " + digitA + "+" + digitB + "= " + resultSubstraction);
        break;
    case C:
        const resultMultiplication = digitA * digitB;
        console.log("Multiplication between " + digitA + "+" + digitB + "= " + resultMultiplication);
        alert("Multiplication between " + digitA + "+" + digitB + "= " + resultMultiplication);
        break;
    case D:
        const resultDivison = digitA / digitB;
        console.log("Division between " + digitA + "+" + digitB + "= " + resultDivison);
        alert("Division between " + digitA + "+" + digitB + "= " + resultDivison)
        break;
    default:
        console.log("There is no option for that");
        break;
}