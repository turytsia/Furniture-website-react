import React,{useEffect, useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

//http
import http from '../services.js'

export default function Users() {
    const [customers,setCustomers] = useState(null)
    async function getCustomers(){
        const {data} = await http.get(`/customer`)
        if(!data.success) return console.error(data.message)
        setCustomers(data.customers)
    }
    async function removeCustomer(id){
        const {data} = await http.delete(`/customer/${id}`)
        if(!data.success) return console.error(data.message)
        setCustomers(data.customers)
    }

    useEffect(()=>{
        getCustomers()
    },[])

    return (
        <section className="admin-users">
            <div className="wrapper">
                <div className="admin-inner">
                    <div className="admin-filter">
                        <button>
                            <h5>Clear List</h5>
                        </button>
                    </div>
                    {customers&&<div className="admin-users-list">
                        {customers.map(customer => <div key = {customer._id} className="admin-list-item">
                            <h5>{customer.email}</h5>
                            <button onClick = {()=>removeCustomer(customer._id)}>
                                <FontAwesomeIcon icon={faTrash} />
                            </button>
                        </div>)}
                    </div>}
                </div>
            </div>
        </section>
    )
}
