module.exports = function(application){
    // Rota do index principal home
    application.get('/index', function(req, res){
        console.log("aqio")
        application.app.controllers.index.index(application, req, res);
    });
}