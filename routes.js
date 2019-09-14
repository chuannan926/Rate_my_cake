const controller = require("./controller");

module.exports = function(app){
    app.get('/cakes', controller.index)
    app.post('/new', controller.new_cake)

    app.post('/new/review/:id', controller.new_review)

    app.get('/detail/:id', controller.one_cake)
    
    // app.get('/task/:id', controller.one_task)
    // app.post('/new', controller.new_task)
    
    // app.patch('/update/:id', controller.update_task)
    // app.get('/delete/:id', controller.delete)

}