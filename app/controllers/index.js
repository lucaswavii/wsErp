module.exports.index = function( application, req, res ){
    console.log('aqui')
    res.render('index', { validacoes: {}, sessao: {} });
}