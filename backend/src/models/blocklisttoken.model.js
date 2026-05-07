import mongoose from 'mongoose';

const blocklistTokenSchema = new mongoose.Schema({
    token : {
        type : String,
        unique : true,
        required : [true, "Token is required"]
    }
}, {
    timestamps : true
});

const BlocklistToken = mongoose.model('BlocklistToken', blocklistTokenSchema);
export default BlocklistToken;