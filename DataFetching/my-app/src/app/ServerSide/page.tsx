import React from 'react'
import { User } from '@/types/UserType';
const serverSide = async() => {

     const res = await fetch('https://jsonplaceholder.typicode.com/users',{
          cache:'no-store'
     })

     const data : User[] = await res.json();

if(data.length === 0) return <h1>Data is Loading...</h1>
  return (
    <div>
     <h1 className='text-2xl font-bold'>Server Side Rendering</h1>
     <div>
          {
               data.map((data)=>(
                    <div key={data?.id}>
                    <p>Name -: {data?.name || "John Doe"}</p>
                    <p>City -: {data?.address?.city || "Bihar"}</p>
                    <p>Email -: {data?.email || "example@gmail.com"}</p>
                    <p>phone -: {data?.phone || "123"}</p>
                    </div>
               ))
          }
     </div>
    </div>
  )
}

export default serverSide