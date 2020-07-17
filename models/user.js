const mongoose = require('mongoose');
//Create the user schema
const UserSchema = new mongoose.Schema({
    username: {
        type: String
    },
    password: {
        type: String
    }
});
//export data
const Users = mongoose.model("User", UserSchema);
module.exports = Users;
