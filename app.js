// Require and call Express
const express = require('express');
const app = express();
const port = process.env.PORT || 8080

app.set('view engine', 'ejs');

// Use CSS
app.use(express.static("public"));

// Get website files
app.get("/", function (req, res) {
  res.status(200).render("index", );
});

app.listen(port, function() {
  console.log('Testing app listening on port ${port}')
});
