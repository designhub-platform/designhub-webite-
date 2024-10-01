'use client'
import { BiSolidUser } from "react-icons/bi";
import { GoHome, GoHomeFill } from "react-icons/go";
import { IoSearchOutline } from "react-icons/io5";
import { FiUser } from "react-icons/fi";
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
        icon={FiUser}
        iconActive={BiSolidUser}
      />
    </BottomMenuFragments.Root>
  );
}