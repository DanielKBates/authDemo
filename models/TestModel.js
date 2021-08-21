const mongoose = require('mongoose');

const testSchema = mongoose.Schema({
    email: String,
    password: String,
    createdAt: {
        type: Date,
        default: new Date(),
    },
})

const TestModel = mongoose.model('TestModel', testSchema);

module.exports =  TestModel;