function formula(value) {
	return (3 * (Math.sin(value))) + 5;
}

function drawAreaChart() {
	var width = 1000;
	var height = 500;
	var margin = 30;
	var radius = 5;
	var scaleFactor = 10;
	var innerHeight = height - 100;
	var innerWidth = (width / 2) - 100;

	var data = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

	var svg = d3.select('body').append('svg')
		.attr('width', width)
		.attr('height', height);

	var xScale = d3.scaleLinear()
		.domain([0, 1])
		.range([0, innerWidth]);

	var yScale = d3.scaleLinear()
		.domain([0, 1])
		.range([innerHeight, 0]);

	var bottomAxis = d3.axisBottom(xScale);
	var leftAxis = d3.axisLeft(yScale);

	svg.append('g')
		.attr('class', 'xAxis')
		.attr("transform", "translate(" + margin + "," + (height - margin) + ")")
		.call(bottomAxis);

	svg.append('g')
		.attr('class', 'yAxis')
		.attr("transform", "translate(" + (margin - 1) + "," + (2 * margin + 10) + ")")
		.call(leftAxis);

	var line = d3.line()
		.x(function(d) {
			return xScale(d / scaleFactor)
		})
		.y(function(d) {
			return yScale((formula(d) / scaleFactor))
		});

	var area = d3.area()
		.x0(function(d) {
			return xScale(d / scaleFactor)
		})
		.y0(height - (100))
		.y1(function(d) {
			return yScale((formula(d) / scaleFactor))
		});

	svg.append('path')
		.attr('class', 'linePath')
		.attr('d', line(data))
		.attr("transform", "translate(" + margin + "," + (2 * margin + 10) + ")");

	svg.append('path')
		.attr('class', 'areaPath')
		.attr('d', area(data))
		.attr("transform", "translate(" + margin + "," + (2 * margin + 10) + ")");

	var circlesOfLineOfPoints = svg.append('g');

	circlesOfLineOfPoints.selectAll('circle')
		.data(data).enter()
		.append('circle')
		.attr('class', 'circles')
		.attr('r', radius)
		.attr('cx', function(d) { return xScale(d / scaleFactor); })
		.attr('cy', function(d) {
			return yScale((formula(d) / scaleFactor));
		})
		.attr("transform", "translate(" + margin + "," + (2 * margin + 10) + ")");
}

window.onload = drawAreaChart;

