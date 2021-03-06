var itc 	= require("../"),
	Report  = itc.Report;

// Connect to iTunes
var itunesconnect = new itc.Connect('apple@id.com', 'password');

// More complex query
var query = Report('ranked', {
	limit 	: 100,
	filters : {
		type: [
			itc.type.inapp,
			itc.type.app
		],
		category: [6001,6002,6003]
	},
	group: 'content',
	measures: [itc.measure.units, itc.measure.proceeds]
}).time(2, 'days').category(6004).category([6005, 6006]);

itunesconnect.request(query, function(error, result, query) {
	console.log(query);
});