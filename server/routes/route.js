const router = require("express").Router();

const { all, find, create, update, destroy } = require("../controllers/controller")
const {createDokterValidation} = require("../middleware/validation.middleware")

router.post("/", createDokterValidation, create)
router.get("/", all)
router.get("/:id", find)
router.put("/:id", update)
router.delete("/:id", destroy)

module.exports = router;