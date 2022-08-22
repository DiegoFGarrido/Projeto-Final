const Usuario = require('../models/usuario')

module.exports = app => {
    //app.get('/login', (req, res) => res.send('Pagina de login, onde os usuarios cadastrados irão fazer o login'))
    
    app.get('/usuario', (req, res) => {        
        Usuario.listaUsuario(res)        
    })

    app.post('/usuario', (req, res) => {
        const usuario = req.body

        Usuario.adicionaUsuario(usuario)
        res.send('Você está na rota de login e está realizando um POST')
    })     
    
}