import {Router} from 'express'
import LoginController from '../api/controllers/LoginController'

const routes = Router()


routes.post('/authenticate', LoginController.authentication)

export default routes