"use client";

import { useUserStore } from "@/store/useUserStore";
import { ReactNode } from "react";

interface AppInitializerProps {
 user?: any;
 children: ReactNode;
}

export default function ZustandStateInitializer({
 user,
 children,
}: AppInitializerProps) {
 useUserStore.setState({
  user,
  // ...
 });

 // ...
 return children;
}