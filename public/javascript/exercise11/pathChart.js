function formula(value) {
	return (Math.sin(3 * value) + 1) / 2;
}

var tensions = [-2, -1, 0, 0.5, 1];

function drawPathChartWith(tension) {
	var width = 1000;
	var height = 500;
	var margin = 30;
	var radius = 5;

	var data = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

	var svg = d3.select('body').append('svg')
		.attr('width', width)
		.attr('height', height);

	var xScale = d3.scaleLinear()
		.domain([0, data.length])
		.range([0, width / 2]);

	var yScale = d3.scaleLinear()
		.domain([0, 1])
		.range([400, 0]);

	var bottomAxis = d3.axisBottom(xScale);
	var leftAxis = d3.axisLeft(yScale);

	svg.append('g')
		.attr('class', 'xAxis')
		.attr("transform", "translate(" + margin + "," + (height - margin) + ")")
		.call(bottomAxis);

	svg.append('g')
		.attr('class', 'yAxis')
		.attr("transform", "translate(" + margin + "," + (2 * margin + 10) + ")")
		.call(leftAxis);

	var pointsLine = d3.line()
		.curve(d3.curveCardinal.tension(tension))
		.x(function(d) {
			return xScale(d);
		})
		.y(function(d) {
			return yScale(formula(d));
		});

	svg.append('path')
		.attr('class', 'linePath')
		.attr('d', pointsLine(data))
		.attr("transform", "translate(" + margin + "," + (2 * margin + 10) + ")");

	var circlesOfLineOfPoints = svg.append('g');

	circlesOfLineOfPoints.selectAll('circle')
		.data(data).enter()
		.append('circle')
		.attr('class', 'circles')
		.attr('r', radius)
		.attr('cx', function(d) { return xScale(d); })
		.attr('cy', function(d) {
			return yScale(formula(d));
		})
		.attr("transform", "translate(" + margin + "," + (2 * margin + 10) + ")");
}

function drawPathChart() {
	tensions.forEach(function(tension) {
		drawPathChartWith(tension)
	})
}

window.onload = drawPathChart;