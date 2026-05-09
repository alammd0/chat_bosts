import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required : [true, "Name is required"]
    },

    email : {
        type : String,
        unique : true,
        required : [true, "Email is required"]
    },

    username : {
        type : String,
        unique : true,
        required : [true, "Username is required"]
    },

    password : {
        type : String,
        required : [true, "Password is required"],
        min : [8, "Password must be at least 8 characters"],
        max : [20, "Password must be at most 20 characters"]
    },

    ai_chats : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Chat'
    }],

    profile : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Profile'
    }
});

const User = mongoose.model('User', userSchema);
export default User;