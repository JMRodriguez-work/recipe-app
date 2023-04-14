import express from 'express'
import cors from 'cors' // allows to set rules between the comunication of front and back
import mongoose from 'mongoose'
import { dbPassword, port } from './config.js'
import { userRouter } from './routes/users.js'

const app = express()

app.use(express.json())
app.use(cors())

// authentication
app.use('/auth', userRouter)

// Connecting to the DB -> colocar el nombre de la DB detras de luego de .net/
mongoose.connect(`mongodb+srv://jmartinrodriguezwork:${dbPassword}@recipes.zeh7ja2.mongodb.net/recipes?retryWrites=true&w=majority`)

app.listen(port, () => {
  console.log('Testing')
})
