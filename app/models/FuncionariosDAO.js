class FuncionariosDAO {
    constructor(connection){
        this._connection = connection;
    }

    listarFuncionarios(cb){
        this._connection.open((error, db) => {
            if(db) {
                db.collection('funcionarios').find({}).toArray((error, resultado) => {
                    resultado ? cb(null, resultado) : cb('Erro na conexão', null)
                })
            }else {
                cb('Erro na conexão', null)
            }
        })
    }

    funcionarioIndiviudal(id, cb){
        this._connection.open((error, db) => {
            if(db) {
                db.collection('funcionarios').find({_id: this._connection.getObjectID(id)}).toArray((error, resultado) => {
                    resultado ? cb(null, resultado) : cb('Erro na conexão', null)
                })
            }else {
                cb('Erro na conexão', null)
            }
        })
    }

    salvarFuncionarios(dados, cb){
        this._connection.open((error, db) => {
            if(db){
                db.collection('funcionarios').insert(dados)
                cb(null, "Inclusao com sucesso")
            }else{
                cb("Erro ao incluir", null)
            }
        })
    }

    excluirFuncionario(id, cb){
        this._connection.open((error, db) => {
            if(db){
                db.collection('funcionarios').remove({_id: this._connection.getObjectID(id)}, (error, resultado) => {
                    return resultado ? cb(null, "Excluido com sucesso") : cb("Erro na exclusao", null)
                })
                }else{
                cb("Erro ao excluir", null)
            }
        })
    }

    alterarFuncionario(id, cb){
        this._connection.open((error, db) => {
            if(db){
                db.collection('funcionarios').find({_id: this._connection.getObjectID(id)}).toArray((error, resultado) => {
                    return resultado ? cb(null, resultado) : cb("Nao foi possivel se comunicar com a collection", null)
                })
            }else{
                cb(error, null)
            }
        })
    }

    salvarFuncionarioAlterado(id, dados, cb){
        this._connection.open((error, db) => {
            if(db){
                db.collection('funcionarios').update({_id: this._connection.getObjectID(id)}, dados)
                cb(null, 'Alterado com sucesso')
            }else{
                cb('Alteracao com erro', null)
            }
        })
    }
}

module.exports = (app) => {
    return FuncionariosDAO;
}
