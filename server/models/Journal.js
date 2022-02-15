const { model, Schema } = require('mongoose');

const journalSchema = new Schema({
    image: {
        type: String,
    },
    username: String,

    createdAt: String,
    bio: {
        type: String,
        required: true,
    },
    userStats: [
        {
            type: String,
            createdAt: String,
        },
    ],
    badges: [
        {
            image: String,
            createdAt: String,
        },
    ],
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users',
    },
});

module.exports = model('Post', journalSchema);