module.exports = (app) => {
    const notes = require('../controllers/notes.controller.js');

    // create new Notes routes
    app.post('/notes', notes.create);

    // Retrieve all Notes
    app.get('/notes', notes.findAll);

    // Retrive a singel Note with noteId
    app.get('/notes/:noteId', notes.findOne);

    // update a Note with noteId
    app.put('/notes/:noteId', notes.update);

    // delete a Note with noteId
    app.delete('/notes/:noteId', notes.delete);
}