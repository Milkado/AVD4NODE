module.exports.listarFuncionarios = (app, req, res) => {
    const connection = new app.config.DBConnection();
    const funcionariosDAO = new app.models.FuncionariosDAO(connection)
    funcionariosDAO.listarFuncionarios((error, resultado) => {
        resultado ? res.render('funcionarios', {funcionarios: resultado}) : res.send(error)
    })
}

module.exports.funcionarioIndividual = (app, req, res) => {
    const id = req.query.id;
    const connection = new app.config.DBConnection();
    const funcionariosDAO = new app.models.FuncionariosDAO(connection)
    funcionariosDAO.funcionarioIndiviudal(id, (error, resultado) => {
        resultado ? res.render('funcionarioindividual', {funcionario: resultado}) : res.send(error)
    })
}

module.exports.funcionariosExcluir = (app, req, res) => {
    const id = req.query.id;
    const connection = new app.config.DBConnection()
    const funcionariosDAO = new app.models.FuncionariosDAO(connection)
    funcionariosDAO.excluirFuncionario(id, (error, resultado) => {
        resultado ? res.redirect('/listarfuncionarios') : res.send(error)
    })
}

module.exports.funcionariosSalvar = (app, req, res) => {
    const dados = req.body;
    const id = req.query.id;
    const connection = new app.config.DBConnection()
    const funcionariosDAO = new app.models.FuncionariosDAO(connection)
    if(id == 'C') {
        funcionariosDAO.salvarFuncionarios(dados, (error, resultado) => {
        return resultado ? res.redirect('/listarfuncionarios') : res.send(error)})
    }else {
        funcionariosDAO.salvarFuncionarioAlterado(id, dados, (error, resultado) =>{
            return resultado ? res.redirect('/listarfuncionarios') : res.send(error)
        })
     }
    
    
    
}

module.exports.funcionariosCadastro = (app, req, res) => {
    res.render('cadastrofuncionarios', {dadosFuncionario: [{}], conteudo: ['C']});
}

module.exports.funcionariosAlterar = (app, req, res) => {
    const id = req.query.id;
    const connection = new app.config.DBConnection()
    const funcionariosDAO = new app.models.FuncionariosDAO(connection)
    funcionariosDAO.alterarFuncionario(id, (error, resultado) => {
        res.render('cadastrofuncionarios', {dadosFuncionario: resultado, conteudo: id})
    })
}