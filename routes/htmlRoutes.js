const db = require("../models");
const isAuthenticated = require("../config/middleware/isAuthenticated");
module.exports = app => {
  // Load signup page
  app.get("/", (req, res) => res.render("users/home"));

  // Load login page
  app.get("/login", (req, res) => res.render("users/login"));

  // Load login page
  app.get("/signup", (req, res) => res.render("users/signup"));

  // Load profile page
  app.get("/profile", (req, res) => {
    res.render("users/profile");
  });
  // app.get("/profile", isAuthenticated, (req, res) => {
  //   db.User.findOne({
  //     where: {
  //       id: req.user.id
  //     },
  //     include: [db.Example]
  //   }).then(dbUser => {
  //     res.render("users/profile", { user: dbUser });
  //   });
  // });

  // Load example page and pass in an example by id
  app.get("/example/:id", isAuthenticated, (req, res) => {
    db.Example.findOne({ where: { id: req.params.id } }).then(dbExample => {
      res.render("example", {
        example: dbExample
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", (req, res) => res.render("404"));
};
