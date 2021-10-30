'use strict';

function sum() {
	let a = document.getElementById('input1').value;
	let b = document.getElementById('input2').value;
	let res = +a + +b;
	document.getElementById('result').innerHTML = res.toFixed(2);
}

function subtraction() {
	let a = document.getElementById('input1').value;
	let b = document.getElementById('input2').value;
	let res = a - b;
	document.getElementById('result').innerHTML = res.toFixed(2);
}

function multiplication() {
	let a = document.getElementById('input1').value;
	let b = document.getElementById('input2').value;
	let res = a * b;
	document.getElementById('result').innerHTML = res.toFixed(2);
}

function division() {
	let a = document.getElementById('input1').value;
	let b = document.getElementById('input2').value;
	let res = a / b;
	document.getElementById('result').innerHTML = res.toFixed(2);
}

function exponentiation() {
	let a = document.getElementById('input1').value;
	let b = document.getElementById('input2').value;
	let res = a ** b;
	document.getElementById('result').innerHTML = res.toFixed(2);
}

function reset() {
	let result = 0;
	document.getElementById('result').innerHTML = result;
	document.getElementById('input1').value = "";
	document.getElementById('input2').value = "";
}