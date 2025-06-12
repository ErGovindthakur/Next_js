import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { prisma } from '@/lib/prisma'
import { redirect } from 'next/navigation'
import React from 'react'
// import toast from 'react-hot-toast'
const NewPage = () => {


  const createSnippet = async (formData: FormData) => {
    'use server' // ✅ Correct use of 'use server' directive for server action

    // ✅ Extracting form fields by their "name" attribute
    const title = formData.get("title") as string;
    const code = formData.get("code") as string;

    // ❌ MISTAKE: You missed the "data" wrapper inside prisma.create()
    // ✅ FIX: prisma.snippet.create({ data: { title, code } })
    const snippet = await prisma.snippet.create({
      data: {
        title,
        code,
      },
    });

    console.log(`created snippet -: ${snippet.code}`);

    // toast.success("Code snippet created...");
    redirect("/");
  };

  return (
    <div>
      <h1 className='text-blue-700 font-bold text-3xl'>Create New Code Snippet</h1>

      <form className='flex gap-5 flex-col mt-5' action={createSnippet}>
        <Label className='text-xl' htmlFor='title'>Title</Label>
        <Input type='text' name='title' id='title' placeholder='Enter your code title' />

        <Label className='text-xl' htmlFor='code'>Code</Label>
        <Textarea name='code' id='code' placeholder='type your code here..' rows={12} cols={90} />

        <div>
          <Button type='submit' className='px-12 py-6 bg-blue-700 text-white hover:bg-blue-600 cursor-pointer'>New</Button>
        </div>
      </form>
    </div>
  )
}

export default NewPage;
