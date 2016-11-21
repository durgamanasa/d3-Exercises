function renderChart() {
	var arc = d3.arc()
		.outerRadius(radius)
		.innerRadius(radius / 2);

	var pie = d3.pie()
		.sort(null)
		.value(function(d) { return d; });

	drawPieChart(arc, pie)
}
window.onload = renderChart;
