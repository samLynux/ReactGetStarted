import axios from "axios";
import React, { SyntheticEvent, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Paginator from "../../components/Paginator";
import Wrapper from "../../components/wrapper";
import { Order } from "../../models/order";
import { OrderItem } from "../../models/order-item";
import { Product } from "../../models/product";

const Orders = () =>{

    
  const [orders, setOrders] = useState([]);
  const [page, setPage] = useState(1);
  const [lastPage, setLastPage] = useState(0);
  
  
  useEffect(() =>{
    (
        async () => {
            const {data} = await axios.get(`orders?page=${page}`);

            setOrders(data.data);
            setLastPage(data.meta.lastpage);
        }
    )()
    }, [page]);

    const del = async (id:number) => {
        if(window.confirm("are you sure?")){
          await axios.delete(`orders/${id}`);
    
          setOrders(orders.filter((u: Product) => u.id !== id));
        }
    }

    

    return (
        <Wrapper>
            <div className="pt-3 pb-2 mb-3 border-bottom">
              <Link to={'/orders/create'} className="btn btn-sm btn-outline-secondary"
                >Add</Link>
            </div>
            <div className="pt-3 pb-2 mb-3 border-bottom">
            </div>
            <div className="table-responsive">
              <table className="table table-striped table-sm">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Total</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                    {orders.map((order: Order) =>{
                        return (
                            <>
                                <tr key={order.id}>
                                    <td>{order.id}</td>
                                    <td>{order.name}</td>
                                    <td>{order.email}</td>
                                    <td>{order.total}</td>
                                    <td>
                                    <div className="btn-group mr-2">
                                        <Link to={`/orders/${order.id}/edit`} className="btn btn-sm btn-outline-secondary">Edit</Link>
                                    </div>
                                    <div className="btn-group mr-2">
                                        <a href="#" className="btn btn-sm btn-outline-secondary"
                                        onClick={() => del(order.id)}
                                        >View</a>
                                    </div>
                                    </td>
                                </tr> 
                                <tr >
                                    <td colSpan={5}>
                                        <div>
                                            <table className="table table-sm">
                                                <thead>
                                                    <tr>
                                                        <th>#</th>
                                                        <th>Product Title</th>
                                                        <th>Quantity</th>
                                                        <th>Price</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {order.order_items.map((i: OrderItem) => {
                                                        return (
                                                            <tr key={i.id}>
                                                                <td>{i.id}</td>
                                                                <td>{i.product_title}</td>
                                                                <td>{i.quantity}</td>
                                                                <td>{i.price}</td>
                                                            </tr>
                                                        )
                                                    })}
                                                </tbody>
                                            </table>
                                        </div>
                                    </td>
                                </tr> 
                            </>
                        )
                    })}
                </tbody>
              </table>
            </div>
            <Paginator page={page} lastpage={lastPage} pageChanged={setPage}/>
        </Wrapper>
    );
};

export default Orders