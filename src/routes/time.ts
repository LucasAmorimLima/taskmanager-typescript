import {Router} from 'express'
import TimeController from '../api/controllers/TimeController'
import { joiMiddleware } from './joiMidlleware'
import { authMiddleware } from './jwtMidlleware'

const routes = Router()

routes.get('/time',authMiddleware, TimeController.index)
routes.delete('/time',authMiddleware, TimeController.destroy)
routes.get('/time/:id',authMiddleware, TimeController.show)
routes.post('/time',authMiddleware,joiMiddleware, TimeController.insert)

export default routes