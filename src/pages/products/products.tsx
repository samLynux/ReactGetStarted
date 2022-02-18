import axios from "axios";
import React, { SyntheticEvent, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Paginator from "../../components/Paginator";
import Wrapper from "../../components/wrapper";
import { Product } from "../../models/product";

const Products = () =>{

    
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [lastPage, setLastPage] = useState(0);
  
  
  useEffect(() =>{
    (
        async () => {
            const {data} = await axios.get(`products?page=${page}`);

            setProducts(data.data);
            setLastPage(data.meta.lastpage);
        }
    )()
    }, [page]);

    const del = async (id:number) => {
        if(window.confirm("are you sure?")){
          await axios.delete(`products/${id}`);
    
          setProducts(products.filter((u: Product) => u.id !== id));
        }
    }

    

    return (
        <Wrapper>
            <div className="pt-3 pb-2 mb-3 border-bottom">
              <Link to={'/products/create'} className="btn btn-sm btn-outline-secondary"
                >Add</Link>
            </div>
            <div className="pt-3 pb-2 mb-3 border-bottom">
            </div>
            <div className="table-responsive">
              <table className="table table-striped table-sm">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Image</th>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Price</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                    {products.map((product: Product) =>{
                        return (
                            <tr key={product.id}>
                                <td>{product.id}</td>
                                <td><img src={product.image} width="50"/></td>
                                <td>{product.title}</td>
                                <td>{product.description}</td>
                                <td>{product.price}</td>
                                <td>
                                <div className="btn-group mr-2">
                                    <Link to={`/products/${product.id}/edit`} className="btn btn-sm btn-outline-secondary">Edit</Link>
                                </div>
                                <div className="btn-group mr-2">
                                    <a href="#" className="btn btn-sm btn-outline-secondary"
                                    onClick={() => del(product.id)}
                                    >Delete</a>
                                </div>
                                </td>
                            </tr> 
                        )
                    })}
                </tbody>
              </table>
            </div>
            <Paginator page={page} lastpage={lastPage} pageChanged={setPage}/>
        </Wrapper>
    );
};

export default Products