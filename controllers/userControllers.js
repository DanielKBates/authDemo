const db = require("../models")

module.exports = {
    handleGoogle: async function(req, res) {
        try {
            const { email, googleId: id, familyName: lastName, givenName: firstName } = req.body.result
            const existing = await db.User.findOne({ id })

            if(existing) return existing;

            else{
                const newlyCreatedUser = await db.User.create({email, id, lastName, firstName})
                console.log(newlyCreatedUser)
            }
        } catch (error) {
            console.log(error)
        }
    }
}