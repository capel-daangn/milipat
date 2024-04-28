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
    <section className="flex h-screen w-full flex-col items-center justify-center gap-8 px-4">
      <div
        data-aos={"fade-in"}
        data-aos-duration="1000"
        className="flex flex-row items-end justify-end space-x-2"
      >
        <IconLogo fill="#000000" width={mobile ? 120 : 200}></IconLogo>
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
        className="mx-auto flex w-full flex-row items-end justify-center space-x-4"
      >
        <SearchBar mobile></SearchBar>
      </div>
      <div className="flex flex-col items-center justify-center gap-2">
        <p className="select-none text-xs font-bold text-black/30">
          Data Provided by
        </p>
        <div
          className={`select-none gap-2 ${
            mobile ? "grid grid-cols-2 grid-rows-2" : "flex flex-row pb-4"
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
              className={`${mobile ? "w-[100px]" : "w-[120px]"}`}
              alt={"logo"}
            ></Image>
          ))}
        </div>
      </div>
    </section>
  );
}
