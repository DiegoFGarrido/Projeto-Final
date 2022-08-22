const moment = require('moment')
const conexao = require('../infraestrutura/conexao')

class Usuario{
    adicionaUsuario(user){
        const dataCriacao = moment().format('YYYY-MM-DD HH:MM:SS')
        const loginDatado = {...user, dataCriacao}
        const sql = 'INSERT INTO usuario SET ?'

        conexao.query(sql, loginDatado, (erro, resultados) => {
            if(erro) {
                console.log(erro)
            } else {
                console.log(resultados)
            }
        })
    }

    listaUsuario(res){
        const sql = 'SELECT * FROM usuario'
        
        conexao.query(sql, (erro, resultados) => {            
            if(erro) {               
                res.status(400).json(erro) 
            } else {                
                res.status(200).json(resultados) 
            }
        })
    }

    buscaUsuarioLogin(req, res){
        const sql = 'SELECT * FROM usuario WHERE nome =? and senha =?'
        
        conexao.query(sql, [req.body.nome, req.body.senha], (erro, resultados) => {            
            if(erro) {               
                res.status(400).json(erro) 
            } else {  
                const usuario = resultados [0]   
                if (usuario){           
                res.status(200).json(usuario) 
                }
            }
        })
    }

}

module.exports = new Usuario

