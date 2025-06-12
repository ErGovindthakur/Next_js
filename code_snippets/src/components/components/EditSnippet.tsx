'use client'
import React, { useState } from 'react'
import Editor from '@monaco-editor/react';
import type { snippet } from "@prisma/client";
import { Button } from '../ui/button';
import { saveSnippet } from '@/actions';

const EditSnippet = ({snippet}:{snippet:snippet}) => {

     const [code , setCode ] = useState(snippet?.code);

     const handleSave = saveSnippet.bind(null,snippet.id, code);

     const handleChange = (val:string = "") => {
      setCode(val)
     }
  return (
    <div>
      <div className='text-xl font-bold text-blue-700'>Your code Editor Here...</div>
     <Editor
        height="50vh"
        theme='vs-dark'
        defaultLanguage="javascript"
        defaultValue={code}
        onChange={handleChange}
      />

      <form action={handleSave}>
        <Button className='bg-blue-700 text-white font-bold'>Save</Button>
      </form>
    </div>
  )
}

export default EditSnippet