//Express required to run app
const express = require("express");
const methodOverride = require("method-override");


const app = express();
const PORT = process.env.PORT || 3000;

const gBank = require("./models/gBank.js");

// Middleware:

app.use((req, res, next) => {
    console.log("I run for all routes!");
    next();
});

app.use(express.urlencoded({ extended:false }));

// Used to "change" the HTTP Verb of the Request
// POST /fruits/2?_method=DELETE
app.use(methodOverride('_method'));
app.use(express.static("public"));
// DELETE /fruits/2?_method=DELETE

// Routes go here - app.get, delete, post...

// INDEX
app.get('/', (req, res)=>{
    res.render("index.ejs", { allG: gBank });
});

// NEW
app.get('/graetful/new', (req, res) => {
    res.render("new.ejs");
});

// CREATE
app.post('/graetful', (req, res) => {
    
    gBank.push(req.body);
    res.redirect("/graetful");
}); 

// SHOW
app.get('/graetful/show', (req, res)=>{
    res.render("show.ejs", { allG: gBank });
});

// DELETE
// DELETE /fruits/2 --|
app.delete('/graetful/:indexOfFruitsArray', (req, res) => {
  gBank.splice(req.params.indexOfFruitsArray, 1);
  res.redirect('/graetful');
});

// EDIT (see a form to edit the data resource)
app.get('/graetful/:idx/edit', (req, res) => {
  res.render('edit.ejs', {
    allG: gBank[req.params.idx],
    index: req.params.idx
  });
});



// test







// test

// app.put('/fruits/:idx', (req, res) => {
// 	if(req.body.readyToEat === 'on') { //if checked, req.body.readyToEat is set to 'on'
// 		req.body.readyToEat = true;
// 	} else { //if not checked, req.body.readyToEat is undefined
// 		req.body.readyToEat = false;
// 	}
//   // req.body.readyToEat = (req.body.readyToEat === 'on');
//   fruits[req.params.idx] = req.body;
//   res.redirect('/fruits');
// });

// Express Web Server port - app.listen
app.listen(PORT, ()=>{
    console.log(`listening on port`, PORT)
});