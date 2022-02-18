import axios from "axios";
import React, { SyntheticEvent, useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import Wrapper from "../../components/wrapper";
import { Permission } from "../../models/permission";
import { Role } from "../../models/role";

const RoleEdit = (props: any) =>{
    const [name ,setName] = useState('');
    const [permissions ,setPermissions] = useState([]);
    const [selected ,setSelected] = useState([] as number[]);
    const [redirect, setRedirect] = useState(false);

    useEffect(() =>{
        (
            async () => {
                const response = await axios.get('permissions');

                setPermissions(response.data);

                const {data} = await axios.get(`/roles/${props.match.params.id}`);

                setName(data.name);
                setSelected(data.permissions.map((p: Permission) => p.id));
            }
        )()
    }, []);

    const check = async (id: number) => {
        if(selected.some(s => s === id)){
            setSelected(selected.filter(s => s !== id));
            return;
        }
        setSelected([...selected, id]);

     
    }


    const submit = async (e: SyntheticEvent) => {
        e.preventDefault();

        await axios.put(`roles/${props.match.params.id}`, {
            name,
            permissions: selected
        })

        setRedirect(true);
    }

    if(redirect){
        return <Redirect to={'/roles'}/>
    }

    return (
        <Wrapper>
            <form onSubmit={submit}>
          
                <div className="mb-3 mt-3 row">
                    <label className="col-sm-2 col-form-label">Name</label>
                    <div>
                        <input className="form-control" 
                        defaultValue={name} onChange={e => setName(e.target.value)}/>
                    </div>
                    
                </div>

                <div className="mb-3 row">
                    <label className="col-sm-2 col-form-label">Permissions</label>
                    <div className="col-sm-10">
                        {permissions.map((p: Permission) => {
                            return (
                                <div className="form-check form-check-inline col-3" key={p.id}>
                                    <input className="form-check-input" type="checkbox"
                                        checked={selected.some(s => s === p.id)}
                                        value={p.id} onChange={() => {check(p.id)}} />
                                    <label className="form-check-label">{p.name}</label>
                                </div>
                            )
                        })}
                        
                    </div>
                </div>

           
              <button className=" btn btn-outline-secondary">Save</button>
            </form>
        </Wrapper>
    )
}

export default RoleEdit