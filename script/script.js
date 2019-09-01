var numbers = document.querySelectorAll('.numbers'),
	operations = document.querySelectorAll('.operation'),
	dot = document.getElementById('doting'),
	inp = document.getElementById('inp'),
	cleaning = document.querySelectorAll('.clear'),
	MemoryNewNumber = false,
	MemoryPresentNumber = 0,
	MemoryWaitingOperation = '';

"use strict";

for (var i = 0; i < numbers.length; i++) {
	var AllNumbers = numbers[i];
	AllNumbers.addEventListener('click', function (e) {
		number(e.target.textContent);
	})
}

for (var a = 0; a < operations.length; a++) {
	var operation = operations[a];
	operation.addEventListener('click', function (e) {
		operat(e.target.textContent);
	})
}

dot.addEventListener('click', function (e) {
	decimal(e.target.textContent);
});

for (var b = 0; b < cleaning.length; b++) {
	var cle = cleaning[b];
	cle.addEventListener('click', function (e) {
		clear(e.srcElement.id);
	})
}


/**********************************
function numbers
***********************************/
function number(num) {
	if (MemoryNewNumber) {
		inp.value = num;
		MemoryNewNumber = false;
	} else {
		if (inp.value === '0') {
			inp.value = num;
		} else {
			inp.value += num;
		}
	}

}


/**********************************
function operations( - , + , * , /)
***********************************/
function operat(op) {
	var LocalOperMemory = inp.value;
	if (MemoryNewNumber && MemoryWaitingOperation !== '=') {
		inp.value = MemoryPresentNumber;

	} else {
		MemoryNewNumber = true;
		if (MemoryWaitingOperation === '+') {
			MemoryPresentNumber += parseFloat(LocalOperMemory);
		} else if (MemoryWaitingOperation === '-') {
			MemoryPresentNumber -= parseFloat(LocalOperMemory);
		} else if (MemoryWaitingOperation === '*') {
			MemoryPresentNumber *= parseFloat(LocalOperMemory);
		} else if (MemoryWaitingOperation === '/') {
			MemoryPresentNumber /= parseFloat(LocalOperMemory);
		} else {
			MemoryPresentNumber = parseFloat(LocalOperMemory);
		}

		inp.value = MemoryPresentNumber;
		MemoryWaitingOperation = op;
	}
}

/******************************
function decimal ( . )
******************************/
function decimal() {
	var LocalMemoeryDecimal = inp.value;
	if (MemoryNewNumber) {
		LocalMemoeryDecimal = '0.';
		MemoryNewNumber = false;
	} else {
		if (LocalMemoeryDecimal.indexOf('.') === -1) {
			LocalMemoeryDecimal += '.';
		}
	}

	inp.value = LocalMemoeryDecimal;
}


/*********************************
function cleaning(CE , C)
**********************************/
function clear(id) {
	if (id === 'ce') {
		inp.value = '0';
		MemoryNewNumber = true;
	} else if (id === 'c') {
		inp.value = '0';
		MemoryNewNumber = true;
		MemoryPresentNumber = 0;
		MemoryWaitingOperation = '';
	}
}