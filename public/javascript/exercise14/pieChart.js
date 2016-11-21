function drawPieChart() {
	var width = 1000;
	var height = 500;
	var data = [1, 1, 2, 2, 1, 2, 1];
	var colors = ['steelblue', 'lightsteelblue', 'darkorange', 'burlywood', 'green', 'lightgreen', 'red'];
	var radius = Math.min(width, height) / 2;

	var svg = d3.select('body').append('svg')
		.attr('width', width)
		.attr('height', height);

	var arc = d3.arc()
		.outerRadius(radius)
		.innerRadius(0);

	var pie = d3.pie()
		.sort(null)
		.value(function(d) { return d; });

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
