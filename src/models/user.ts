import { Role } from "./role";


export class User{
    

    constructor(
        public id = 0,
        public firstname = '',
        public lastname= '',
        public email= '',
        public role = new Role()
    ){

       
    }
    get name(){
        return this.firstname+ ' ' + this.lastname;
    }
}