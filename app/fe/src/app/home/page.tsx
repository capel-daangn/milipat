"use client";

import { IconLogo, IconLogoSquare } from "@/components/common/icons";
import SearchBar from "@/components/search-bar";
import { Button, Card, CardFooter, Spacer } from "@nextui-org/react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { useIsMobile } from "@/hooks/useMediaQuery";
import HorizontalSlider from "@/components/horizontal-slider";
import { useQuery } from "@tanstack/react-query";
import ChartNetwork from "@/components/chart/network-chart";

export default function Home() {
  const queryIndexOfTabs = useQuery<any>({
    queryKey: ["indexOfTabs"],
    queryFn: () => {},
    refetchOnMount: true,
  });

  return (
    <section className="flex min-h-screen w-full flex-col items-center justify-center">
      {(queryIndexOfTabs.data as string) == "search" && (
        // <AnalysisView></AnalysisView>
        <SearchView></SearchView>
      )}
      {(queryIndexOfTabs.data as string) == "analysis" && (
        <AnalysisView></AnalysisView>
      )}
    </section>
  );
}

function SearchView(props: any) {
  const isMobile = useIsMobile();
  const [mobile, setMobile] = useState<boolean>(false);

  useEffect(() => {
    const checkResize = () => {
      if (isMobile) {
        setMobile(true);
      } else {
        setMobile(false);
      }
    };
    checkResize();
  }, [isMobile]);

  useEffect(() => {
    AOS.init();
    return () => {};
  }, []);

  return (
    <div className="flex w-full flex-col items-center justify-center gap-4  px-4">
      <div
        data-aos={"fade-in"}
        data-aos-duration="1000"
        className="flex flex-row items-center justify-center gap-2"
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
        data-aos-duration="1500"
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
    </div>
  );
}

function AnalysisView(props: any) {
  const isMobile = useIsMobile();
  const [mobile, setMobile] = useState<boolean>(false);

  useEffect(() => {
    const checkResize = () => {
      if (isMobile) {
        setMobile(true);
      } else {
        setMobile(false);
      }
    };
    checkResize();
  }, [isMobile]);

  return (
    <>
      <div className="h-full w-full max-w-[1200px] pb-8 pt-[100px]">
        <div
          className={`grid h-full w-full items-center gap-4 px-4 ${
            mobile ? "grid-cols-2 grid-rows-2" : "grid-cols-4 grid-rows-1"
          }`}
        >
          {[
            {
              name: "네트워크 분석",
              description:
                "특허의 네트워크 분석은 특허 데이터를 활용하여 기술 분야에서의 연결과 상호작용을 이해하는 과정입니다.",
            },
            {
              name: "네트워크 분석",
              description:
                "특허의 네트워크 분석은 특허 데이터를 활용하여 기술 분야에서의 연결과 상호작용을 이해하는 과정입니다.",
            },
            {
              name: "네트워크 분석",
              description:
                "특허의 네트워크 분석은 특허 데이터를 활용하여 기술 분야에서의 연결과 상호작용을 이해하는 과정입니다.",
            },
            {
              name: "네트워크 분석",
              description:
                "특허의 네트워크 분석은 특허 데이터를 활용하여 기술 분야에서의 연결과 상호작용을 이해하는 과정입니다.",
            },
          ].map((e, i) => {
            return (
              <Card
                key={i}
                className="row-span-1 h-full w-full gap-4 p-8"
                isPressable
              >
                <p className={`${mobile ? "text-lg" : "text-2xl"} font-bold`}>
                  {e.name}
                </p>
                {!mobile && (
                  <p className="break-keep text-start text-sm leading-relaxed">
                    {e.description}
                  </p>
                )}
                {/* <ChartNetwork></ChartNetwork> */}
              </Card>
            );
          })}
        </div>
        <div className="col-span-4 h-fit w-full pt-8">
          <HorizontalSlider
            title="# 나의 최근 분석 프로젝트"
            width={300}
            height={400}
            backgroundColor="#00000075"
            content={[
              {
                title: "평택 시티 러닝 챌린지",
                text: "평택의 도심을 뛰면서 온천을 즐기고 도심의 활력을 느껴보세요!",
                bgImgSrc: "/images/thumbnail/running.jpg",
                tags: ["러닝"],
              },
              {
                title: "인천 자전거 해맞이 투어",
                text: "인천의 해안 도로를 따라 해돋이를 보며 자전거 탐험을 즐겨보세요!",
                bgImgSrc: "/images/thumbnail/cycle.jpg",
                tags: ["자전거"],
              },
              {
                title: "대전 도심 미니 마라톤",
                text: "대전의 도심을 달리는 마라톤에 참여하여 도시의 에너지를 느껴보세요.",
                bgImgSrc: "/images/thumbnail/marathon.jpg",
                tags: ["마라톤"],
              },
              {
                title: "울산 해안 플로깅 어드벤처",
                text: "울산의 해안을 따라 뛰면서 쓰레기를 주워 깨끗한 해안을 만들어 보세요. ",
                bgImgSrc: "/images/thumbnail/suwon.jpg",
                tags: ["플로깅"],
              },
              {
                title: "인천 자전거 해맞이 투어",
                text: "인천의 해안 도로를 따라 해돋이를 보며 자전거 탐험을 즐겨보세요!",
                bgImgSrc: "/images/thumbnail/cycle.jpg",
                tags: ["자전거"],
              },
              {
                title: "대전 도심 미니 마라톤",
                text: "대전의 도심을 달리는 마라톤에 참여하여 도시의 에너지를 느껴보세요.",
                bgImgSrc: "/images/thumbnail/marathon.jpg",
                tags: ["마라톤"],
              },
              {
                title: "울산 해안 플로깅 어드벤처",
                text: "울산의 해안을 따라 뛰면서 쓰레기를 주워 깨끗한 해안을 만들어 보세요. ",
                bgImgSrc: "/images/thumbnail/suwon.jpg",
                tags: ["플로깅"],
              },
            ]}
          ></HorizontalSlider>
        </div>
        <div className="col-span-4 h-fit w-full pt-8">
          <HorizontalSlider
            title="# 인기 있는 분석 프로젝트"
            width={400}
            height={200}
            backgroundColor="#00000075"
            content={[
              {
                title: "평택 시티 러닝 챌린지",
                text: "평택의 도심을 뛰면서 온천을 즐기고 도심의 활력을 느껴보세요!",
                bgImgSrc: "/images/thumbnail/running.jpg",
                tags: ["러닝"],
              },
              {
                title: "인천 자전거 해맞이 투어",
                text: "인천의 해안 도로를 따라 해돋이를 보며 자전거 탐험을 즐겨보세요!",
                bgImgSrc: "/images/thumbnail/cycle.jpg",
                tags: ["자전거"],
              },
              {
                title: "대전 도심 미니 마라톤",
                text: "대전의 도심을 달리는 마라톤에 참여하여 도시의 에너지를 느껴보세요.",
                bgImgSrc: "/images/thumbnail/marathon.jpg",
                tags: ["마라톤"],
              },
              {
                title: "울산 해안 플로깅 어드벤처",
                text: "울산의 해안을 따라 뛰면서 쓰레기를 주워 깨끗한 해안을 만들어 보세요. ",
                bgImgSrc: "/images/thumbnail/suwon.jpg",
                tags: ["플로깅"],
              },
              {
                title: "인천 자전거 해맞이 투어",
                text: "인천의 해안 도로를 따라 해돋이를 보며 자전거 탐험을 즐겨보세요!",
                bgImgSrc: "/images/thumbnail/cycle.jpg",
                tags: ["자전거"],
              },
              {
                title: "대전 도심 미니 마라톤",
                text: "대전의 도심을 달리는 마라톤에 참여하여 도시의 에너지를 느껴보세요.",
                bgImgSrc: "/images/thumbnail/marathon.jpg",
                tags: ["마라톤"],
              },
              {
                title: "울산 해안 플로깅 어드벤처",
                text: "울산의 해안을 따라 뛰면서 쓰레기를 주워 깨끗한 해안을 만들어 보세요. ",
                bgImgSrc: "/images/thumbnail/suwon.jpg",
                tags: ["플로깅"],
              },
            ]}
          ></HorizontalSlider>
        </div>
      </div>
    </>
  );
}
