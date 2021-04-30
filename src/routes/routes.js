const express = require('express'); //guardar express en una variable de servidor
const router = express.Router(); //usar modulo de router de ex´press
const UserController = require('../controllers/userController');//manejo de usuarios
const monitController = require('../controllers/monitController');//maneja el monitor de graficas de produccion


/////////////////////////////////////////////////////////////////////////// User /////////////////////////////////////////////////////////////////////////////////
//Acceder a login
var reinicio = router.get('/', (req, res) => {
	//res.send('holoo');
	//res.render('user/Login.html');
	res.render('index.html');
});

//Iniciar logueo
router.post('/Login', UserController.login);

/*
//Acceder formulario Registrar usuario
//Iniciar logueo
router.get('/Signup',  UserController.SignUp);
 
//Registrar usuario en db
router.post('/AddUser', UserController.save);
*/



/////////////////////////////////////////////////////////////////////////// Monit /////////////////////////////////////////////////////////////////////////////////
//Iniciar logueo
router.get('/MonitorGraficas', monitController.Graficas);
//Iniciar logueo
router.get('/MonitorGraficas', monitController.Graficas);

 router.get('/Ejemplo', (req, res) => {
	//res.send('holoo');
	//res.render('user/Login.html');
	res.render('monit/ejemplo.html');
});









module.exports = router;