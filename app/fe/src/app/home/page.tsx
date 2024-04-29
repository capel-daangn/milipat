"use client";

import { IconLogo, IconLogoSquare } from "@/components/common/icons";
import SearchBar from "@/components/search-bar";
import { Button, Card, CardFooter, Spacer } from "@nextui-org/react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState, useRef } from "react";
import { useIsMobile } from "@/hooks/useMediaQuery";
import HorizontalSlider from "@/components/horizontal-slider";
import { useQuery } from "@tanstack/react-query";
import ChartNetwork from "@/components/chart/network-chart";
import ThreeRender from "@/components/3d-render";

import TextBubble from "@/components/text-bubble";
import FooterTray from "@/components/common/footer-tray";

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
      {(queryIndexOfTabs.data as string) == "chatbot" && (
        <ChatbotView></ChatbotView>
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
    <div className="flex w-full flex-col items-center justify-center gap-4 px-4">
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
          미래 기술 강군을 위한,
          <br /> 방산 분야 특허 관리 지능형 플랫폼
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
      <div className="h-full w-full max-w-[1200px] space-y-8 pb-8 pt-[100px]">
        <div
          className={`grid h-full w-full items-center gap-4 px-4 ${
            mobile ? "grid-cols-1 grid-rows-3" : "grid-cols-3 grid-rows-1"
          }`}
        >
          {[
            {
              name: "지역 기반 분석",
              description:
                "특허의 네트워크 분석은 특허 데이터를 활용하여 기술 분야에서의 연결과 상호작용을 이해하는 과정입니다.",
              content: <></>,
              bgImg: "/images/background/map.jpg",
            },
            {
              name: "추세 기반 분석",
              description:
                "특허의 네트워크 분석은 특허 데이터를 활용하여 기술 분야에서의 연결과 상호작용을 이해하는 과정입니다.",
              content: <></>,
              bgImg: "/images/background/trend.jpg",
            },
            {
              name: "비교 기반 분석",
              description:
                "특허의 네트워크 분석은 특허 데이터를 활용하여 기술 분야에서의 연결과 상호작용을 이해하는 과정입니다.",
              content: <></>,
              bgImg: "/images/background/compare.jpg",
            },
          ].map((e, i) => {
            return (
              <Card
                key={i}
                className={`row-span-1 ${
                  mobile ? "aspect-[3/1]" : "aspect-[3/2]"
                } gap-4 bg-black/50 bg-cover bg-center p-6 bg-blend-darken`}
                isPressable
                style={{ backgroundImage: `url('${e.bgImg}')` }}
              >
                <p
                  className={`${
                    mobile ? "text-xl" : "text-2xl"
                  } break-keep font-bold text-white`}
                >
                  {e.name}
                </p>
                {!mobile && (
                  <p className="break-keep text-start text-sm leading-relaxed text-[#ffffff]">
                    {e.description}
                  </p>
                )}
              </Card>
            );
          })}
        </div>
        <div
          className={`grid h-full w-full items-center gap-4 px-4 ${
            mobile ? "grid-cols-2 grid-rows-2" : "grid-cols-4 grid-rows-1"
          }`}
        >
          {[
            {
              name: "기술 동향 분석",
              description:
                "특허의 네트워크 분석은 특허 데이터를 활용하여 기술 분야에서의 연결과 상호작용을 이해하는 과정입니다.",
              content: <></>,
            },
            {
              name: "키워드 네트워크 분석",
              description:
                "특허의 네트워크 분석은 특허 데이터를 활용하여 기술 분야에서의 연결과 상호작용을 이해하는 과정입니다.",
              content: <></>,
            },
            {
              name: "특허 유사도 분석",
              description:
                "특허의 네트워크 분석은 특허 데이터를 활용하여 기술 분야에서의 연결과 상호작용을 이해하는 과정입니다.",
              content: <></>,
            },
            {
              name: "국가 경쟁력 분석",
              description:
                "특허의 네트워크 분석은 특허 데이터를 활용하여 기술 분야에서의 연결과 상호작용을 이해하는 과정입니다.",
              content: <></>,
            },
          ].map((e, i) => {
            return (
              <Card
                key={i}
                className="row-span-1 flex h-full w-full flex-col items-center justify-center gap-4 p-8"
                isPressable
              >
                <p
                  className={`${
                    mobile ? "text-md" : "text-xl"
                  } break-keep font-bold`}
                >
                  {e.name}
                </p>
                {!mobile && (
                  <p className="break-keep text-start text-sm leading-relaxed">
                    {e.description}
                  </p>
                )}
              </Card>
            );
          })}
        </div>
        <div className="col-span-4 h-fit w-full">
          <HorizontalSlider
            title="# 나의 최근 분석 프로젝트"
            width={300}
            height={400}
            backgroundColor="#1D4A83"
            content={[
              {
                title: "평택 시티 러닝 챌린지",
                text: "평택의 도심을 뛰면서 온천을 즐기고 도심의 활력을 느껴보세요!",
                // bgImgSrc: "/images/thumbnail/running.jpg",
                bgColor: "#1D4A83",
                tags: ["러닝"],
              },
              {
                title: "인천 자전거 해맞이 투어",
                text: "인천의 해안 도로를 따라 해돋이를 보며 자전거 탐험을 즐겨보세요!",
                // bgImgSrc: "/images/thumbnail/cycle.jpg",
                bgColor: "#1D4A83",
                tags: ["자전거"],
              },
              {
                title: "대전 도심 미니 마라톤",
                text: "대전의 도심을 달리는 마라톤에 참여하여 도시의 에너지를 느껴보세요.",
                // bgImgSrc: "/images/thumbnail/marathon.jpg",
                bgColor: "#1D4A83",
                tags: ["마라톤"],
              },
              {
                title: "울산 해안 플로깅 어드벤처",
                text: "울산의 해안을 따라 뛰면서 쓰레기를 주워 깨끗한 해안을 만들어 보세요. ",
                // bgImgSrc: "/images/thumbnail/suwon.jpg",
                bgColor: "#1D4A83",
                tags: ["플로깅"],
              },
              {
                title: "인천 자전거 해맞이 투어",
                text: "인천의 해안 도로를 따라 해돋이를 보며 자전거 탐험을 즐겨보세요!",
                // bgImgSrc: "/images/thumbnail/cycle.jpg",
                bgColor: "#1D4A83",
                tags: ["자전거"],
              },
              {
                title: "대전 도심 미니 마라톤",
                text: "대전의 도심을 달리는 마라톤에 참여하여 도시의 에너지를 느껴보세요.",
                // bgImgSrc: "/images/thumbnail/marathon.jpg",
                bgColor: "#1D4A83",
                tags: ["마라톤"],
              },
              {
                title: "울산 해안 플로깅 어드벤처",
                text: "울산의 해안을 따라 뛰면서 쓰레기를 주워 깨끗한 해안을 만들어 보세요. ",
                // bgImgSrc: "/images/thumbnail/suwon.jpg",
                bgColor: "#1D4A83",
                tags: ["플로깅"],
              },
            ]}
          ></HorizontalSlider>
        </div>
        <div className="col-span-4 h-fit w-full">
          <HorizontalSlider
            title="# 최근 조회한 군용장비"
            width={250}
            height={250}
            backgroundColor="#1D4A8330"
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

function ChatbotView(props: any) {
  const [inputText, setInputText] = useState("");
  const messageEndRef = useRef<HTMLDivElement | null>(null);
  const [dialogContext, setDialogContext] = useState([
    {
      isAnimated: true,
      isSent: false,
      isLoading: false,
      imgSrc: "/images/logo.png",
      name: "MiliPat 챗봇",
      text: "어떻게 도와드릴까요?",
    },
  ]);

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
    if (dialogContext[dialogContext.length - 1].isSent == true) {
      // setIsLoading(true);
      const timer = setTimeout(() => {
        // setIsLoading(false);
        setDialogContext([
          ...dialogContext,
          {
            isAnimated: true,
            isSent: false,
            isLoading: false,
            imgSrc: "11",
            name: "둘레 AI",
            text: "현재 프론트엔드 테스트 과정 중이며, 이로 인해 질의어에 대한 응답을 담당하는 LLM 서버와 연결되어 있지 않습니다. 프론트엔드 개발 및 테스트가 완료되는 대로 다시 연동될 예정입니다.",
            // text: "k9 자주포 사격통제장치에 문제가 발생하셨군요.이런 문제가 발생시에 총 3가지의 조치 방법이 있습니다.\n\n1. 일부 측량계 장치의 과부하로 인한 오류입니다. 이 경우, 장비를 완전히 재부팅하고 다시한번 세팅하셔야합니다.\n\n2. 광학센서 장치의 노후화 문제입니다.\n이 장치의 수명은 약 5년이며, 이 기간이 지났을 경우에는 정비근무대를 통한 교체가 필요합니다.\n\n3. 중앙처리장치와 전원이 접촉 불량인 경우입니다.",
          },
        ]);
      }, 500);
    }
  }, [dialogContext]);

  return (
    <div
      className={`grid h-screen w-full max-w-[1200px] gap-4 pt-[100px]`}
      style={{
        gridTemplateColumns: mobile ? "1fr" : "auto 1fr",
        gridTemplateRows: mobile ? "1fr" : "1fr",
      }}
    >
      {/*  */}
      {!mobile && (
        <div className="flex h-full w-full flex-col gap-4 overflow-auto p-6 py-8">
          <div
            className="flex h-min w-min gap-4 whitespace-nowrap scrollbar-hide"
            style={{ flexDirection: mobile ? "row" : "column" }}
          >
            {[1, 2, 3].map((e, i) => {
              return (
                <Card
                  key={i}
                  style={{ flexDirection: mobile ? "row" : "column" }}
                  className="flex aspect-[4/1] h-[70px] w-full items-start justify-center border-1 p-4 drop-shadow-md"
                  isPressable
                  shadow={"none"}
                >
                  {e}
                </Card>
              );
            })}
          </div>
        </div>
      )}

      {/*  */}
      <div
        className={`${
          mobile ? "pb-1" : ""
        } relative flex h-full w-full flex-col items-center justify-start`}
        style={{
          display: "grid",
          gridTemplateRows: "1fr auto",
          gridTemplateColumns: "1fr",
          gap: "1px",
        }}
      >
        <div className="flex h-full w-full flex-col items-center overflow-y-auto px-4 py-4">
          {dialogContext.map((e, i) => {
            return (
              <TextBubble
                key={i}
                // indexStage={indexStage}
                isLoading={false}
                isAnimated={e.isAnimated}
                isSent={e.isSent}
                imgSrc={"1"}
                name={e.name}
                text={e.text}
                isLast={i == dialogContext.length - 1}
              ></TextBubble>
            );
          })}
          <div ref={messageEndRef} className="h-[100px]"></div>
        </div>
        <div className="flex h-fit w-full flex-col items-center">
          <FooterTray
            dialogContext={dialogContext}
            setDialogContext={setDialogContext}
            showInput
            setIsModalVisible={props.setIsModalVisible}
          ></FooterTray>
        </div>
      </div>
    </div>
  );
}
