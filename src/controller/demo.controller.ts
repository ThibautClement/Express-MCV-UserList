import { DemoModele } from './../modele/demo.modele';
import { Response, Request } from 'express';

export class DemoController {

    private modele : DemoModele;

    constructor(modele: DemoModele) {
        this.modele = modele
    } 

    getString = (req : Request, res : Response) => {
        const data = this.modele.gotoController()
        res.render('demo', {data})
    }

    getPage = (req : Request, res : Response) => {
        res.render('page')
    }

    getTest = (req : Request, res : Response) => {
        const id = req.params.id
        res.render('test', {id})
    }    

    postString = (req : Request, res : Response) => {
        res.send(req.body.message)
    }

}