const express = require('express');
const app = express();
// const mongoose = require('mongoose');
const studentRoutes = require('./routes/students');
// const uri =  "mongodb://root:MjQ1MDYtbGF2YW55@localhost:27017";
const port = process.env.PORT || 3000;

// mongoose.connect(uri,{'dbName':'employeeDB'});
// mongoose.connect(process.env.MONGODB_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
//   })
//     .then(() => console.log('MongoDB connected'))
//     .catch(err => console.error('MongoDB connection error:', err));
  
// Student.find().then((data)=>{
//             console.log(data);
//             mongoose.connection.close()
//         })
app.use(express.json());
app.use('/students', studentRoutes);

const { readFile } = require('fs').promises;

app.get('/', async (request, response) => {
    response.send( await readFile('index.html', 'utf8') );
    
});

app.listen(port, () => console.log('App available on http://localhost:${port}'));
