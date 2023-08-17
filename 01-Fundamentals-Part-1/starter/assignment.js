// Challenge #1

// Test Data 1:
// const markWeight = 78;
// const markHeight = 1.69;
// const johnWeight = 92;
// const johnHeight = 1.95;

// Test Data 2:
const markWeight = 95;
const markHeight = 1.88;
const johnWeight = 85;
const johnHeight = 1.76;

let markBMI = markWeight / markHeight ** 2 
console.log('markBMI: ', markBMI)

let johnBMI = johnWeight / johnHeight ** 2
console.log('johnBMI: ', johnBMI)

let markHigherBMI = markBMI > johnBMI 
console.log(markHigherBMI)

// Challenge #2: If/Else Statement

if(markBMI > johnBMI) {
	console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})!`)
} else {
	console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})!`)
}
