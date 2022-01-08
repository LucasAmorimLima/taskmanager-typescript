import User from '../models/UserModel';
import {Request,Response} from 'express';
import { encodeSession } from '../services/generateJWT';

class LoginController {
    
    public async authentication(req: Request,res: Response): Promise<Response> {
        const data = req.body
        
        const authenticate  = await User.findAll({where:{email: data.email,password:data.password}})
        const session = encodeSession("A senha é pompo por enquanto", {
            id: authenticate[0].id,
            username: authenticate[0].name,
            dateCreated: authenticate[0].createdAt        
        });
        return res.json({
            result: authenticate,
            session: session
        })
    }

}

export default new LoginController()