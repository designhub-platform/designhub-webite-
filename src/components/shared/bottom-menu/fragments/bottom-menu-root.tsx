
import type { ReactNode } from "react";

interface PreviousWritingRootProps {
  children: ReactNode;
}

export function BottomMenuRoot({ children }: PreviousWritingRootProps) {
  return (
    <div className="">
      <nav
        className="fixed bottom-0 z-30 flex w-full items-center justify-between rounded-tl-lg bg-white 
    px-8 py-4 transition-all "
      >
        {children}
      </nav>
    </div>
  );
}