const express = require("express")
const database = require("./database")
const app = express()
const port = process.env.PORT || 3000
const router = require("express").Router()
const { all, find, create, update, destroy } = require("./controllers/controller")

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

database.sync({ force: false }).then(() => {
    console.info("database synced")
}).catch(err => {
    console.error("failed to sync database: " + err.message)
})

router.post("/", create)
router.get("/", all)
router.get("/:id", find)
router.put("/:id", update)
router.delete("/:id", destroy)

app.listen(port, () => console.log(`Server up and running on port ${port}`))