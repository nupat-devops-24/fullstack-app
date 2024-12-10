const express = require('express');
const app = express();
// const mongoose = require('mongoose');
// const Student = require('./student');
// const uri =  "mongodb://root:MjQ1MDYtbGF2YW55@localhost:27017";

// mongoose.connect(uri,{'dbName':'studentsDB'});

// Student.find().then((data)=>{
//             console.log(data);
//             mongoose.connection.close()
//         })
const { readFile } = require('fs').promises;

app.get('/', async (request, response) => {
    response.send( await readFile('index.html', 'utf8') );
    
});

// console.log("Hello")
// console.log("This is the output of our index.js file")

app.listen(process.env.PORT || 3000, () => console.log('App available on http://localhost:3000'));
