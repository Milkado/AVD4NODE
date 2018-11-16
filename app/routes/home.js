module.exports = (app) => {
    app.get('/', (req, res)=>{
        app.controllers.home.homePrincipal(app, req, res)
    })
}