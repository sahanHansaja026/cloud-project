const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    full_name:{
        type:String,
        require:true
    },
    date:{
        type:String,
        require:true
    },
    time:{
        type:String,
        require:true
    },
    occasion:{
        type:String,
        require:true
    },
    number_of_dinner:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    phone:{
        type:String,
        require:true
    },
    requests:{
        type:String,
        require:true
    },
});

module.exports = mongoose.model('reservation',postSchema);