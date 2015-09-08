var route = function(router) {
  router.get("/", function(request, response) {
    response.send("Hello world!");
  });
};

module.exports = route;
