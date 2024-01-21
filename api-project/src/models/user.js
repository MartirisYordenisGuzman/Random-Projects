const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema ({
    name: {
        type: String,
        required: true, 
        trim: true,
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: [8, 'Minimo 8 caracteres!'],
        validate(value) {
            if(value.includes('123456789')) {
                throw new Error('Unsafe Password!');
            }
        }
    },
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if(validator.isEmail(value)) {
                throw new Error('Wrong Email!');
            }
        }

    },
    token: [{
        token: {
            type: String,
            required: true
        }
    }],
});

// Virtual property
userSchema.virtual('tasks', {
    ref:'Task',
    localField: '_id',
    foreignField: 'owner',
})

// middleware --> route --> create user --> pre --> save
userSchema.pre('save', async function(next) {
    const user = this;
    
    if(user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, 8)
    }

    // Realiza la operacion de salvado
    next()
})

const User = mongoose.model('User', userSchema);

module.exports = User;