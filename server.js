var express = require("express");
var webpack = require("webpack");
var config = require("./webpack.config.js");

var app = express();
var compiler = webpack(config);

app.use(require("webpack-dev-middleware")(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require("webpack-hot-middleware")(compiler));

app.use(express.static(__dirname + "/dist"));
app.get("*", function(req, res) {
  res.sendFile(__dirname + "/dist/index.html");
});

var server = app.listen(8080, "localhost", function(err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log("Listening at http://localhost:%d", server.address().port);
});
