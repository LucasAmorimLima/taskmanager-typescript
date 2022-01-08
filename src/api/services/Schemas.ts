import moment from "moment";
import Joi from 'joi'

//const name = Joi.string().regex(/^[A-Z]+ [A-Z]+$/i).uppercase()
const name =  Joi.string().min(3).max(30).required()
const data  = Joi.date().default(() => moment().format())
 

export const usersSchema = Joi.object({
    name : name,
    email: Joi.string().email().lowercase().required(),
    password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
    confirmPassword: Joi.string().valid(Joi.ref('password')).required().strict()
});
export const loginSchema = Joi.object({
    
    email: Joi.string().email().lowercase().required(),
    password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
    
});
export const projectSchema = Joi.object({
    name : name
});
export const timerSchema = Joi.object({
    name : name,
    initialDate : data,
    finalDate : data,
    idProject : Joi.number().required()
});
