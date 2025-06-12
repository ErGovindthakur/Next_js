import EditSnippet from "@/components/components/EditSnippet";
import { prisma } from "@/lib/prisma";
import React from "react";

const EditSnippetPage = async({
  params,
}: {
  params: { id: string };
}) => {
  const id = parseInt(params.id);

  const snippet = await prisma.snippet.findUnique({
     where:{
          id
     }
  })

  if(!snippet) return <h1>Snippet not found...</h1>
  return <div>

     <EditSnippet snippet={snippet}/>
  </div>;
};

export default EditSnippetPage;
