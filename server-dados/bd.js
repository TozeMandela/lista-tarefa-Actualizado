const mongoose = require('mongoose');

const list = new mongoose.Schema({
    _name : {
        type: String,
        require: true
    },
    _date : {
        type: Date,
        default: Date.now(),
        require: true
    },
    _descrition: {
        type: String,
        require: true
    }
});
mongoose.model('lista', list);
