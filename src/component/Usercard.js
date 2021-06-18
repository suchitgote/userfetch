import React from 'react'

function Usercard(props){
    return (
     <div className="Usercard" >
             <div className="info">
                <h3>Email : {props.product.email}  </h3>
                <h3>First name : {props.product.first_name}  </h3>
                <h3>Last name : {props.product.last_name}  </h3>
             </div>
             <figure>
                <img src ={props.product.avatar} alt="userpic" ></img>
             </figure>
    </div>
    )
}

export default Usercard

