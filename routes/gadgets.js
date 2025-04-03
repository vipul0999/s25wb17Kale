var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {  // ✅ Matches '/gadgets' in app.js
  const results = [
    { name: "Smartwatch", brand: "TechGear", price: 199 },
    { name: "VR Headset", brand: "VisionX", price: 299 },
    { name: "Drone", brand: "SkyFly", price: 499 }
  ];

  console.log("Debug: Sending results to Pug:", results); // ✅ Debugging

  res.render('gadgets', { results });
});

module.exports = router; // ✅ Export the router
