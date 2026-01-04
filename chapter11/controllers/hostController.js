const Home = require("../models/home");

const getaddHome = (req, res, next) => {
  res.render("host/addhome", {
    pageTitle: "Add Home",
    currentPage: "add-home",
  });
};

const postaddHome = (req, res, next) => {
  console.log("Home added successfully for:", req.body.homeName);

  const { homeName, homeLocation, homePrice, Rating, PhotoUrl } = req.body;
  const home = new Home(homeName, homeLocation, homePrice, Rating, PhotoUrl);
  home.save();

  res.render("host/homeAdded", {
    pageTitle: "Successful",
    currentPage: "HomeAdded",
  });
};
const gethosthome = (req, res, next) => {
  Home.fetchAll((registerHome) => {
    res.render("host/host-home-list", {
      registerHome: registerHome,
      pageTitle: "Host Homes List",
      currentPage: "HostHomes",
    });
  });
};
module.exports = {
  getaddHome,
  postaddHome,
  gethosthome,
};
