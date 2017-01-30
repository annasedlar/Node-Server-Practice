var http = require('http'); 
var fs = require("fs"); 

function renderHomePage(req, res){
	res.writeHead(200,{'content-type':'text/html'});
	var wikiHomeHTML = fs.readFileSync('wikiHome.html');
	res.end(wikiHomeHTML);
};

function renderCatsPage(req, res){
	res.writeHead(200,{'content-type': 'text/html'});
	var catHTML = fs.readFileSync('catsHome.html');
	res.end(catHTML);
};

function addCss(req, res){
	res.writeHead(200, {'content-type':'text/css'});
	var cssStuff = fs.readFileSync('styles.css');
	res.end(cssStuff);
};

function addJS(req, res){
	res.writeHead(200, {'content-type': 'text/.js'});
	var jsStuff = fs.readFileSync('snow.js');
	res.end(jsStuff);
};


var server = http.createServer((req, res)=>{
	// console.log(req);
	if(req.url === '/'){
		renderHomePage(req, res);
	}else if(req.url === '/styles.css'){
		addCss(req, res);
	}else if(req.url === '/snow.js'){
		addJS(req, res); 
	}else if(req.url ==='/pikachu.png'){
		// the request is for the image. serve er up!
		var img = fs.readFileSync('pikachu.png');
		res.writeHead(200,{'content-type':'image/png'});
		res.end(img, 'binary');
	}else if(req.url ==='/cat'){
		renderCatsPage(req, res);
	}else if(req.url === '/kitty.jpeg'){
		var kitty = fs.readFileSync('kitty.jpeg');
		res.writeHead(200,{'content-type':'image/jpeg'});
		res.end(kitty, 'binary');
	}else if(req.url ==='/dog'){
		res.writeHead(200, {'content-type':'text/html'})
		res.write('<h1>This is the dog page</h1>');
		res.end();
	}else if(req.url ==='/monkey'){
		res.writeHead(200, {'content-type':'text/html'})
		res.write('<h1>This is the monkey page</h1>');
		res.end();
	}else if(req.url ==='/fish'){
		res.writeHead(200, {'content-type':'text/html'})
		res.write('<h1>This is the fish page</h1>');
		res.end();
	}else if(req.url ==='/bird'){
		res.writeHead(200, {'content-type':'text/html'})
		res.write('<h1>This is the bird page</h1>');
		res.end();
	}else if(req.url ==='/admin'){
		res.writeHead(403, {'content-type': 'text/html'});
		res.write('<h1>PERMISSION DENIED.</h1>');
		res.write('<p>This resources is off-limits. Always. Nerrrrrd.</p>');
		res.end();
	}else if(req.url ==='/extra'){
		res.writeHead(400, {'content-type': 'text/html'});
		res.write('<h1>This is an api path. You are missing an api key to access this resource</h1>');
		res.end();
	}else{
		res.writeHead(404,{'content-type':'text/html'})
		res.end("<h1>Sorry bro, there's nothing hurr</h1>");
	}

// Make a basic wikipedia page(s) that handles:
// 200 (serve up the page)
// 404 (make a custom page... search the web for this)
// 403 (make a path that is always off-limits)
// 400 (a api path. Alert the user they are missing an api key)
// Serve up CSS (research mime type if neccessary)

// Serve a JS file
//  Write a JavaScript program to compute the union of two arrays.
// console.log(union([1, 2, 3], [100, 2, 1, 10]));
// [1, 2, 3, 10, 100]

// Put the weather data in a web page for the browser to view.
// Optionally update the query string based on what they put in the query (this will take some work!)

















})

server.listen(8002); 
console.log("Server is listening for HTTP traffic at port 8002...");


		// res.writeHead(200,{'content-type':'text/html'})
		// //someone came to our home page - give them the homepage content
		// res.write('<h1>This is the homepage</h1>');
		// res.write('<p>I\'m very proud of my node routing ability.</p>');
		// res.write('<p> I made a page in node!</p>');
		// res.end();