'use strict';

function sum() {
	let a = document.getElementById('input1').value;
	let b = document.getElementById('input2').value;
	let res = +a + +b;
	document.getElementById('result').innerHTML = res;
}

function subtraction() {
	let a = document.getElementById('input1').value;
	let b = document.getElementById('input2').value;
	let res = a - b;
	document.getElementById('result').innerHTML = res;
}

function multiplication() {
	let a = document.getElementById('input1').value;
	let b = document.getElementById('input2').value;
	let res = a * b;
	document.getElementById('result').innerHTML = res;
}

function division() {
	let a = document.getElementById('input1').value;
	let b = document.getElementById('input2').value;
	let res = a / b;
	document.getElementById('result').innerHTML = res;
}

function exponentiation() {
	let a = document.getElementById('input1').value;
	let b = document.getElementById('input2').value;
	let res = a ** b;
	document.getElementById('result').innerHTML = res;
}

function reset() {
	let result = 0;
	document.getElementById('result').innerHTML = result;
	document.getElementById('input1').value = "";
	document.getElementById('input2').value = "";
}