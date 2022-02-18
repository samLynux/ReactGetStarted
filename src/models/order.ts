import { OrderItem } from "./order-item";


export class Order{
    

    constructor(
        public id : number,
        public name : string,
        public email : string,
        public total : string,
        public order_items : OrderItem[]
    ){

       
    }
}