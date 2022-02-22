import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { connectDB } from '../database/db';
import { loginRouter } from '../routes/Login.routes';
import { signupRouter } from '../routes/Signup.routes';
import { getPurchases, updateUser } from '../controllers/Users';

// Connect to DB
connectDB()

// Load .env vars
dotenv.config();

// Port
const PORT = process.env.PORT || 3000;

const server = express();

// Enable Cors
server.use(cors())

// Parse JSON 
server.use(express.json());

server.use('/signup', signupRouter)

server.use('/login', loginRouter)

server.put('/', updateUser)

server.post('/', getPurchases)

server.listen(PORT, () => {
  console.log(`Server is running in http://localhost:${PORT}`);
})