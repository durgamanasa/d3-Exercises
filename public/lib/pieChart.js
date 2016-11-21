var width = 1000;
var height = 500;
var data = [1, 1, 2, 2, 1, 2, 1];
var colors = ['steelblue', 'lightsteelblue', 'darkorange', 'burlywood', 'green', 'lightgreen', 'red'];
var radius = Math.min(width, height) / 2;


function drawPieChart(arc,pie) {
	console.log('coming here');

	var svg = d3.select('body').append('svg')
		.attr('width', width)
		.attr('height', height);

	var g = svg.selectAll(".arc")
		.data(pie(data))
		.enter().append("g")
		.attr("transform", "translate(" + width / 2 + "," + height / 2 + ")")
		.attr("class", "arc");

	g.append('path')
		.attr('d', arc)
		.style('fill', function(d, i) {
			return colors[i];
		})

}

window.onload = drawPieChart;
