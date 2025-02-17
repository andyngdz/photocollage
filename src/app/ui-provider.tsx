"use client";

import { HeroUIProvider } from "@heroui/react";
import { FC, PropsWithChildren } from "react";

export const UIProvider: FC<PropsWithChildren> = ({ children }) => {
  return <HeroUIProvider>{children}</HeroUIProvider>;
};
