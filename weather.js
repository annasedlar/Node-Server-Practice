var http = require('http');
var apikey = 'e312dbeb8840e51f92334498a261ca1d';  //rob's key
var weatherUrl = "http://api.openweathermap.org/data/2.5/weather?q=Atlanta&units=imperial&APPID="+apikey;

var request = http.get(weatherUrl, (theResponse)=>{
	console.log(theResponse.statusCode);
});