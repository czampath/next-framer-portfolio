import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { type ThemeProviderProps } from "next-themes/dist/types"
import { DevDetailsProvider } from "../context/DevDetailsContext"
import { fetchData } from "@/data/fetchData"
import { StatContextProvider } from "@/context/StatContext"

export async function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  const devData = await fetchData()

  return <NextThemesProvider {...props}>
    <DevDetailsProvider data={devData}>
      <StatContextProvider>
        {children}
      </StatContextProvider>
    </DevDetailsProvider>
  </NextThemesProvider>
}
