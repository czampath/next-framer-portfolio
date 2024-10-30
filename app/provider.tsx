import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { type ThemeProviderProps } from "next-themes/dist/types"
import { DevDetailsProvider } from "../context/DevDetailsContext"
import { fetchData } from "@/data/fetchData"

export async function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  const data = await fetchData()

  return <NextThemesProvider {...props}>
    <DevDetailsProvider data={data}>
      {children}
    </DevDetailsProvider>
  </NextThemesProvider>
}
