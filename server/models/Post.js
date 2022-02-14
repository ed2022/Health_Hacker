const { model, Schema } = require('mongoose');

const postSchema = new Schema({
    body: String,
    username: String,
    // could add a default here, but prefer to do it on the GQL resolvers
    createdAt: String,
    comments: [
        {
            body: String,
            username: String,
            createdAt: String,
        },
    ],
    likes: [
        {
            username: String,
            createdAt: String,
        },
    ],

    user: {
        type: Schema.Types.ObjectId,
        ref: 'users',
    },
});

module.exports = model('Post', postSchema);