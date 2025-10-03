'use client'
import { SearchProps } from '@/types'
import React from 'react'

export default function SearchBar({ onChange }: SearchProps) {

  const [search, setSearch] = React.useState("")

  const handleSearchChange = (value: string) => {
    setSearch(value)
    onChange(value)
  }

  return (
    <div className="w-full" data-testid="search-bar">
      <input
        placeholder="Buscar productos..."
        value={search}
        onChange={(e) => handleSearchChange(e.target.value)}
        className="w-full p-2 border rounded-md focus:ring focus:outline-none"
        aria-label="Buscar productos"
        data-testid="search-input"
      />
    </div>
  )
}