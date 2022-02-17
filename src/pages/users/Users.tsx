import axios from "axios";
import React, { useEffect, useState }  from "react";
import Wrapper from "../../components/wrapper";
import { User } from "../../models/user";


const Users = () => {

  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [lastPage, setLastPage] = useState(0);

  useEffect(() => {
    (
      async () =>{
        const {data} = await axios.get(`users?page=${page}`);

        setUsers(data.data);
        setLastPage(data.meta.lastpage);
        
      }
    )()
  }, [page])

  const next = () => {
    if(page < lastPage){
      setPage(page + 1);
    }
  }

  const prev = () => {
    if(page > 1){
      setPage(page - 1);
    }
  }
  
        return (
          <Wrapper>
            <div className="table-responsive">
              <table className="table table-striped table-sm">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user: User) =>{
                    return (
                      <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.firstname} {user.lastname}</td>
                        <td>{user.email}</td>
                        <td>{user.role.name}</td>
                        <td></td>
                      </tr> 
                    )
                  })}
                </tbody>
              </table>
            </div>
            <nav>
              <ul className="pagination">
                <li className="page-item">
                  <a href="#" className="page-link" onClick={prev}>Previous</a>
                </li>
                <li className="page-item">
                  <a href="#" className="page-link" onClick={next}>Next</a>
                </li>
              </ul>
            </nav>
          </Wrapper>
        )
    
}

export default Users;