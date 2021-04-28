let char = 'O';  
let turn = 0;
let area = [
				['*','*','*'],
				['*','*','*'],
				['*','*','*']
								];

document.querySelector(".check").onclick = function() {
	let row = document.querySelector('.row').value;
	let column = document.querySelector('.column').value;


	console.log(area[row-1][column-1])

	if (area[row-1][column-1] != 'X' && area[row-1][column-1] != 'O' ) {	
		document.querySelector('span').innerHTML = "Сейчас ходит: " + char; 
		turn++;
		if (turn % 2 == 1) {
			char = 'X';
		} else {
			char = 'O';
		};

		let rows = document.querySelectorAll('tr');
		let cells = rows[row-1].querySelectorAll('td');
		let cell = cells[column-1];

		cell.innerHTML = char;	

		if (char == 'X') {
			cell.style.backgroundColor = "lightgray";
			cell.style.textAlign = 'center';
			cell.style.color = 'blue';
		} else {
			cell.style.backgroundColor = "red";
			cell.style.textAlign = 'center';
		};
		area[row-1][column-1] = char;
		checkWinner();
		if (checkWinner() == 'X') {
			document.querySelector('.winner').innerHTML = 'Выиграли: X'
		}; 
		if (checkWinner() == 'O') {
			document.querySelector('.winner').innerHTML = 'Выиграли: O'
		};
	}; 
};

function disabled() {
	document.querySelector('.row').disabled = true;
	document.querySelector('.column').disabled = true;
	document.querySelector('.check').disabled = true;
}

function checkWinner() {
	if (area[0][0] == 'X' && area[0][1] == 'X' && area[0][2] == 'X') {
		disabled();
		return 'X';
	};
	if (area[1][0] == 'X' && area[1][1] == 'X' && area[1][2] == 'X') {
		disabled();
		return 'X';
	};
	if (area[2][0] == 'X' && area[2][1] == 'X' && area[2][2] == 'X') {
		disabled();
		return 'X';
	};
	if (area[0][0] == 'X' && area[1][0] == 'X' && area[2][0] == 'X') {
		disabled();
		return 'X';
	};
	if (area[0][1] == 'X' && area[1][1] == 'X' && area[2][1] == 'X') {
		disabled();
		return 'X';
	};
	if (area[0][2] == 'X' && area[1][2] == 'X' && area[2][2] == 'X') {
		disabled();
		return 'X';
	};
	if (area[0][0] == 'X' && area[1][1] == 'X' && area[2][2] == 'X') {
		disabled();
		return 'X';
	};
	if (area[2][0] == 'X' && area[1][1] == 'X' && area[0][2] == 'X') {
		disabled();
		return 'X';
	};
	if (area[0][0] == 'O' && area[0][1] == 'O' && area[0][2] == 'O') {
		disabled();
		return 'O';
	};
	if (area[1][0] == 'O' && area[1][1] == 'O' && area[1][2] == 'O') {
		disabled();
		return 'O';
	};
	if (area[2][0] == 'O' && area[2][1] == 'O' && area[2][2] == 'O') {
		disabled();
		return 'O';
	};
	if (area[0][0] == 'O' && area[1][0] == 'O' && area[2][0] == 'O') {
		disabled();
		return 'O';
	};
	if (area[0][1] == 'O' && area[1][1] == 'O' && area[2][1] == 'O') {
		disabled();
		return 'O';
	};
	if (area[0][2] == 'O' && area[1][2] == 'O' && area[2][2] == 'O') {
		disabled();
		return 'O';
	};
	if (area[0][0] == 'O' && area[1][1] == 'O' && area[2][2] == 'O') {
		disabled();
		return 'O';
	};
	if (area[2][0] == 'O' && area[1][1] == 'O' && area[0][2] == 'O') {
		disabled();
		return 'O';
	};
};

document.querySelector('.reset').onclick = function() {
	document.querySelector('.row').disabled = false;
	document.querySelector('.column').disabled = false;
	document.querySelector('.check').disabled = false;

	area = [
				['*','*','*'],
				['*','*','*'],
				['*','*','*']
								];

	document.querySelector('.row').value = '';
	document.querySelector('.column').value = '';

	for (let i = 0; i < 9; i++) {
		document.querySelectorAll('td')[i].innerHTML = '';
		document.querySelectorAll('td')[i].style.backgroundColor = 'white';
	}

}

















