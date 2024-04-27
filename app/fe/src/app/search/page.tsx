"use client";

import { IconLogo } from "@/components/common/icons";
import SearchBar from "@/components/search-bar";
import { Button, Card, CardFooter, Spacer } from "@nextui-org/react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    AOS.init();
    return () => {};
  }, []);

  return (
    <section className="flex h-screen w-full flex-col items-center justify-center space-y-8">
      <div
        data-aos={"fade-in"}
        data-aos-duration="1000"
        className="flex flex-row items-end justify-center space-x-4"
      >
        <IconLogo fill="#000000" width={200}></IconLogo>
        <p className="select-none">
          미래기술강군을 위한,
          <br /> 방산분야 특허 관리 지능형 플랫폼
        </p>
      </div>
      <div
        data-aos={"fade-in"}
        data-aos-duration="750"
        className="mx-auto flex w-full flex-row items-end justify-center space-x-4"
      >
        <SearchBar></SearchBar>
      </div>
      <div className="flex flex-col items-center justify-center space-y-1">
        <p className="select-none text-xs font-bold text-black/30">
          Data-Provided by
        </p>
        <div className="flex select-none flex-row space-x-4 pb-4">
          <Image
            src={"/images/logo/data_portal.png"}
            width={120}
            height={40}
            alt={"logo"}
          ></Image>
          <Image
            src={"/images/logo/ai_hub.png"}
            width={120}
            height={40}
            alt={"logo"}
          ></Image>
          <Image
            src={"/images/logo/dod.png"}
            width={120}
            height={40}
            alt={"logo"}
          ></Image>
          <Image
            src={"/images/logo/dapa.png"}
            width={120}
            height={40}
            alt={"logo"}
          ></Image>
        </div>
      </div>
    </section>
  );
}
