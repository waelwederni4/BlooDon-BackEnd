const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();



exports.tx5driver = require("./controllers/DriverController");
exports.tx5order = require("./controllers/OrderController");