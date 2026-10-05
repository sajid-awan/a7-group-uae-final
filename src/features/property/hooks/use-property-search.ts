"use client"

import * as React from "react"

export function usePropertySearch(initial = "") {
  const [query, setQuery] = React.useState(initial)
  const debounced = query.trim()

  return { query, setQuery, debounced }
}
