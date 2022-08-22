const Usuario = require('../models/usuario')

module.exports = app => {
    
    app.post('/login', (req, res) => {
                     
        Usuario.buscaUsuarioLogin(req, res)
        
        //res.send('Você está na rota de login e está realizando um POST')
    })     
    
}