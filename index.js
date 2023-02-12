const exp = require('express')
const DB = require('./database')
const { MESSAGES } = require(`./constants`)
const control = require('./controllers')

// const { application } = require('express')
const app = exp()
app.listen(3000)
app.use(exp.json())
DB()
app.get('/', (req, res)=>{
    res.setHeader('Content-type', 'text/JSON')
    res.send({ message: MESSAGES.SUCCESS_MESSAGE, success: true } )
})
app.get('/api/v1/rooms', async (req, res)=>{
    try{
        res.status(200)
        const users = await control.veiwAllRooms()
        res.send({ message: MESSAGES.FETCHED, success: true, data: users })
    }
    catch (err) {
        res.status(500)
            .send({ message: MESSAGES.ERROR_MESSAGE, success: false })
    }
})
app.post(`/api/v1/rooms`, async (req, res)=>{
    try{
        const data = control.createRoom(req.body)
        res.status(201).send({ message: MESSAGES.CREATE, success: true, data })
    }
    catch(err){
        res.status(500).send({
            message: MESSAGES.ERROR_MESSAGE, success: false
        })
    }
})
app.get('/api/v1/rooms/:id', async (req, res) => {
    try{
        const { id } = req.params
        const data = await control.findRoomByID(id)
        res.status(200).send({ message: MESSAGES.FETCHED, success: true, data })
    }
    catch (err) {
        res.status(500)
            .send({ message: MESSAGES.ERROR_MESSAGE, success: false })
    }
})
app.patch('/api/v1/rooms/:id', async (req, res)=>{
    try{
        const { id } = req.params
        const body = req.body
        const data = await control.editRoomById(id, body)
        res.status(200)
            .send({
                message: MESSAGES.UPDATE, success: true, data
            })
    }
    catch (err) {
        res.status(500).send({ message: MESSAGES.ERROR_MESSAGE, success: false })
    }
})
app.delete('/api/v1/rooms/:id', async (req, res)=>{
    try{
        const { id } = req.params
        const data = await control.deleteRoomByID(id)
        res.status(200)
            .send({ message: MESSAGES.DELETE, success: true, data })
    }
    catch (err) {
        res.status(500)
            .send({ message: MESSAGES.ERROR_MESSAGE, success: false })
    }
})