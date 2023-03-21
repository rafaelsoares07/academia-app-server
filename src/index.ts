import cors from "cors";
import express, { json } from "express";
import academyAuthRouter from "./routes/auth/academyAuthRoutes";
import clientAuthRouter from './routes/auth/clientAuthRouter';
import instructorRouter from './routes/auth/instructorAuthRouter';
import costumerRouter from './routes/costumer/costumerRouter';

const app = express()
app.use(json())
app.use(cors())

app.use(academyAuthRouter)
app.use(clientAuthRouter)
app.use(instructorRouter)
app.use(costumerRouter)

app.listen(5000, () => {
    console.log("Sevidor rodando:")
})