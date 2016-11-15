function drawShapes() {
	var container = d3.select('body').select('.container')
	var svg = container.append('svg')
		.attr('width', 1000)
		.attr('height', 500);

	var dimension = 100;
	var distanceBetweenShapes = 50;
	var radius = dimension / 2;

	svg.append("line")
		.style("stroke", "black")
		.attr("x1", 0)
		.attr("y1", dimension)
		.attr("x2", dimension)
		.attr("y2", 0)

	svg.append('circle')
		.attr('r', radius)
		.attr('cx', dimension + distanceBetweenShapes + radius)
		.attr('cy', radius)
		.attr('fill', 'none')
		.attr('stroke', 'black')

	svg.append('rect')
		.attr('width', dimension)
		.attr('height', dimension)
		.attr('x', (2 * dimension) + (2 * distanceBetweenShapes))
		.attr('y', 0)
		.attr('fill', 'none')
		.attr('stroke', 'black');

	var x1 = 3 * dimension + 3 * distanceBetweenShapes + (dimension / 2);
	var y1 = 0;
	var x2 = 3 * dimension + 3 * distanceBetweenShapes;
	var y2 = dimension;
	var x3 = x1 + (dimension / 2);
	var y3 = dimension;
	var points = x1 + ',' + y1 + ' ' + x2 + ',' + y2 + ' ' + x3 + ',' + y3;

	svg.append('polygon')
		.attr('points', '500,0 450,100 550,100')
		.attr('points', points)
		.attr('fill', 'none')
		.attr('stroke', 'black')
}

window.onload = drawShapes;
