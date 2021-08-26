const UserControllers = require("../controllers/userControllers")


module.exports = function(app)  {
    app.post("/auth/google-auth", async (req, res)=> {
     const data=  await UserControllers.handleGoogle(req ,res);
     res.json(data)
    })

    app.post("/auth/login", async (req, res) => {
        try {
            await UserControllers.login(req, res)
        } catch (error) {
            console.log(error);
        }
    })

    app.post("/auth/signup", async (req, res) => {
        try {
          await UserControllers.signup(req, res);
        } catch (error) {
          console.log(error);
        }
      });
}
    
