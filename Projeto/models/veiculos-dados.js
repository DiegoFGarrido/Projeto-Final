const conexao = require('../infraestrutura/conexao')

class VeiculosDados{
    adicionaVeiculoDados(veiculoDados){
        const sql = 'INSERT INTO VeiculosDados SET ?'

        conexao.query(sql, veiculoDados, (erro, resultados) => {
            if(erro) {
                console.log(erro)
            } else {
                console.log(resultados)
            }
        })
    }

    listaVeiculoDados(res){
        const sql = 'SELECT VeiculosDados.id, VeiculosDados.vin, VeiculosDados.odometer, VeiculosDados.status, VeiculosDados.fuelLevel, VeiculosDados.latitude, VeiculosDados.longitude FROM VeiculosDados'
        
        conexao.query(sql, (erro, resultados) => {            
            if(erro) {               
                res.status(400).json(erro) 
            } else {                
                res.status(200).json(resultados) 
            }
        })
    }

    buscaVeiculoId(id, res) {
        const sql = `SELECT VeiculosDados.id, VeiculosDados.vin, VeiculosDados.odometer, VeiculosDados.status, VeiculosDados.fuelLevel, VeiculosDados.latitude, VeiculosDados.longitude FROM VeiculosDados WHERE id=${id}`;
    
        conexao.query(sql, (erro, resultados) => { 
            const veiculoEspecifico = resultados[0];
            if(erro) { 
                res.status(400).json(erro);
            } else {
                res.status(200).json(veiculoEspecifico);
            }    
        })
    }

    alteraVeiculoId(id, valores, res){
        const sql = 'UPDATE VeiculosDados SET ? WHERE id=?'
    
        conexao.query(sql, [valores, id], (erro, resultados) => { 
            if(erro) {
                res.status(400).json(erro)
            } else {
                res.status(200).json(resultados)
            }
        })
    } 

    deletaVeiculoId(id, res) {
        const sql = 'DELETE FROM VeiculosDados WHERE id=?'

        conexao.query(sql, id, (erro, resultados) => {
            if(erro) {
                res.status(400).json(erro)
            } else {
                res.status(200).json(resultados)
            }
        })
    }
 
}    



module.exports = new VeiculosDados