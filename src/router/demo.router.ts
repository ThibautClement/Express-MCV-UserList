import { DemoModele } from './../modele/demo.modele';
import { DemoController } from './../controller/demo.controller';
import express from 'express'

// on définit le router de express
const router = express.Router();
const modele = new DemoModele();
const controller = new DemoController(modele);

// on définit les routes et les méthodes associées
router.get('/', controller.getString)
router.get('/page', controller.getPage)
router.get('/test/:id', controller.getTest)
router.post('/demo', controller.postString)

// on export le router
export default router