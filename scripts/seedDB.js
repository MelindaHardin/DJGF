const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

//connect to the mongo DB
mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb: //localhost/djgfresh",
    {
        useMongoClient: true
    }
    );

const albumSeed = [
    {
        name: "Elemental Vibes",
        front: "images/evFront.jpg",
        back: "images/evBack.jpg",
        details: "Elemental Vibes Elemental Vibes Elemental Vibes",
        clicked: false
    }
];
db.Albums
.remove({})
.then(() => db.Albums.collection.insertMany(albumSeed))
.then(data => {
    console.log (data.insertedIds.length + "records inserted!");
    process.exit(0);
})
.catch(err =>{
    console.error(err);
    process.exit(1);
});