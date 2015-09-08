var express = require("express");
var app = express();

var router = require("./controllers/router")(express.Router());

app.use("/", router);

app.use(function(request, response) {
  response.render("template", {
    "title": "404",
    "url": request.url
  });
});
