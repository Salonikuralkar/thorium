const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');

//const { default: mongoose } = require('mongoose');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use((req,res,next) => {
    console.log("Welcome to Middleware, this is global middleware.")
    next();
})
// mongoose.connect("mongodb+srv://SaloniKuralkar:Saloni%4030@cluster0.ui8kc.mongodb.net/Saloni_Kuralkar-DB?retryWrites=true&w=majority", {
//     useNewUrlParser: true
// })
    // .then(() => console.log("MongoDb is connected"))
    // .catch(err => console.log(err))
app.use('/', route);


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
