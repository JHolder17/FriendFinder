var friends = require("../data/friends");

module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });
    app.post("/api/friends", function (req, res) {
        // code to match friends
        friends.push(req.body);

        //math logic for the best match of a friend
    });
};
