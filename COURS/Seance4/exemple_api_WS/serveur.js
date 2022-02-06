var express = require("express");
var app = express();

app.use(express.static("public")); // ICI IMPORTANT !

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/public/index.html");
});

app.get("/hiscores", function (req, res) {
    res.send("Hi Scores :");

});

app.post("/hiscores", function (req, res) {
    res.send("Hi Score ajouté !!!!");
});

var server = app.listen(8085, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log("Serveur écoute sur http://%s:%s", host, port);
});
