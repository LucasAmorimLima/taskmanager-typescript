import Time from '../models/TimeModel';
import {Request,Response} from 'express';

class TimeController {
    
    public async index(req: Request,res: Response): Promise<Response> {
        const times  = await Time.findAll()

        return res.json(times)
    }
    
    public async show(req: Request,res: Response): Promise<Response> {
        const time  = await Time.findAll({where: {id: req.params.id}})

        return res.json(time)
    }

    public async destroy(req: Request,res: Response): Promise<Response> {
        const time  = await Time.destroy({where: {id: req.body.id}})

        return res.json(time)
    }
    
    public async insert(req: Request,res: Response): Promise<Response> {
        const data = req.body
        const time = await  Time.create({
            name: data.name,
            initialDate:  data.initialDate,
            finalDate: data.email,
            idProject: data.idProject
        })
        
        return res.json(time)
    }
}

export default new TimeController()