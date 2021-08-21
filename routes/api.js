const { testControllers } = require("../controllers");

module.exports = function (app) {
  app.get("/api", (req, res) => {
    res.send({ message: "Express says hey" });
  });

    app.get("/api/goose", (req, res)=> {
        testControllers.findAllTests(req, res)
    })

  app.post("/api/goose", async (req, res) => {
    console.log("1", req.body);
   
    const response = await testControllers.createTest(req.body);
    console.log("2", response);
    res.json(response);
  });
};
