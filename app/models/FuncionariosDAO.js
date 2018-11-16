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
}

module.exports = (app) => {
    return FuncionariosDAO;
}
