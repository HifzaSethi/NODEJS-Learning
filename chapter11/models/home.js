const fs = require("fs");
const path = require("path");
const rootDir = require("../utils/PathUtils");

module.exports = class Home {
  constructor(homeName, homeLocation, homePrice, Rating, PhotoUrl) {
    this.homeName = homeName;
    this.homeLocation = homeLocation;
    this.homePrice = homePrice;
    this.Rating = Rating;
    this.PhotoUrl = PhotoUrl;
  }
  save() {
    Home.fetchAll((registerHome) => {
      registerHome.push(this); //pushing the current object to the array
      const datapath = path.join(rootDir, "data", "homes.json");
      fs.writeFile(datapath, JSON.stringify(registerHome), (err) => {
        console.log(err);
      });
    });
  }
  static fetchAll(callback) {
    const datapath = path.join(rootDir, "data", "homes.json");
    fs.readFile(datapath, (err, fileContent) => {
      console.log("file read", err, fileContent);
      callback(!err ? JSON.parse(fileContent) : []);
      //we use callbacl to get the data asynchronously (after sometime
    });
    //not necessary to create an instance(object) to call this method directly call by class
  }
};
