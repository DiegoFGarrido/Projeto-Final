class tabelas {
    init (conexao){
        this.conexao = conexao
        //console.log('Tabelas foram chamadas')
        this.criarVeiculo()
        this.criarVeiculoDados()
        this.criarUsuario()
    }

    criarVeiculo(){
        const sql = 'CREATE TABLE IF NOT EXISTS Veiculos (id int NOT NULL AUTO_INCREMENT, veiculo varchar(50) NOT NULL, volume int, conectado int, atualizacao int, PRIMARY KEY(id))'

        this.conexao.query(sql, erro => {
            if (erro){
                console.log (erro)
            } else{
                console.log('Tabela Veiculo criada com sucesso')
            }
        })
    }

    criarVeiculoDados(){
        const sql = 'CREATE TABLE IF NOT EXISTS VeiculosDados (id int Primary Key NOT NULL AUTO_INCREMENT, vin VARCHAR(20) NOT NULL UNIQUE, odometer VARCHAR(30) NOT NULL, tirePressure VARCHAR(30) NOT NULL, status VARCHAR(30) NOT NULL, batteryStatus VARCHAR(30) NOT NULL, fuelLevel VARCHAR(30) NOT NULL, latitude VARCHAR(30) NOT NULL, longitude VARCHAR(30) NOT NULL)'

        this.conexao.query(sql, erro => {
            if (erro){
                console.log (erro)
            } else{
                console.log('Tabela VeiculosDados criada com sucesso')
            }
        })
    }

    criarUsuario(){
        const sql = 'CREATE TABLE IF NOT EXISTS Usuario (id int NOT NULL AUTO_INCREMENT, nome varchar(20) NOT NULL, email varchar(30) NOT NULL, senha varchar(30) NOT NULL, nomeCompleto varchar(100) NOT NULL,  dataCriacao datetime NOT NULL, PRIMARY KEY(id))'

        this.conexao.query(sql, erro => {
            if (erro){
                console.log (erro)
            } else{
                console.log('Tabela Usuarios criada com sucesso')
            }
        })
    }
}

module.exports = new tabelas