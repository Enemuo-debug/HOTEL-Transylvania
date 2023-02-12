const Room = require(`./Rooms`)
const Room_Functions = {
    veiwAllRooms(){
        return Room.find({}, '__v')
    },
    createRoom(room){
        return Room.create(room)
    },
    findRoomByID(id){
        return Room.findOne({ _id: id })
    },
    editRoomById(id, data){
        return Room.findOneAndUpdate({ _id: id }, data)
    },
    deleteRoomByID(id){
        return Room.findOneAndDelete({ _id: id })
    }
}
module.exports = Room_Functions