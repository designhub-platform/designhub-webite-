'use client'
import { BiSolidUser, BiUser } from "react-icons/bi";
import { GoHome, GoHomeFill } from "react-icons/go";
import { IoSearchOutline } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import { BsFillGridFill, BsGrid, BsSearch } from "react-icons/bs";


import { BottomMenuFragments } from "./fragments";

export function BottomMenu() {
  return (
    <BottomMenuFragments.Root>
      <BottomMenuFragments.Icon
        href="/"
        icon={GoHome}
        iconActive={GoHomeFill}
      />
      <BottomMenuFragments.Icon
        href="/designs"
        icon={BsGrid}
        iconActive={BsFillGridFill}
      />


      <BottomMenuFragments.Icon
        href="/explorar"
        icon={IoSearchOutline}
        iconActive={BsSearch}
      />

      
      <BottomMenuFragments.Icon
        href="/perfil"
        icon={CiUser}
        iconActive={BiSolidUser}
      />
    </BottomMenuFragments.Root>
  );
}