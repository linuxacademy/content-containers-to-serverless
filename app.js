// Require and call Express
const express = require('express');
const app = express();

app.set('view engine', 'ejs');

// Use CSS
app.use(express.static("public"));

// Get website files
app.get("/", function (req, res) {
  res.status(200).render("index", );
});

app.listen(8080, function() {
  console.log('Testing app listening on port 8080')
});
