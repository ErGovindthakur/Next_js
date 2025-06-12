import { Button } from "@/components/ui/button";
import { prisma } from "@/lib/prisma";
import Link from "next/link";
import React from "react";

const page = async () => {
  // getting snippet data here

  const snippets = await prisma.snippet.findMany();

  return (
    <div className="w-full h-screen">
      <h1 className="font-bold text-2xl">Home</h1>
      <div className="flex justify-between items-center w-full">
        <p className="text-lg">Snippets</p>

        <Link href={"/snippet/new"}>
          <Button className="bg-blue-500 text-white">New</Button>
        </Link>
      </div>

      <div className="w-full my-3">
        {snippets.map((snippet) => (
          <div key={snippet.id} className="w-full">
            <div className="w-full flex justify-between gap-3 my-2 bg-gray-100 py-2 rounded-md px-3">
              <h1>{snippet.title}</h1>
              <Link href={`/snippet/${snippet.id}`}>
                <Button variant={"link"}>View</Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
