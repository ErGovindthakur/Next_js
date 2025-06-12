import Image from "next/image";
import Link from "next/link";
import React from "react";
import vercel from "../../public/vercel.svg"
const Navbar = () => {
  return (
    <div className="w-full py-3 px-2 shadow-md shadow-gray-700">
      <div className="flex justify-between items-center px-10 py-5">
        <Link href={"/"}>
          <h1 className="flex gap-3 justify-center items-center">
            <Image src={vercel} alt="next Img logo" width={36}></Image>
            Logo
          </h1>
        </Link>
        <nav className="flex gap-5">
          <Link href={"/About"}>About</Link>
          <Link href={"/Services"}>Services</Link>
          <Link href={"/Blog"}>Blog</Link>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
