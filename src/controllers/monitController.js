const Controller = {};
const OS = require("os");
/////////////////////////////////////////////////////////////////////--------------- LOGIN ----------------------/////////////////////////////////////////////////////////////////////
 


Controller.Graficas = (req, res) => {
    req.session.Usuario = req.body.username;
    const username = req.body.username;
    const password = req.body.pass;
    res.render('monit/monit.html');
}


module.exports = Controller;