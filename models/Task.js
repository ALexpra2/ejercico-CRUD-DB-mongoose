const mongoose = require('mongoose');

//mongoose.Schema:Se usa para definir la estructura de los documentos en una colección de MongoDB.
const UserSchema = new mongoose.Schema({
    title: String,
    completed: String,
    }, { timestamps: true }); 

// Añade do lineas a cada documento, 
// createdAt: almacena la fecha y hora en que se creó el documento.                            
// updatedAt: almacena la fecha y hora en que el documento fue actualizado por última vez.

const Task = mongoose.model('Task', UserSchema);

//Crea un modelo llamado "Task" basado en el esquema definido (UserSchema).

module.exports = Task;