// ****************************************
// first code from 11-express 04-Stu 
// ****************************************

// libraries from node_module used
const express = require('express');
const path = require('path');
// ?fs
const fs = require('fs');
const notesData = require('./db/db.json'); 

// Initialize PORT and app variable
const PORT = 3001;
const app = express();
app.use(express.static('public'));


// this is a route handler for / but express static looks for index.html in public by default
// app.get('/', (req, res) => res.send('Visit https://localhost:3001/api'));

// TODO: Create a route for a GET request that will return the content of our `terms.json` file
// send route
// THIS IS THE ROUTE HANDLER
// THIS IS THE API END POINT
app.get('/api', (req, res) => {
  res.json(notesData)
});

app.get('/api/notes', (req, res) => {
  console.log("__dirname is " + __dirname);
  console.log("file path is " + path.join(__dirname, 'public/notes.html'))
  res.sendFile(path.join(__dirname, 'public/notes.html'))
});



// HERE WITH THIS API WE RETURN THE PLAIN FILE NOT AS JSON

// done at line 4
// const path = require('path');

// get pathfile = 'get path and file'
app.get('/pathfile', (req, res) => {
  console.log("__dirname is " + __dirname);
  console.log("file path is " + path.join(__dirname, 'terms.txt'))
  res.sendFile(path.join(__dirname, 'terms.txt'))
});

// HERE WITH THIS API WE RETURN THE PLAIN FILE NOT AS JSON
// const path = require('path');
// get pathfile_no_extension = 'get path and file THAT HAS NO EXTENSION'
app.get('/pathfile_no_extension', (req, res) => {
  console.log("__dirname is " + __dirname);
  console.log("file path is " + path.join(__dirname, 'terms'))
  res.sendFile(path.join(__dirname, 'terms'))
});




// Fallback route for when a user attempts to visit routes that don't exist
// ALWAYS PUT THIS WILDCARD SAFETY NET AT THE END OR NOTHING ELSE WILL EXECUTE!
// source: 05-Ins_Query-Params
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/index.html'));
});


app.listen(PORT, () =>
  console.log(`Note Taker app listening at http://localhost:${PORT}`)
);
