const conexao = require('../infraestrutura/conexao')

class Veiculos{
    adicionaVeiculo(veiculo){
        const sql = 'INSERT INTO veiculos SET ?'

        conexao.query(sql, veiculo, (erro, resultados) => {
            if(erro) {
                console.log(erro)
            } else {
                console.log(resultados)
            }
        })
    }

    listaVeiculo(res){
        const sql = 'SELECT veiculos.id, veiculos.veiculo, veiculos.volume, veiculos.conectado, veiculos.atualizacao FROM veiculos'
        conexao.query(sql, (erro, resultados) => {            
            if(erro) {               
                res.status(400).json(erro) 
            } else {                
                res.status(200).json(resultados) 
            }
        })
    }

    
}

module.exports = new Veiculos