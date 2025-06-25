'use client'
import React, { useEffect, useState } from 'react'
import { User } from '@/types/UserType';
const ClientSidePage = () => {
     const [user,setUser] = useState<User[]>([]);

     const handleApi = async() => {
          try{
               const res = await fetch("https://jsonplaceholder.typicode.com/users");
               const data = await res.json();
               setUser(data);

          }catch(err){
               console.log(err)
          }

     }

     useEffect(()=>{
          handleApi()
     },[])

     if(user.length === 0) return <h1>Data is Loading...</h1>
     console.log(user)

  return (
    <div>
     <h1 className='text-2xl font-bold'>User Data list from client side</h1>
     <div>
          {
               user.map((data,index)=>{
                    return <div key={data?.id || index}>
                         <p>Name -: {data?.name || "John Doe"}</p>
                         <p>Email-: {data?.email|| "Example@gmail.com"}</p>
                         <p>City -: {data?.address?.city || "Bihar"} </p>
                         <p>Phone No -: {data?.phone || "123"} </p>
                    </div>
               })
          }
     </div>
    </div>
  )
}

export default ClientSidePage