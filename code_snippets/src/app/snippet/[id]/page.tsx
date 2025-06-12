import { Button } from "@/components/ui/button";
import { prisma } from "@/lib/prisma";
import Link from "next/link";
import React from "react";
import { deleteSnippet } from "@/actions";
// defining type

type snippetDetails = {
     params : Promise<{id:string}>
}
const page : React.FC<snippetDetails> =  async ({ params }) => {
  const id = parseInt((await params).id);


  const snippet = await prisma.snippet.findUnique({
     where:{
          id
     }
  })

  if(!snippet) return <h1>Snippet not found...</h1>
  
  const handleDelete = deleteSnippet.bind(null,snippet?.id);

  return <div className="flex flex-col gap-5">
     <h1 className="my-3">Snippet Detail Page...</h1>
     <div className="w-full flex justify-between">
          <h1>{snippet?.title}</h1>
          <div className="flex gap-2.5 justify-center">
               <Link href={`/snippet/${id}/edit`}>
               <Button variant={"secondary"}>Edit</Button>
               </Link>
               <form action={handleDelete}>
               <Button variant={"destructive"}>Delete</Button>
               </form>
          </div>
     </div>
     <div>
          <pre className="w-full p-3 bg-gray-300">
               <code>
                    {snippet.code}
               </code>
          </pre>
     </div>
  </div>;
};

export default page;
