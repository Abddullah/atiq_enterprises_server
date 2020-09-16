const port = process.env.PORT || 3002;

//import modules
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");

//middleware 
const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }))


//cluster connection 
// const mongoURI = "mongodb+srv://wattba:wattba786@cluster0-rq9xv.mongodb.net/test?retryWrites=true&w=majority"
const mongoURI = "mongodb+srv://atiqEnterprises:Abcd@123456@atiqenterprises.3bpgl.mongodb.net/AtiqEnterprises?retryWrites=true&w=majority"
mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    // autoIndex: false
});
const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    // we're connected!
    console.log('>>>>>>>>>======================== we re connected! to mongoose ========================>>>>>>>>>')
});


//route connect with main server file
app.use('/', require('./routs/index'))
app.listen(port, () => console.log(`Server is listening on port ${port}`))