const Controller = {};
const OS = require("os");
/////////////////////////////////////////////////////////////////////--------------- LOGIN ----------------------/////////////////////////////////////////////////////////////////////
/*
Controller.login = (req,res) => {
    req.session.Usuario = req.body.username;
    const username = req.body.username;
    const password = req.body.pass;
    req.getConnection((err,conn) => {
        conn.query('SELECT * FROM usuarios WHERE usuario = ? AND pass = ?',[username, password], (error, results, fields) =>{
            if(error){
                console.log(error);
                res.redirect('/');
                console.log('error en query' + error);
            }
            else if (Object.keys(results).length > 0)//si contiene almenso 1 resultado entra
            {
                const id = results[0].id//Obtener contraseña de la consulta
                const pass = results[0].pass//Obtener contraseña de la consulta
                const planta = results[0].Planta//Obtener contraseña de la consulta
                const nivel = results[0].Nivel//Obtener nivel de la consulta
                const Area = results[0].Area//Obtener nivel de la consulta
                const Turno = results[0].Turno//Obtener nivel de la consulta
                if(password == pass){//si las contraseñas coinciden entran
                    req.session.loggedin = true;
                    req.session.idDB = id;
                    req.session.username = username;
                    req.session.planta = planta;
                    req.session.nivel = nivel;
                    req.session.area = Area;
                    req.session.nombre = OS.hostname();
                    req.session.turno = Turno;
                    conn.query("UPDATE usuarios SET Nombre = '"+OS.hostname()+"' WHERE id = "+id+"",[], (error, results, fields) =>{
                        if(error){
                            console.log(error);
                            res.redirect('/');
                            console.log('error al actualizar nombres');
                        }
                        conn.query("SELECT * FROM usuarios WHERE usuario = '"+username+"'", (err, user) => {
                            if (err) {
                 
                                console.log('Error de lectura ' +err);
                            }
                            console.log(user);
                            res.render('index.html', {
                                data: user
                            });
                        });
                    }); 
                    //res.send('works');
                }else{//si las contraseñas no coinciden
                    res.redirect('/');
                }
            }else //sin resultados
            {
                res.redirect('/');
                console.log('Error usaurio o contraseña' +error);
			}			
			//response.end();
        });        
    })
}
*/


Controller.login = (req, res) => {
    req.session.Usuario = req.body.username;
    const username = req.body.username;
    const password = req.body.pass;
    res.render('index.html');
}


module.exports = Controller;