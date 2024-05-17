import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { IconGithub, IconLinkedIn } from "../common/icons";
import { useQueryClient, useQuery } from "@tanstack/react-query";
import { useState, useEffect } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";

export default function Footer(props: any) {
  const router = useRouter();

  return (
    <section
      className={`bottom-0 z-50 min-h-[60px] w-full pb-6 ${
        props.isFixed ? "" : ""
      }`}
    >
      <div className="mx-auto flex h-full max-w-[1200px] select-none flex-col items-center justify-center gap-1">
        <div className="flex h-full select-none flex-col items-center justify-center gap-1 leading-none">
          <p className="text-sm font-bold text-primary">TEAM MiliPat</p>
          <p className="text-tiny text-primary">
            2024년 국방 공공데이터 활용 경진대회
          </p>
        </div>
        <div className="flex h-full flex-row gap-1 ">
          <Button
            isIconOnly
            color={"primary"}
            variant={"light"}
            size={"sm"}
            onPress={() => {
              window.open("https://github.com/ziweek");
            }}
          >
            <IconGithub fill="#1D4A83" width={"20px"}></IconGithub>
          </Button>
          <Button
            isIconOnly
            variant={"light"}
            color={"primary"}
            size={"sm"}
            onPress={() => {
              window.open("https://www.linkedin.com/in/jiuk-kim-42248325a/");
            }}
          >
            <IconLinkedIn fill="#1D4A83" width={"20px"}></IconLinkedIn>
          </Button>
        </div>
      </div>
    </section>
  );
}
