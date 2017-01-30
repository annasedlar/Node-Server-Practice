//incude http module. it's part of core modules so no npm install needed
var http = require('http');

function renderHomePage(req, res){
		res.writeHead(200,{'content-type':'text/html'})
		//someone came to our home page - give them the homepage content
		res.write('<h1>This is the homepage</h1>');
		res.write('<p>I\'m very proud of my node wrouting ability.</p>');
		res.write('<p> I made a page in node!</p>');
		res.end();
}

//set up an http server and store it in the server var
//the callback will run anytime someone hits the port the server is listening to
var server = http.createServer((req, res)=>{
	// This function is run evertyime someone makes an http request to this server
	console.log("Someone connected to our server");
	//the URL requested is in the req object, url property
	console.log(req.url); 

	//if the user requested the home (/) url, then do this code
	if(req.url === '/'){

		// cut and put in a function caled render homepage (below)
		renderHomePage(req, res);
		// res.writeHead(200,{'content-type':'text/html'})
		// //someone came to our home page - give them the homepage content
		// res.write('<h1>This is the homepage</h1>');
		// res.write('<p>I\'m very proud of my node wrouting ability.</p>');
		// res.write('<p> I made a page in node!</p>');
		// res.end();
	}else{
		res.writeHead(404,{'content-type':'text/html'})
		res.end("Sorry, this page does not exist");
	}



	//res.end will close the connection so the browser knows we are done
	// res.end("Sanity Check"); 
});

// tell the server we created to listen to port 8001
//whenever anyone makes an http request to this computer at port 8001, the callback will fire
server.listen(8001);
console.log("Server is listening for HTTP traffic at port 8001...");
