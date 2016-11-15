function drawShapes() {
	var container = d3.select('body').select('.container');
	var svg = container.append('svg')
		.attr('width', 1000)
		.attr('height', 500);

	var dimension = 100;
	var distanceBetweenShapes = 50;
	var radius = dimension / 2;
	var marginTop = 10;

	svg.append("line")
		.attr("x1", marginTop)
		.attr("y1", dimension + marginTop)
		.attr("x2", dimension + marginTop)
		.attr("y2", marginTop);

	svg.append('circle')
		.attr('r', radius)
		.attr('cx', dimension + distanceBetweenShapes + radius)
		.attr('cy', radius + marginTop);

	svg.append('rect')
		.attr('width', dimension)
		.attr('height', dimension)
		.attr('x', (2 * dimension) + (2 * distanceBetweenShapes))
		.attr('y', marginTop)
		.attr("rx", 6)
		.attr("ry", 6);

	var x1 = 3 * dimension + 3 * distanceBetweenShapes + (dimension / 2);
	var y1 = marginTop;
	var x2 = 3 * dimension + 3 * distanceBetweenShapes;
	var y2 = dimension + marginTop;
	var x3 = x1 + (dimension / 2);
	var y3 = dimension + marginTop;
	var points = x1 + ',' + y1 + ' ' + x2 + ',' + y2 + ' ' + x3 + ',' + y3;

	svg.append('polygon')
		.attr('points', points)
}

window.onload = drawShapes;
