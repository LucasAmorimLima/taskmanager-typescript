import Project from '../models/ProjectModel';
import {Request,Response} from 'express';

class ProjectController {
    
    public async index(req: Request,res: Response): Promise<Response> {
        const projects  = await Project.findAll()

        return res.json(projects)
    }
    
    public async show(req: Request,res: Response): Promise<Response> {
        const project  = await Project.findAll({where: {id: req.params.id}})

        return res.json(project)
    }

    public async destroy(req: Request,res: Response): Promise<Response> {
        const project  = await Project.destroy({where: {id: req.body.id}})

        return res.json(project)
    }
    
    public async insert(req: Request,res: Response): Promise<Response> {
        const data = req.body
        const project = await  Project.create({
            name: data.name,
            status: data.status
        })
        
        return res.json(project)
    }
}

export default new ProjectController()