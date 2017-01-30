//we are manually handling http traffic. We ARE the server. 
//we write the headers, we determine what we send back 
//we can tell the browser how to interpret our response (ie. 'content-type:'text/html'). 



//native node.js method - works exactly like the (export?) method
var http = require("http"); 
// console.log(http);

//request and response
var server = http.createServer((req, res)=>{
	//console.log(req)returns nothing. need to tell it to listen to this server (which is running at port 8000)
	// console.log(req.rawHeaders[1]); 

	//takes 1. status code, 2. data type object
	//mime types - ways for browser to intrepret data text types (html/plain/img/png/jpg/etc...)
	res.writeHead(418, {'content-type':'text/html'});


	//below is the response from our server. res.end means, "im done, here;s your message" 
	res.end("<h1>Hello, dude. This is YOUR node server.</h1>");
})


var port = 8000;
console.log("Server listening on port "+port+" for connections..."); 
//tells the server to listen to a specific port 
server.listen(port);

//use a browser to go to localhost:8000 ---which issues a (http) request.
//Use ctrl-C to kill your server, restart it



// what is curl???
//command line tool for getting/sending files using url syntax