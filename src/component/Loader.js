// import React from 'react'
import React, {useState, useEffect } from 'react'
import axios from 'axios'
import Usercard from './Usercard'

function Loader(props){

        const url = `https://reqres.in/api/users?page=${props.pageno}`;
        const [products, setProducts] = useState(
            {
            loading : false,
            data : null,
            error : false
            }
        )
        useEffect(()=> {
            setProducts({
            loading : true,
            data : null,
            error : false
            })
            axios.get(url)
            .then(response => {
            setProducts({
                loading : false,
                data : response.data,
                error : false
            })
            })
            .catch(()=>{
            setProducts({
                loading : false,
                data : null,
                error : true
            })

            })
        },[url])

        let content = null
        if(products.error){
            content =<p>
            there was an console.error please refresh or try again later.
            </p>
        }
        if(products.loading){
            content = <Loader ></Loader>
        }
        if(products.data){
            console.log("products.data",products.data)
            console.log("products.data.data",products.data.data)

            content =  products.data.data.map((product, key)=>{
            return (
            <div className="userlist">
                <Usercard product={product} key={key} />
            </div>
            )
            }
            )
        }
        return (
            <div>
            <h1>
                ALL DETAILS
            </h1>
            {content}
            </div>
        );


}
export default Loader