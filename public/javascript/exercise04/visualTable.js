function generateNumbers() {
	var numbers = [];
	for(var i = 1; i <= 10; i++) {
		numbers.push(i)
	}
	return numbers;
}

function generateSquaresOf(numbers) {
	var square = d3.scalePow().exponent(2);
	return numbers.map(function(number) {
		return square(number)
	})
}

function generateLogOf(numbers) {
	var log = d3.scaleLog();
	return numbers.map(function(number) {
		return log(number)
	})
}

function generateRoundedLogNumbers(logOfNumbers) {
	var round = d3.format('.1g');
	return logOfNumbers.map(function(number) {
		return round(number)
	})
}

var numbers = generateNumbers();
var squaresOfNumbers = generateSquaresOf(numbers);
var logOfNumbers = generateLogOf(numbers);
var roundedlogNumbers = generateRoundedLogNumbers(logOfNumbers);

var data = [
	{rowHeading: "Title", data: numbers},
	{rowHeading: "n", data: numbers},
	{rowHeading: "n square", data: squaresOfNumbers},
	{rowHeading: "log(n)", data: logOfNumbers},
	{rowHeading: "log(n) rounded", data: roundedlogNumbers}
];

function drawVisualTable() {
	var visualTable = d3.select('body').select('.visualTable').append('table');

	var tr = visualTable.selectAll('tr')
		.data(data)
		.enter()
		.append('tr');

	tr.append('td')
		.text(function(d) {
			return d.rowHeading
		});

	tr.selectAll('td')
		.data(function(d) { return d.data }, function(d) { return d })
		.enter()
		.append('td')
		.text(function(d) {
			return d
		})
}

window.onload = drawVisualTable;

// function drawVisualTable(data, scale) {
// 	var visualTable = d3.select('body').select('.visualTable').append('table');
//
// 	// var tr = visualTable.selectAll('tr')
// 	// 	.data(data)
// 	// 	.enter()
// 	// 	.append('tr');
// 	//
// 	// tr.append('td')
// 	// 	.text(function(d) {
// 	// 		return d.rowHeading
// 	// 	});
// 	var tr = visualTable.append('tr')
//
// 	tr.selectAll('td')
// 		.data(data)
// 		.enter()
// 		.append('td')
// 		.text(function(d) {
// 			return scale(d)
// 		})
// }
//
// window.onload = function() {
// 	var square = d3.scalePow().exponent(2);
// 	var log = d3.scaleLog();
//
// 	var data = ["Title", "n", "n square", "log(n)", "log(n) rounded"];

// var data = ['Title', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// drawVisualTable(data, square);
// drawVisualTable(data);

// };

// visualTable.append('thead').append('tr')
// 	.selectAll('th')
// 	.data(['Title', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]).enter()
// 	.append('th')
// 	.text(function(d) {
// 		return d;
// 	});




