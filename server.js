const express = require ("express");
const app = express();
const bodyParser = require ("body-parser");
const mongoose= require("mongoose");
const PORT = process.env.PORT || 3001;
const routes = require ("./routes/routes");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//if(process.env.NODE_ENV=== "production"){
app.use(express.static("client/build"))
//}

app.use(routes);

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/djalbums"
)

app.listen(PORT, function(){
    console.log("Server is listening on PORT: " + PORT)
});