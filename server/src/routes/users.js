// everything about log in and sign in
import express from 'express'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import { UserModel } from '../models/Users.js'
import { secretToken } from '../config.js'

const router = express.Router()

// SIGN IN
router.post('/register', async (req, res) => {
  const { username, password } = req.body
  try {
    const user = await UserModel.findOne({ username })

    if (user) {
      return res.json({ message: 'User already exist' })
    }
    const salt = bcrypt.genSaltSync(10) // generate random salt value
    const hashedPassword = await bcrypt.hash(password, salt)

    const newUser = new UserModel({ username, password: hashedPassword })
    await newUser.save()

    res.json({ message: 'User created successfully' })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Failed to create user' })
  }
})

// LOG IN
router.post('/login', async (req, res) => {
  const { username, password } = req.body
  try {
    const user = await UserModel.findOne({ username })

    if (!user) {
      return res.json({ message: 'User doesn\'t exist' })
    }

    const isPasswordValid = await bcrypt.compare(password, user.password)
    if (!isPasswordValid) {
      return res.json({ message: 'Password is invalid' })
    }

    const token = jwt.sign({ id: user._id }, secretToken)
    res.json({ token, userID: user._id })
  } catch (error) {
    console.error(error)
  }
})

export { router as userRouter }
