module.exports = (app) => {
    app.get('/listarfuncionarios', (req, res)=>{
        app.controllers.funcionarios.listarFuncionarios(app, req, res)
    })
}