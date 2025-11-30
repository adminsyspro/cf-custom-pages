"use client";

import { HeroUIProvider } from "@heroui/react";
import { useRouter } from "next/router";
import type { ReactNode } from "react";

export interface ProvidersProps {
  children: ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  const router = useRouter();

  return (
    <HeroUIProvider navigate={(path) => router.push(path)}>
      <main className="antialiased">{children}</main>
    </HeroUIProvider>
  );
}
