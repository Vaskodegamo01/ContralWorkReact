const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const SALT_WORK_FACTOR = 5;
const nanoid = require("nanoid");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    displayname: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    token: String,
    role: {
        type: String,
        require: true,
        default: 'user',
        enum: ['user', 'admin']
    }
});

UserSchema.pre('save', async function (next) {
    if(!this.isModified('password')) return next();

    const salt = await bcrypt.genSalt(SALT_WORK_FACTOR);
    const hash = await bcrypt.hash(this.password, salt);

    this.password = hash;
    next();
});


UserSchema.methods.checkPassword = function (password) {
    return bcrypt.compare(password, this.password)
};

UserSchema.methods.generateToken = function () {
    this.token = nanoid(9);
};

const User = mongoose.model('User', UserSchema);
module.exports = User;
