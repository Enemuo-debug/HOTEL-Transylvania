const {model, Schema} = require('mongoose')
const constants = require('./constants')
const RoomSchema = new Schema(
    {
        Name: {
            type: String,
            required: true,
        },
        Type: {
            type: String,
            required: true,
            enum: [constants.ROOM_TYPES.TYPE1, constants.ROOM_TYPES.TYPE2, constants.ROOM_TYPES.TYPE3]
        }
    }
)
const Room = model('Room', RoomSchema)
module.exports = Room