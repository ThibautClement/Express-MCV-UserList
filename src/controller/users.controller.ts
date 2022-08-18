import { UsersModele } from "../modele/users.modele";
import { Response, Request } from 'express';
import { AxiosResponse } from "axios";

export class UsersController {

    private users : UsersModele

    constructor(users : UsersModele) {
        this.users = users
    }

    getUsers = async(req : Request, res : Response) => {
        const data = await this.users.getUsers()
        res.render('user', {data: data})
    }

    getUserPage = async(req : Request, res : Response) => {
        const id = req.params.id
        const user = await this.users.getUserById(id).then((res : AxiosResponse) => {return res})
        res.render('userPage', {user: user})
    }
    
    deleteUserPage = (req : Request, res: Response) => {
        const id = req.params.id
        this.users.deleteUserbyId(id)
        res.redirect('/')
    }

    getForm = (req : Request, res : Response) => {
        res.render('addUserPage')
    }

    postUser = async(req : Request, res: Response) => {
        const user = req.body;
        await this.users.addUser(user);
        console.log(user);
        res.redirect('/')
    }
}