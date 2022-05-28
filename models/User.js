const {Schema, model} = require('mongoose');

const schema = new Schema({
    email: {type: String, require: true, unique: true},
    password: {type: String, require: true},
    admin: {type: Boolean, require: false}
});

module.exports = model('User', schema)