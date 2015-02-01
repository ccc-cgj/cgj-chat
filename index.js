var app = require("express")();
var http = require("http").Server(app);

app.get("/", function(req, res) {
	res.sendFile(__dirname + "/hidden.html");
});

app.listen(3000);

http.listen(3000, function() {
	console.log("listening on *:3000");
})