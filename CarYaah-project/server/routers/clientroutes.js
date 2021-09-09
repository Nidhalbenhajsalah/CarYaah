var clientRouter = require("express").Router();
var clientcontroller = require("../controllers/clientcontrollers");
var verifyToken = require("../middleware/index");

clientRouter.route("/signup").post(clientcontroller.createClient);
clientRouter.route("/signin").post(clientcontroller.loginClient);
clientRouter.route("/pay").post(clientcontroller.payClient);
clientRouter.route("/retrieve").get(clientcontroller.retrievAllUsers);
clientRouter.route("/fav").get(verifyToken.authClient,clientcontroller.retrieveFavorites);
clientRouter.route("/bookings").get(verifyToken.authClient,clientcontroller.retrieBookings);

module.exports = clientRouter;
