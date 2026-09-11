const express = require("express");
const alunoController = require("../controllers/AlunoController");

const router = express.Router();

router.get("/",(request, response, next)=>{
    console.log("Executando antes do findMany");
    next();
}, alunoController.findMany);
router.post("/", alunoController.create);

module.exports = router;