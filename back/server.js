import express from "express"
import bodyParser from "body-parser"
import cors from "cors"
import sequelize from "./db.js"
import router from "./router/rourter.js"

const porta = 6969


const app = express()
app.use(cors())
app.use(bodyParser.json())

try {
    // await sequelize.sync({ force: true })
    await sequelize.sync()
} catch (e) {
    console.log(e)
}

app.use(router)

app.listen(porta, () => { console.log("foi") })