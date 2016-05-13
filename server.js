
(function () {
	var express = require("express");
	var app = express();

	app.get("/", function(req, res){
		res.send("Hello there")

	})

	app.get("/kiki", function(req, res){
		res.send("Kiki eats pineapples")
	})

	app.listen("3000", function() {
		console.log("Server running on port 3000")
	})
})();

