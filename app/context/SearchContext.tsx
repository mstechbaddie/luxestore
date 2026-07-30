"use client";

import { createContext, useState, ReactNode } from "react";

interface SearchContextType {
  search: string;
  setSearch: (value: string) => void;
}

export const SearchContext = createContext<SearchContextType | null>(null);

export default function SearchProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [search, setSearch] = useState("");

  return (
    <SearchContext.Provider value={{ search, setSearch }}>
      {children}
    </SearchContext.Provider>
  );
}