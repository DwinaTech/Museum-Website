const express = require("express");
const handlebars = require("express-handlebars");

const app = express();

// Then these two lines after you initialise your express app 
app.engine('handlebars', handlebars({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
// i.e /my-cv will server /my-cv.html
app.use(express.static("public", { 'extensions': ['html'] }));

app.get("/", function (req, res) {
    res.render("index");
})

app.get("/index.html", function (req, res) {
    res.render("index");
})

app.listen(process.env.PORT || 3000, function () {
    console.log("Now the server is up to running");
});