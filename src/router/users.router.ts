import express from 'express'
import { UsersController } from '../controller/users.controller';
import { UsersModele } from '../modele/users.modele';

// on définit le router de express
const router = express.Router();
const users = new UsersModele();
const controller = new UsersController(users);

// on définit les routes et les méthodes associées
router.get('/', controller.getUsers)
router.get('/userPage/:id', controller.getUserPage)
router.get('/delete/:id', controller.deleteUserPage)
router.get('/addUserPage', controller.getForm)
router.post('/addUser', controller.postUser)

// on export le router
export default router