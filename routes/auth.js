const UserControllers = require("../controllers/userControllers")


module.exports = function(app)  {
    app.post("/auth/google-auth", async (req, res)=> {
     const data=  await UserControllers.handleGoogle(req ,res);
     res.json(data)
    })
}
    
