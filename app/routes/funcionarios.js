module.exports = (app) => {
    app.get('/listarfuncionarios', (req, res)=>{
        app.controllers.funcionarios.listarFuncionarios(app, req, res)
    })

    app.get('/funcionarioindividual', (req, res) => {
        app.controllers.funcionarios.funcionarioIndividual(app, req, res)
    })

    app.get('/funcionarios', (req, res) => {
        app.controllers.funcionarios.funcionariosCadastro(app, req, res)
    })

    app.post('/funcionarios/salvar', (req, res) => {
        app.controllers.funcionarios.funcionariosSalvar(app, req, res)
    })

    app.get('/funcionarios/excluir', (req, res) => {
        app.controllers.funcionarios.funcionariosExcluir(app, req, res)
    })

    app.get('/funcionarios/alterar', (req, res) => {
        app.controllers.funcionarios.funcionariosAlterar(app, req, res)
    })
}