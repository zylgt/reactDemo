import { DEL, EDIT, ADD} from "./actionType";
export const del = (key) => ({ type : DEL , data : key})
export const edit = (data,key) => ({ type : EDIT , data : data,key:key})
export const add = (data) => ({ type : ADD , data : data})