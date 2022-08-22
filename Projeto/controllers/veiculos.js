const Veiculos = require('../models/veiculos')

module.exports = app => {
    app.get('/veiculos', (req, res) => {
        Veiculos.listaVeiculo(res)
    })
    
    app.post('/veiculos', (req, res) => {
        
        const veiculo = req.body
        Veiculos.adicionaVeiculo(veiculo)
        res.send('Você está na rota de Dashboard e está realizando um POST')
    })
}