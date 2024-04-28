"use client";

import { IconLogo } from "@/components/common/icons";
import SearchBar from "@/components/search-bar";
import { Button, Card, CardFooter, Spacer } from "@nextui-org/react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { useIsMobile } from "@/hooks/useMediaQuery";

export default function Home() {
  const isMobile = useIsMobile();
  const [mobile, setMobile] = useState<boolean>(false);

  const checkResize = () => {
    if (isMobile) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  };

  useEffect(() => {
    checkResize();
  }, [isMobile]);

  useEffect(() => {
    AOS.init();
    return () => {};
  }, []);

  return (
    <section className="flex h-screen w-full flex-col items-center justify-center gap-4 px-4">
      <div
        data-aos={"fade-in"}
        data-aos-duration="1000"
        className="flex flex-row items-end justify-end gap-2"
      >
        <IconLogo fill="#000000" width={mobile ? 120 : 150}></IconLogo>
        <p
          className={`select-none font-bold ${
            mobile ? "text-tiny" : "text-md"
          }`}
        >
          미래기술강군을 위한,
          <br /> 방산분야 특허 관리 지능형 플랫폼
        </p>
      </div>
      <div
        data-aos={"fade-in"}
        data-aos-duration="750"
        className="mx-auto flex w-full flex-row items-end justify-center pb-16"
      >
        <SearchBar mobile></SearchBar>
      </div>
      <div className="fixed bottom-4 flex flex-col items-center justify-center gap-2">
        <p
          className={`select-none font-bold text-black/30 ${
            mobile ? "text-tiny" : "text-xs"
          }`}
        >
          Data Provided by
        </p>
        <div
          className={`select-none pb-4 ${
            mobile
              ? "grid grid-cols-2 grid-rows-2 gap-1"
              : "flex flex-row gap-2"
          }`}
        >
          {[
            "/images/logo/dod.png",
            "/images/logo/dapa.png",
            "/images/logo/data_portal.png",
            "/images/logo/ai_hub.png",
          ].map((e, i) => (
            <Image
              key={i}
              src={e}
              width={100}
              height={100}
              className={`${mobile ? "w-[80px]" : "w-[100px]"}`}
              alt={"logo"}
            ></Image>
          ))}
        </div>
      </div>
    </section>
  );
}
