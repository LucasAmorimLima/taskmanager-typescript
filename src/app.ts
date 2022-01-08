import express from 'express';
import cors from 'cors';
import user from './routes/user';
import time from './routes/time';
import project from './routes/project';
import login from './routes/login'

class App {
    public express: express.Application
    constructor() {
        this.express = express()
        this.middlewares()
        this.routes()
        
    }
    private middlewares() {
        this.express.use(express.json())
        this.express.use(cors())
    }
    private routes() {
        this.express.use(user)
        this.express.use(time)
        this.express.use(project)
        this.express.use(login)
    }
    
}
export default new App().express