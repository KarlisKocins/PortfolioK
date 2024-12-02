"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { AnimatePresence } from "framer-motion"
import { ThemeTransition } from "./theme-transition"

export function ThemeProvider({ children, ...props }: any) {
  return (
    <NextThemesProvider {...props}>
      <AnimatePresence mode="wait">
        <ThemeTransition />
      </AnimatePresence>
      {children}
    </NextThemesProvider>
  )
}

