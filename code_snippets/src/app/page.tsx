import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='w-full h-screen'>
      <h1 className='font-bold text-2xl'>Home</h1>
      <div className='flex justify-between items-center w-full'>
        <p className='text-lg'>Snippets</p>

        <Link href={"/snippet/new"}>
      <Button className='bg-blue-500 text-white'>New</Button>
        </Link>
      </div>
    </div>
  )
}

export default page