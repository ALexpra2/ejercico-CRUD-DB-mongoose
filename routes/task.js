const express = require("express");
const router = express.Router();
const Task = require("../models/Task.js"); 
//importa el modelo Task generado en models/Task.js

//generar una tarea
router.post("/create", async(req, res) => {
    try {
        const task = await Task.create(req.body); //Crea las tareas con los datos del cuerpo del mensaje
        res.status(201).send(task);
    } catch (error) {
        console.error(error);
        res
            .status(500)
            .send({ message: "There was a problem trying to create a user" });
    }
});

//Buscamos todos los registro de Task
router.get("/", async(req, res) => {
    try {
        const task = await Task.find({}); 
        res.status(201).send(task);
    } catch (error) {
        console.error(error);
        res

            .status(500)
            .send({ message: "There was a problem trying to show all task " });
    }
}); 

//encontrar una tarea por id
router.get("/id/:_id", async(req, res) => {
    const id = req.params._id;
    try {
        const task = await Task.findById(id)
        res.status(201).send(task);
    } catch (error) {
        console.error(error);
        res
            .status(500)
            .send({ message: "There was a problem trying to show a user" });
    }
});

//marcar una tarea como completada buscandola por el id

router.put("/markAsCompleted/:_id", async(req, res) => {
    const id = req.params._id;
    try {
        const task = await Task.findByIdAndUpdate(id, { completed: 'yes' }) 
        res.status(201).send(task);
    } catch (error) {
        console.error(error);
        res
            .status(500)
            .send({ message: "There was a problem changing the status" });
    }
});
 
//actualizar el titulo de una tarea sin modificar nada mas
router.put("/id/:_id", async(req, res) => {
    const id = req.params._id;
    const title = req.body.title;
    try {
        const task = await Task.findByIdAndUpdate(id, {title})
        res.status(201).send(task);
    } catch (error) {
        console.error(error);
        res
            .status(500)
            .send({ message: "There was a problem trying to change the title" });
    }
});



router.delete("/id/:_id", async(req, res) => {
    const id = req.params._id;
    try {
        const task = await Task.deleteOne({ _id: id }); //Para delete hay que pasar el id como un objeto
        res.status(201).send(task);
    } catch (error) {
        console.error(error);
        res
            .status(500)
            .send({ message: "There was a problem trying to delete a user" });
    }
});

module.exports = router; 