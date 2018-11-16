module.exports.listarFuncionarios = (app, req, res) => {
    const connection = new app.config.DBConnection();
    const funcionariosDAO = new app.models.FuncionariosDAO(connection)
    funcionariosDAO.listarFuncionarios((error, resultado) => {
        resultado ? res.render('funcionarios', {funcionarios: resultado}) : res.send(error)
    })
}