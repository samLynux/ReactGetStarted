import axios from "axios";
import React, { SyntheticEvent, useEffect, useRef, useState } from "react";
import { Redirect } from "react-router-dom";
import ImageUpload from "../../components/ImageUpload";
import Wrapper from "../../components/wrapper";
import { Role } from "../../models/role";

const ProductEdit= (props: any) =>{

    const [title,setTitle] = useState('');
    const [image,setImage] = useState('');
    const [description,setDescription] = useState('');
    const [price,setPrice] = useState('');
    const [redirect, setRedirect] = useState(false);

    const ref = useRef<HTMLInputElement>(null);

    useEffect(() =>{
        (
            async () => {
                const response = await axios.get('roles');



                const {data}  = await axios.get(`products/${props.match.params.id}`);

                setTitle(data.title);
                setDescription(data.description);
                setImage(data.image);
                setPrice(data.price);

            }
        )()
    }, []);

    const submit = async (e: SyntheticEvent) => {
        e.preventDefault();

        await axios.put(`products/${props.match.params.id}`, {
            title,
            image,
            description,
            price
        });

        setRedirect(true);
    }

    const updateImage = (url: string) => {
        if(ref.current){
            ref.current.value = url;
        }
        setImage(url);
    }

    if(redirect){
        return <Redirect to={'/products'}/>
    }

    return (
        <Wrapper>
            <form onSubmit={submit}>
          
                <div className="mb-3">
                    <label>Title</label>
                    <input defaultValue={title} className="form-control" onChange={e => setTitle(e.target.value)}/>
                </div>

                <div className="mb-3">
                    <label>Description</label>
                    <textarea className="form-control"
                        defaultValue={description}  onChange={e => setDescription(e.target.value)}/>
                </div>

                <div className="mb-3">
                    <label>Image</label>
                    <div className="input-group">
                        <input className="form-control"
                            ref={ref} value={image} onChange={e => setImage(e.target.value)}/>
                        <ImageUpload uploaded={updateImage}/>
                    
                    </div>
                    
                </div>

                <div className="mb-3">
                    <label>Price</label>
                    <input type="number" className="form-control" 
                        defaultValue={price} onChange={e => setPrice(e.target.value)}/>
                </div>
               

           
              <button className=" btn btn-outline-secondary">Submit</button>
            </form>
        </Wrapper>
    )
}

export default ProductEdit