import {Router} from 'express'
import ProjectController from '../controllers/ProjectController'
import { joiMiddleware } from './joiMidlleware'
import {authMiddleware} from './jwtMidlleware'
const routes = Router()

routes.get('/project',authMiddleware, ProjectController.index)
routes.delete('/project',authMiddleware, ProjectController.destroy)
routes.get('/project/:id',authMiddleware, ProjectController.show)
routes.post('/project',authMiddleware,joiMiddleware, ProjectController.insert)

export default routes