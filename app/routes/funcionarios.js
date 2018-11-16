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
}