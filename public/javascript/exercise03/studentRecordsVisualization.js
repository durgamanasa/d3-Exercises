var studentRecords = [
	{name: 'ramesh', subject: 'maths', score: 87},
	{name: 'suresh', subject: 'maths', score: 45},
	{name: 'pokemon', subject: 'english', score: 65},
	{name: 'mary', subject: 'kannada', score: 44},
	{name: 'riya', subject: 'science', score: 72},
	{name: 'katie', subject: 'social studies', score: 82},
	{name: 'katie', subject: 'maths', score: 98},
	{name: 'ramesh', subject: 'bengali', score: 25},
	{name: 'suresh', subject: 'science', score: 55},
	{name: 'riya', subject: 'tamil', score: 75},
	{name: 'pokemon', subject: 'sports', score: 95},
	{name: 'pokemon', subject: 'social studies', score: 32}
];

function sortByName() {
	d3.select('.records').selectAll('div').sort(function(a, b) {
		return d3.ascending(a.name, b.name);
	});
}

function sortBySubject() {
	d3.select('.records').selectAll('div').sort(function(a, b) {
		return d3.ascending(a.subject, b.subject);
	});
}

function sortByScore() {
	d3.select('.records').selectAll('div').sort(function(a, b) {
		return d3.ascending(a.score, b.score);
	});
}

function getUniqueSubjects() {
	var subjects = [];
	for(var i = 0; i < studentRecords.length; i++) {
		subjects[i] = studentRecords[i].subject;
	}
	return subjects.filter(function(each, i) {
		return subjects.indexOf(each) == i;
	});
}

function renderStudentRecords() {
	var records = d3.select('.records')
		.selectAll('div')
		.data(studentRecords);

	var colors = ['steelblue', 'steelblue', 'orange', 'green', 'red', 'darkviolet', 'steelblue', 'brown', 'red', 'hotpink', 'gray', 'darkviolet']

	records.enter().append('div')
		.text(function(d) { return d.name + ' ' + d.score; })
		.style('width', function(d) { return (d.score * 5) + 'px' })
		.style('background-color', function(d, i) {return colors[i]});

	var filter = d3.select('.filter');

	filter.text('Sort by: ');

	filter.append('input')
		.attr('type', 'button')
		.attr('value', 'Name')
		.on('click', sortByName);

	filter.append('input')
		.attr('type', 'button')
		.attr('value', 'Subject')
		.on('click', sortBySubject);

	filter.append('input')
		.attr('type', 'button')
		.attr('value', 'Score')
		.on('click', sortByScore);

	var subjects = d3.select('.subjects');

	subjects.text('Subjects: ');

	var colorsForSubjects = ['steelblue', 'orange', 'green', 'red', 'darkviolet', 'brown', 'hotpink', 'gray'];
	subjects.selectAll('input')
		.data(getUniqueSubjects())
		.enter().append('input')
		.attr('value', function(d) { return d})
		.attr('type', 'button')
		.style('background-color', function(d, i) {return colorsForSubjects[i]});
}

window.onload = renderStudentRecords;