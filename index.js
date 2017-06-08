var express = require('express')

var app = express();

app.get("/", function(req, res) {
	//res.writeHead(200, {"Content-Type": "text/html"});
	res.sendFile(__dirname + "/home.html");
}); 

app.get("/:id", function(req, res) {
	//res.writeHead(200, {"Content-Type": "text/json"});
	var id = (/^\d+$/.test(req.params.id))? Math.floor(parseInt(req.params.id)*1000) : req.params.id; 
	var d = new Date(id);
	if (!isNaN(d.getTime())) {
		res.json({"unixtime": Math.floor(Date.parse(d)/1000), "natural": d.toDateString()});	
	} else {
		res.json({"unixtime": null, "natural": null});
	}

});

app.listen(8080);
console.log("server listening on port 8080..");
