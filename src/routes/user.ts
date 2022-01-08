import {Router} from 'express'
import UserController from '../controllers/UserController'
import { joiMiddleware } from './joiMidlleware'
import { authMiddleware } from './jwtMidlleware'

const routes = Router()

routes.get('/users',authMiddleware, UserController.index)
routes.delete('/users',authMiddleware, UserController.destroy)
routes.get('/users/:id',authMiddleware, UserController.show)
routes.post('/add-user',joiMiddleware, UserController.insert)

export default routes