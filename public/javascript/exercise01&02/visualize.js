var data = [];

function generateRandomData() {
	if(data.length == 0) {
		for(var index = 0; index < 10; index++) {
			var randomNumber = Math.floor(Math.random() * 100);
			data.push(randomNumber);
		}
	} else {
		data.shift();
		data.push(Math.floor(Math.random() * 100))
	}
}

function drawChart() {
	generateRandomData();
	var color = d3.scaleLinear()
		.domain([0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100])
		.range(['darkblue', 'blue', 'dodgerblue', 'cornflowerblue', 'royalblue', 'mediumblue', 'lightskyblue', 'steelblue', 'skyblue', 'deepskyblue', 'powderblue']);

	console.log(data, "data");
	var divs = d3.select('body').select('.container')
		.selectAll('div')
		.data(data, function(d, i, a) {
			console.log(d);
			return a + i;
		});
	divs.enter().append('div')
		.text(function(d) { return d; })
		.style('width', function(d) { return (d * 8) + 'px' })
		.style('background-color', color);

	divs.exit().remove();
}
window.onload = setInterval(drawChart, 1000);