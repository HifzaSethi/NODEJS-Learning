const Home = require("../models/home");

const getaddHome = (req, res, next) => {
  res.render("addhome", { pageTitle: "Add Home" });
};

const postaddHome = (req, res, next) => {
  console.log("Home added succesfully for :", req.body.homeName);
  const { homeName, homeLocation, homePrice, Rating, PhotoUrl } = req.body;
  const home = new Home(homeName, homeLocation, homePrice, Rating, PhotoUrl);
  home.save();
  res.render("homeAdded", { pageTitle: "Succesfull" });
};

const gethome = (req, res, next) => {
  Home.fetchAll((registerHome) => {
    res.render("home", {
      registerHome: registerHome,
      pageTitle: "Airbnb Home",
    });
  });
};

exports.gethome = gethome;
exports.postaddHome = postaddHome;
exports.getaddHome = getaddHome;
