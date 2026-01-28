"use client"

import QueryProvider from "./clientProvider";

export default function Provider({
  children,
}: {
  children: React.ReactNode
}) {
  return (
        <QueryProvider>
            {children}
        </QueryProvider>
  )
}