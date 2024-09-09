// client for any of the website

var needle = require("needle");

// needle.get("https://www.google.com", function (error, response) {
//   if (!error && response.statusCode == 200) {
//     console.log(response.body);
//   } else {
//     console.error(error);
//   }
// });


needle.get("http://127.0.0.1:5500/Day%20II/02Demo_ThirdParty_Modules/just.html", function (error, response) {
    if (!error && response.statusCode == 200) {
      console.log(response.body);
    } else {
      console.error(error);
    }
  });