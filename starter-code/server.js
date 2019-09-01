// Require Express
const express = require('express');
const hbs = require("hbs"); // require("dotenv").config();
const app = express(); // Express server handling requests and responses
const port = process.env.PORT || 9999;

app.use(express.static(__dirname + "/public")); // Make everything inside of /public available
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");
// '__dirname' refers to the folder in which our app.js is located
// 'app' is our express server

app.get("/", (req, res) => res.redirect("/home"));
// 'get' is the HTTP Verb needed to access this page
// 'nodemon' help us reload our application automatically every time we save a change in our JavaScript.

app.get("/home", (req, res) => {
  let data = {
    title: "home",
    scripts: ["dom-handler.js"],
    imgLinks: [
      {
        label: "go to cookies",
        src: "/img/cookies.jpg",
        href: "/contact",
        alt: "cookies"
      }
    ],
  };
  res.render("home", data);
});

app.get("/about", (req, res) => {
  let data = {
    title: "about",
    scripts: ["dom-handler.js", "about-handler.js"]
  };
  res.render("about", data);
});

app.get("/recipes", (req, res) => {
  let data = {
    title: "recipes"
  };
  res.render("recipes", data);
});

app.get("/salty", (req, res) => {
  let data = {
    title: "salty"
  };
  res.render("salty", data);
});

app.get("/sugary", (req, res) => {
  let data = {
    title: "sugary"
  };
  res.render("sugary", data);
});

// Server Started
const listener = app.listen(port, () => {
  console.log(`server started http://localhost:${listener.address().port} `);
});
