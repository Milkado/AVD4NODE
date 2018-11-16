module.exports.listarFuncionarios = (app, req, res) => {
    const connection = new app.config.DBConnection();
    const funcionariosDAO = new app.models.FuncionariosDAO(connection)
    funcionariosDAO.listarFuncionarios((error, resultado) => {
        resultado ? res.render('funcionarios', {funcionarios: resultado}) : res.send(error)
    })
}

module.exports.funcionarioIndividual = (app, req, res) => {
    const id = req.query.id
    const connection = new app.config.DBConnection();
    const funcionariosDAO = new app.models.FuncionariosDAO(connection)
    funcionariosDAO.funcionarioIndiviudal(id, (error, resultado) => {
        resultado ? res.render('funcionarioindividual', {funcionario: resultado}) : res.send(error)
    })
}

module.exports.funcionariosCadastro = (app, req, res) => {
    res.render('cadastrofuncionarios')
}