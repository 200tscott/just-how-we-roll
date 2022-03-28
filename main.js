/**********
 * DATA *
 **********/

const sixes = [];
const doubleSixes = [];
const twelves = [];
const twenties = [];
let totalCount = 0;
let combinedCount = 0;
/********************
 * HELPER FUNCTIONS *
 ********************/

const getRandomNumber = function (max) {
	const rand = Math.random();
	const range = rand * max;
	const result = Math.ceil(range);
	return result;
};

const sortByNumber = function (arr) {
	const byNumber = function (item1, item2) {
		return item1 - item2;
	};

	return arr.slice().sort(byNumber);
};


/*******************
 * YOUR CODE BELOW *
 *******************/
// Lets make a button to run rolls 10 times ====================================
const rollAll = document.querySelector('#app');
const button = document.createElement('button');
button.innerText = "Roll all 10 times!";
button.style.height = '200px';
button.style.width = '200px';
button.style.backgroundColor = "aqua";
button.style.fontSize = '40px';
button.style.fontWeight = 'bolder';
button.style.borderRadius = '200px';
rollAll.appendChild(button);

// Lets make a counter to track the number of rolls ============================
const rollCounter = document.querySelector("#app");
const button2 = document.createElement("button");
button2.innerHTML = 0;
button2.id = 'counter';
button2.style.height = "200px";
button2.style.width = "200px";
button2.style.backgroundColor = "beige";
button2.style.fontSize = "40px";
button2.style.fontWeight = "bolder";
button2.style.borderRadius = "200px";
rollCounter.appendChild(button2);

// Create a function for rolling everything ====================================

function rollAll10() {
	whoGoesFirst();
	snakeEyes();
	rollForDamage();
	rollInitiative();
	totalCount++;
	button2.innerHTML = totalCount;
	if (combinedCount === 10) {
		combinedCount = 0;
	}
	if (combinedCount++ != 9) {
		setTimeout(rollAll10, 1000);
	}
}

button.addEventListener('click', rollAll10);
clearTheBoard();
/*******************
 * EVENT LISTENERS *
 *******************/
const d6click = document.querySelector("#d6-roll");
d6click.addEventListener("click", whoGoesFirst);

const doubled6click = document.querySelector("#double-d6");
doubled6click.addEventListener("click", snakeEyes);

const d12click = document.querySelector("#d12-roll");
d12click.addEventListener("click", rollForDamage);

const d20click = document.querySelector("#d20-roll");
d20click.addEventListener("click", rollInitiative);

const resetAll = document.querySelector("button");
resetAll.addEventListener("click", clearTheBoard);

/******************
 * RESET FUNCTION *
 ******************/
function clearTheBoard() {
	// empty all 4 global arrays =================================================
	sixes.length = 0;
	doubleSixes.length = 0;
	twelves.length = 0;
	twenties.length = 0;
	button2.innerHTML = 0;
	totalCount = 0;
	combinedCount = 0;
	// change the dice buttons back to starting image ============================
	const d6Image = document.querySelector("#d6-roll");
	d6Image.src = "./images/start/d6.png";
	const doubled6Image1 = document.querySelector("#double-d6-roll-1");
	doubled6Image1.src = "./images/start/d6.png";
	const doubled6Image2 = document.querySelector("#double-d6-roll-2");
	doubled6Image2.src = "./images/start/d6.png";
	const d12Image = document.querySelector("#d12-roll");
	d12Image.src = "./images/start/d12.jpeg";
	const d20Image = document.querySelector("#d20-roll");
	d20Image.src = "./images/start/d20.jpg";

	// change the text of mean/median/mode to 'NA' ===============================

	// d6 Inner Text =============================================================
	const d6MeanData = document.querySelector("#d6-rolls-mean");
	d6MeanData.innerText = "NA";
	const d6MedianData = document.querySelector("#d6-rolls-median");
	d6MedianData.innerText = "NA";
	const d6ModeData = document.querySelector("#d6-rolls-mode");
	d6ModeData.innerText = "NA";

	// double d6 Inner Text ======================================================
	const doubled6MeanData = document.querySelector("#double-d6-rolls-mean");
	doubled6MeanData.innerText = "NA";
	const doubled6MedianData = document.querySelector("#double-d6-rolls-median");
	doubled6MedianData.innerText = "NA";
	const doubled6ModeData = document.querySelector("#double-d6-rolls-mode");
	doubled6ModeData.innerText = "NA";

	// d12 Inner Text ============================================================
	const d12MeanData = document.querySelector("#d12-rolls-mean");
	d12MeanData.innerText = "NA";
	const d12MedianData = document.querySelector("#d12-rolls-median");
	d12MedianData.innerText = "NA";
	const d12ModeData = document.querySelector("#d12-rolls-mode");
	d12ModeData.innerText = "NA";

	// d20 Inner Text ============================================================
	const d20MeanData = document.querySelector("#d20-rolls-mean");
	d20MeanData.innerText = "NA";
	const d20MedianData = document.querySelector("#d20-rolls-median");
	d20MedianData.innerText = "NA";
	const d20ModeData = document.querySelector("#d20-rolls-mode");
	d20ModeData.innerText = "NA";

	console.log("You cleared the numbers!");
}

/****************************
 * CLICK HANDLING FUNCTIONS *
 ****************************/
function whoGoesFirst() {
	console.log("You clicked the single 6-sided dice");
	const sixSidedRoll = getRandomNumber(6);
	console.log(sixSidedRoll);
	const d6Image = document.querySelector("#d6-roll");
	d6Image.src = `./images/d6/${sixSidedRoll}.png`;
	sixes.push(sixSidedRoll);
	const d6MeanData = document.querySelector("#d6-rolls-mean");
	d6MeanData.innerText = calculateAverage(sixes);
	const d6MedianData = document.querySelector("#d6-rolls-median");
	d6MedianData.innerText = calculateMedian(sixes);
	const d6ModeData = document.querySelector("#d6-rolls-mode");
	d6ModeData.innerText = calculateMode(sixes);
}

function snakeEyes() {
	console.log("You clicked the double 6-sided dice");
	const firstSixSidedRoll = getRandomNumber(6);
	const secondSixSidedRoll = getRandomNumber(6);
	console.log(firstSixSidedRoll, secondSixSidedRoll);
	const doubled6Image1 = document.querySelector("#double-d6-roll-1");
	const doubled6Image2 = document.querySelector("#double-d6-roll-2");
	doubled6Image1.src = `./images/d6/${firstSixSidedRoll}.png`;
	doubled6Image2.src = `./images/d6/${secondSixSidedRoll}.png`;
	let double = firstSixSidedRoll + secondSixSidedRoll;
	console.log(double);
	doubleSixes.push(double);
	const doubled6MeanData = document.querySelector("#double-d6-rolls-mean");
	doubled6MeanData.innerText = calculateAverage(doubleSixes);
	const doubled6MedianData = document.querySelector("#double-d6-rolls-median");
	doubled6MedianData.innerText = calculateMedian(doubleSixes);
	const doubled6ModeData = document.querySelector("#double-d6-rolls-mode");
	doubled6ModeData.innerText = calculateMode(doubleSixes);
}

function rollForDamage() {
	console.log("You clicked the 12-sided dice");
	const d12Roll = getRandomNumber(12);
	console.log(d12Roll);
	const d12Image = document.querySelector("#d12-roll");
	d12Image.src = `./images/numbers/${d12Roll}.png`;
	twelves.push(d12Roll);
	const d12MeanData = document.querySelector("#d12-rolls-mean");
	d12MeanData.innerText = calculateAverage(twelves);
	const d12MedianData = document.querySelector("#d12-rolls-median");
	d12MedianData.innerText = calculateMedian(twelves);
	const d12ModeData = document.querySelector("#d12-rolls-mode");
	d12ModeData.innerText = calculateMode(twelves);
}

function rollInitiative() {
	console.log("You clicked the 20-sided dice");
	const d20Roll = getRandomNumber(20);
	console.log(d20Roll);
	const d20Image = document.querySelector("#d20-roll");
	d20Image.src = `./images/numbers/${d20Roll}.png`;
	twenties.push(d20Roll);
	const d20MeanData = document.querySelector("#d20-rolls-mean");
	d20MeanData.innerText = calculateAverage(twenties);
	const d20MedianData = document.querySelector("#d20-rolls-median");
	d20MedianData.innerText = calculateMedian(twenties);
	const d20ModeData = document.querySelector("#d20-rolls-mode");
	d20ModeData.innerText = calculateMode(twenties);
}

/****************
 * MATH SECTION *
 ****************/

// Calculate the mean ==========================================================
function calculateAverage(array) {
	let sum = 0;
	let average = 0;
	for (let i = 0; i < array.length; i++) {
		sum += array[i];
	}
	average += sum / array.length;
	return average.toFixed(2);
}

// Calculate the median ========================================================
function calculateMedian(array) {
// Make a variable for the sorting function ====================================
	let sortedArray = sortByNumber(array);
// Make a variable for the middle number =======================================
	let median = Math.floor((sortedArray.length - 1) / 2);
// Odd and even length arrays act differently for this apparently ==============
	// If it is even, we can just return the middle number =====================
	if (sortedArray.length % 2) {
		return sortedArray[median];
	// If it is odd, average the middle two numbers ============================
	} else {
		return (sortedArray[median] + sortedArray[median + 1]) / 2;
	}
}

// Calculate the mode ==========================================================
function calculateMode(array) {
	// Create an object ========================================================
	let frequency = {};
	// Make a way to store the high number =====================================
	let high = 0;
	let highKey = -Infinity;
	// Look at each number in the array ========================================
	array.forEach((number) => {
	// If there is no key value pair already, create one =======================
		if (!frequency[number]) {
			frequency[number] = 1;
	// Otherwise, add 1 to the times that number has been seen =================
		} else {
			frequency[number] += 1;
		}
	});
	console.log(frequency);
	// Loop through the key value pairs ========================================
	for (let key in frequency) {
	// Create a variable for the key value pairs ===============================
		const value = frequency[key];
	// Check which key value pair is the highest ===============================
		if (value > high) {
			high = value;
			highKey = key;
		}
	}
	return Number(highKey);
}