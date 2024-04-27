"use client";

import Header from "@/components/layout/header";
import { usePathname, useSearchParams } from "next/navigation";

export default function SearchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const searchedText = searchParams.get("query");

  return (
    <section>
      <Header
        isLogoVisible={pathname !== "/search"}
        isSearchBarVisible={pathname !== "/search"}
        searchedText={searchedText || ""}
      ></Header>
      {children}
    </section>
  );
}
