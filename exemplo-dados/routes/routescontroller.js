module.exports = class routescontroller {
    // ROTA 1
    static hi(req, res){
        res.render("hi", { nomeView: 'View nome: hi.hbs' })
    }
    // ROTA 2
    static home(req, res){
        res.render("home", { nomeView: 'View nome: home.hbs' })
    }
    // ROTA 3
    static guest(req, res){
        const user = {
            nome: "João",
            age : "20",
            email : "Joao@email.com",
            nomeView : "View nome : guest.hbs"
        }
        res.render("guest",{user : user})
    }
}