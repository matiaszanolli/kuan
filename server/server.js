var http = require("http");
var url = require("url");

function iniciar() {
	function onRequest(request, response) {
		var pathname = url.parse(request.url).pathname;
	    console.log("Petición para " + pathname + " recibida.");		
	    response.writeHead(200, {"Content-Type": "text/html"});
	    response.write("AAAAGAGAGAG");
	    response.end();
	}

	http.createServer(onRequest).listen(8888);
	console.log("Arrancando...");	
}

exports.iniciar = iniciar;