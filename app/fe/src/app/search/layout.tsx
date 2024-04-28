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
    <section className="flex flex-col items-center">
      <Header
        isLogoVisible={pathname == "/search" ? false : true}
        isSearchBarVisible={pathname == "/search" ? false : true}
        searchedText={searchedText || ""}
      ></Header>
      {children}
    </section>
  );
}
