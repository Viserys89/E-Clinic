const express = require("express")
const database = require("./database")
const app = express()
const port = process.env.PORT || 3001
const Route = require("./routes/route")

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

database.sync({ force: false }).then(() => {
    console.info("database synced")
}).catch(err => {
    console.error("failed to sync database: " + err.message)
})

app.get("/", (req, res) => {
    res.json({
        message: "Node.js Book REST API Server"
    })
})

app.use("/api/books", Route)


app.listen(port, () => console.log(`Server up and running on port ${port}`))