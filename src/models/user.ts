

export class User{
    

    constructor(
        public id = 0,
        public firstname = '',
        public lastname= '',
        public email= ''
    ){

       
    }
    get name(){
        return this.firstname+ ' ' + this.lastname;
    }
}