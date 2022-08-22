const VeiculosDados = require('../models/veiculos-dados')

module.exports = app => {
    app.get('/veiculos-dados', (req, res) => {
        VeiculosDados.listaVeiculoDados(res)
    })

    app.get('/veiculos-dados/:id', (req, res) => { 
        const id = parseInt(req.params.id)
        VeiculosDados.buscaVeiculoId(id, res)
    })

    app.post('/veiculos-dados', (req, res) => {
        
        const veiculoDados = req.body
        VeiculosDados.adicionaVeiculoDados(veiculoDados)
        res.send('Você está na rota de Dashboard e está realizando um POST')
    })

    app.patch('/veiculos-dados/:id', (req, res) => {
        const id = parseInt(req.params.id)
        const valores = req.body
        VeiculosDados.alteraVeiculoId(id, valores, res)
    })

    app.delete('/veiculos-dados/:id', (req, res) => {
        const id = parseInt(req.params.id)
        VeiculosDados.deletaVeiculoId(id, res)
    })
}