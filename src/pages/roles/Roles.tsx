import axios from "axios";
import React, { SyntheticEvent, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Wrapper from "../../components/wrapper";
import { Role } from "../../models/role";

const Roles = () =>{

    
  const [roles, setRoles] = useState([]);
  
  
  useEffect(() =>{
    (
        async () => {
            const {data} = await axios.get('roles');

            setRoles(data);
        }
    )()
    }, []);

    const del = async (id:number) => {
        if(window.confirm("are you sure?")){
          await axios.delete(`roles/${id}`);
    
          setRoles(roles.filter((u: Role) => u.id !== id));
        }
    }

    return (
        <Wrapper>
            <div className="pt-3 pb-2 mb-3 border-bottom">
              <Link to={'/roles/create'} className="btn btn-sm btn-outline-secondary"
                //onClick={}
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
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                    {roles.map((role: Role) =>{
                        return (
                            <tr key={role.id}>
                                <td>{role.id}</td>
                                <td>{role.name}</td>
                                <td>
                                <div className="btn-group mr-2">
                                    <Link to={`/roles/${role.id}/edit`} className="btn btn-sm btn-outline-secondary">Edit</Link>
                                </div>
                                <div className="btn-group mr-2">
                                    <a href="#" className="btn btn-sm btn-outline-secondary"
                                    onClick={() => del(role.id)}
                                    >Delete</a>
                                </div>
                                </td>
                            </tr> 
                        )
                    })}
                </tbody>
              </table>
            </div>
        </Wrapper>
    );
};

export default Roles