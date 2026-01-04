const Home = require("../models/home");

const gethome = (req, res, next) => {
  Home.fetchAll((registerHome) => {
    res.render("store/home-list", {
      registerHome: registerHome,
      pageTitle: "Homes List",
      currentPage: "Home",
    });
  });
};

const getbooking = (req, res, next) => {
  res.render("store/booking", {
    pageTitle: "Booking",
    currentPage: "booking",
  });
};

const getfvrtlist = (req, res, next) => {
  Home.fetchAll((registerHome) => {
    res.render("store/fvrt-list", {
      registerHome: registerHome,
      pageTitle: "Favourites",
      currentPage: "fvrt-list",
    });
  });
};

const getindex = (req, res, next) => {
  Home.fetchAll((registerHome) => {
    res.render("store/index", {
      registerHome: registerHome,
      pageTitle: "Airbnb Home",
      currentPage: "index",
    });
  });
};
const getreserved = (req, res, next) => {
  res.render("store/reserved", {
    pageTitle: "Reserved",
    currentPage: "reserved",
  });
};

module.exports = {
  gethome,
  getbooking,
  getfvrtlist,
  getindex,
  getreserved,
};
