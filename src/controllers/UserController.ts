import User from '../models/UserModel';
import {Request,Response} from 'express';

class UserController {
    
    public async index(req: Request,res: Response): Promise<Response> {
        const users  = await User.findAll()

        return res.json(users)
    }
    
    public async show(req: Request,res: Response): Promise<Response> {
        const user  = await User.findAll({where: {id: req.params.id}})

        return res.json(user)
    }

    public async destroy(req: Request,res: Response): Promise<Response> {
        const user  = await User.destroy({where: {id: req.body.id}})

        return res.json(user)
    }
    
    public async insert(req: Request,res: Response): Promise<Response> {
        const data = req.body
        const user = await  User.create({
            name: data.name,
            password:  data.password,
            email: data.email
        })
        
        return res.json(user)
    }
}

export default new UserController()