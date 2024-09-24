'use client'
import { BiSolidUser, BiUser } from "react-icons/bi";
import { GoHome, GoHomeFill } from "react-icons/go";
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
        icon={BsSearch}
        iconActive={BsSearch}
      />

      
      <BottomMenuFragments.Icon
        href="/perfil"
        icon={BiUser}
        iconActive={BiSolidUser}
      />
    </BottomMenuFragments.Root>
  );
}