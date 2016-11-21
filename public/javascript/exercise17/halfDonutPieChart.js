function renderChart() {
	var pi = Math.PI;
	var arc = d3.arc()
		.outerRadius(radius)
		.innerRadius(radius / 2);

	var pie = d3.pie()
		.sort(null)
		.value(function(d) { return d; })
		.startAngle(0 * (pi / 180))
		.endAngle(180 * (pi / 180));

	drawPieChart(arc, pie);
}
window.onload = renderChart;
