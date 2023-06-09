import { config } from 'dotenv'

config({ path: './.env' })

export const dbPassword = process.env.DB_PASSWORD
export const port = process.env.PORT || '3001'
export const secretToken = process.env.JWT_SECRET
