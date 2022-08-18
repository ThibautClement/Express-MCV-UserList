import axios from "axios";
import { UserDto } from "../dto/user.dto";
import 'dotenv/config'

const URI = process.env.URI

export class UsersModele {

    getUsers = async() => {
        const data = await axios.get(`${URI}`).then(res => res.data)
        return data
    }

    getUserById = (id : string) => {
        return axios.get(`${URI}/${id}`)
    }

    deleteUserbyId = (id : string) => {
        axios.delete(`${URI}/${id}`)
    }

    addUser = (user : UserDto) => {
        axios.post(`${URI}`, user)
    }
}