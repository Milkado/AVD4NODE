class FuncionariosDAO {
    constructor(connection){
        this._connetion = connection;
    }

    listarFuncionarios(cb){
        this._connetion.open((error, db) => {
            if(db) {
                db.collection('funcionarios').find({}).toArray((error, resultado) => {
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
