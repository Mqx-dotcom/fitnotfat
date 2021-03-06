// lib and imports
const express = require("express");
const app = express();

const user = require("./controllers/controller")

// app setup
app.use(express.json())
app.use("/static", express.static("public"));
app.set("view engine", "ejs");


// pages
app.get('/',(req, res) => {
  res.render('home.ejs');
});

app.post('/api/adduser', (req, res) => {
  user.adduser(req.body)
})

// Create here your api setup


// zz

app.listen(3000, () => console.log("Server Up and running"));
