const mongoose = require ("mongoose");
const Schema = mongoose.Schema;

const albumSchema = new Schema ({
    name: { 
        type: String, 
        required: true 
    },

    front: { 
        type: String, 
        required: true
    },

    back:  { 
        type: String, 
        required: true
    },
    
    details:  { 
        type: String, 
        required: true
    },

    clicked: {
        type: Boolean,
        default: false
    },
    
    date: {
        type: Date,
        default: Date.now
    }
});

const Albums = mongoose.model("Albums", albumSchema)

module.exports = Albums