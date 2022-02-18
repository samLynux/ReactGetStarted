import axios from "axios";
import React, { useEffect, useState } from "react";

const Paginator = (props: {page: number, lastpage: number, pageChanged: (page: number) => void}) =>{


    const next = () => {
        if(props.page < props.lastpage){
          props.pageChanged(props.page + 1);
        }
      }
    
      const prev = () => {
        if(props.page > 1){
            props.pageChanged(props.page - 1);
        }
      }

    return ( 
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

        );
    
}

export default Paginator;