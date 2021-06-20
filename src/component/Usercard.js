import React from 'react'

function Usercard(props){
    return (
     <div className="Usercard" >
             <div className="info">
                <div className="subinfo">
                  <h4>Email : </h4> 
                  <span>  {props.product.email}  </span> 
                </div>
                <div className="subinfo">
                     <h4>first_name : </h4> 
                     <span>  {props.product.first_name}  </span> 
                </div>
                <div className="subinfo">
                     <h4>last_name : </h4> 
                     <span>  {props.product.last_name}  </span> 
                   </div>
             </div>
             <figure>
                <img src ={props.product.avatar} alt="userpic" ></img>
             </figure>
    </div>
    )
}

export default Usercard

