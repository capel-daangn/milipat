"use client";

import Header from "@/components/layout/header";
import { usePathname, useSearchParams } from "next/navigation";
import { addListener, launch } from "devtools-detector";
import { useEffect, useState } from "react";
import useIsDevToolsOpen from "@/hooks/useDevtoolsDetector";
import { LottieSecurityCheck } from "@/components/common/lotties";

export default function SearchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const searchedText = searchParams.get("query");
  const isDevtoolsOpen = useIsDevToolsOpen();

  return (
    <section className="flex flex-col items-center">
      {isDevtoolsOpen ? (
        <div className="flex h-screen w-screen select-none flex-col items-center justify-center gap-8">
          <div className="h-[200px] w-fit overflow-clip">
            <LottieSecurityCheck
              loop
              play
              height={250}
              color={"red"}
            ></LottieSecurityCheck>
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <p className="text-xl font-bold">
              클라이언트에서 개발자 도구가 감지되었습니다.
            </p>
            <p>이는 관리자에게 악의적인 사용으로 보고될 수 있습니다.</p>
          </div>
        </div>
      ) : (
        <>
          <Header
            isLogoVisible={pathname == "/home" ? false : true}
            isSearchBarVisible={pathname == "/home" ? false : true}
            searchedText={searchedText || ""}
          ></Header>
          {children}
        </>
      )}
    </section>
  );
}
