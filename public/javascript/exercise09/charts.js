var listOfPoints = [{x: 0, y: 5}, {x: 1, y: 9}, {x: 2, y: 7}, {x: 3, y: 5}, {x: 4, y: 3}, {x: 6, y: 4}, {x: 7, y: 2}, {x: 8, y: 3}, {x: 9, y: 2}];
var width = 1000;
var height = 500;
var margin = 30;
var radius = 5;
var scaleFactor = 10;
var shiftingFactor = 0.5;
var svg;
var xScale;
var yScale;
var curves = [
	{curve: d3.curveLinear, curveTitle: 'curveLinear'},
	{curve: d3.curveLinearClosed, curveTitle: 'curveLinearClosed'},
	{curve: d3.curveStepAfter, curveTitle: 'curveStepAfter'},
	{curve: d3.curveBasis, curveTitle: 'curveBasis'},
	{curve: d3.curveBundle, curveTitle: 'curveBundle'},
	{curve: d3.curveCardinalClosed, curveTitle: 'curveCardinalClosed'},
	{curve: d3.curveCardinal, curveTitle: 'curveCardinal'},
	{curve: d3.curveMonotoneX, curveTitle: 'curveMonotoneX'}
];

function drawAxes() {
	svg = d3.select('body').append('svg')
		.attr('width', width)
		.attr('height', height);

	xScale = d3.scaleLinear()
		.domain([0, 1])
		.range([0, width / 2]);

	yScale = d3.scaleLinear()
		.domain([0, 1])
		.range([height - 100, 0]);

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
}

function drawLines(curve) {
	drawAxes();

	var pointsLine = d3.line()
		.curve(curve.curve)
		.x(function(d) { return xScale(d.x / scaleFactor); })
		.y(function(d) { return yScale(d.y / scaleFactor); });

	var sineValuesLine = d3.line()
		.curve(curve.curve)
		.x(function(d) { return xScale(d.x / scaleFactor); })
		.y(function(d) { return yScale((Math.sin(d.x) / scaleFactor) + shiftingFactor); });

	svg.append('text')
		.text(curve.curveTitle)
		.attr('x', 200)
		.attr('y', 50)
		.attr('font-size', 20)
		.attr('font-family', 'serif');

	svg.append('path')
		.attr('class', 'lineOfPoints')
		.attr('d', pointsLine(listOfPoints))
		.attr("transform", "translate(" + margin + "," + (2 * margin + 10) + ")");

	svg.append('path')
		.attr('class', 'sineValuesOfPoints')
		.attr('d', sineValuesLine(listOfPoints))
		.attr("transform", "translate(" + margin + "," + (2 * margin + 10) + ")");
}

function drawLineCurvesWithCircleMarks(curve) {
	drawLines(curve);
	var circlesOfLineOfPoints = svg.append('g');
	var circlesOfSineValuesOfPoints = svg.append('g');

	circlesOfLineOfPoints.selectAll('circle')
		.data(listOfPoints).enter()
		.append('circle')
		.attr('class', 'lineOfPointsCircles')
		.attr('r', radius)
		.attr('cx', function(d) { return xScale(d.x / scaleFactor); })
		.attr('cy', function(d) { return yScale((d.y / scaleFactor)); })
		.attr("transform", "translate(" + margin + "," + (2 * margin + 10) + ")");

	circlesOfSineValuesOfPoints.selectAll('circle')
		.data(listOfPoints).enter()
		.append('circle')
		.attr('class', 'sineValuesOfPointsCircles')
		.attr('r', radius)
		.attr('cx', function(d) { return xScale(d.x / scaleFactor); })
		.attr('cy', function(d) { return yScale((Math.sin(d.x) / scaleFactor) + shiftingFactor); })
		.attr("transform", "translate(" + margin + "," + (2 * margin + 10) + ")");

}

function drawLineCurves() {
	curves.forEach(function(curve) {
		drawLineCurvesWithCircleMarks(curve)
	})
}

window.onload = drawLineCurves;
