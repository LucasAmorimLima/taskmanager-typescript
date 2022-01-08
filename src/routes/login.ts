import {Router} from 'express'
import LoginController from '../controllers/LoginController'

const routes = Router()


routes.post('/authenticate', LoginController.authentication)

export default routes