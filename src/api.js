import {get, post} from "./http";


export const login = (param) => get('/login', param)
