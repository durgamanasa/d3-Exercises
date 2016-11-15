var data = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function visualizeBoxes() {
	var container = d3.select('body').select('.container');

	var widthScale = d3.scaleLinear()
		.domain([0, 10])
		.range([12, 120]);

	var heightScale = d3.scaleLinear()
		.domain([0, 10])
		.range([30, 180]);

	container.selectAll('div')
		.data(data).enter()
		.append('div')
		.text(function(d) {
			return d
		})
		.style('font', function(d) {
			return 'italic bold ' + widthScale(d) + 'px/' + heightScale(d) + 'px Georgia, serif'
		})
}
window.onload = visualizeBoxes;
