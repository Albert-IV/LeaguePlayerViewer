var req = require('request');

var url = "https://na.api.pvp.net";
var key = "?api_key=65cc0f83-0c2f-415b-99b3-5aafcd1ce6d8";

var charIdUrl = url + '/api/lol/na/v1.4/summoner/25173689' + key;
var matchUrl = url + '/api/lol/na/v1.3/stats/by-summoner/25173689/summary' + key;
var charNameUrl = url + '/api/lol/na/v1.4/summoner/by-name/' + encodeURIComponent('Ron McGiggles') + key;

req.get(matchUrl, function(e, responseObj, body) {
	if( e ) throw e;

	console.log(body);
});

