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
// import ChartNetwork from "@/components/chart/network-chart";
// import ThreeRender from "@/components/3d-render";

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
              name: "기술 동향 분석",
              description:
                "특허의 네트워크 분석은 특허 데이터를 활용하여 기술 분야에서의 연결과 상호작용을 이해하는 과정입니다.",
              content: <></>,
              bgImg: "/images/background/map.jpg",
            },
            {
              name: "특허 유사도 분석",
              description:
                "특허의 네트워크 분석은 특허 데이터를 활용하여 기술 분야에서의 연결과 상호작용을 이해하는 과정입니다.",
              content: <></>,
              bgImg: "/images/background/trend.jpg",
            },
            {
              name: "특허 경쟁력 진단",
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
                  mobile ? "aspect-[4/1]" : "aspect-[3/2]"
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
        {/* <div
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
        </div> */}
        <div className="col-span-4 h-fit w-full">
          <HorizontalSlider
            title="# 나의 최근 분석 프로젝트"
            width={210}
            height={280}
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
                onPress: () => {
                  console.log(11);
                },
              },
              {
                title: "인천 자전거 해맞이 투어",
                text: "인천의 해안 도로를 따라 해돋이를 보며 자전거 탐험을 즐겨보세요!",
                bgImgSrc: "/images/thumbnail/cycle.jpg",
                tags: ["자전거"],
                onPress: () => {
                  console.log(11);
                },
              },
              {
                title: "대전 도심 미니 마라톤",
                text: "대전의 도심을 달리는 마라톤에 참여하여 도시의 에너지를 느껴보세요.",
                bgImgSrc: "/images/thumbnail/marathon.jpg",
                tags: ["마라톤"],
                onPress: () => {
                  console.log(11);
                },
              },
              {
                title: "울산 해안 플로깅 어드벤처",
                text: "울산의 해안을 따라 뛰면서 쓰레기를 주워 깨끗한 해안을 만들어 보세요. ",
                bgImgSrc: "/images/thumbnail/suwon.jpg",
                tags: ["플로깅"],
                onPress: () => {
                  console.log(11);
                },
              },
              {
                title: "인천 자전거 해맞이 투어",
                text: "인천의 해안 도로를 따라 해돋이를 보며 자전거 탐험을 즐겨보세요!",
                bgImgSrc: "/images/thumbnail/cycle.jpg",
                tags: ["자전거"],
                onPress: () => {
                  console.log(11);
                },
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
            name: "MiliPat AI",
            // text: `K9 자주포, 일명 K9 썬더는 대한민국에서 개발 및 생산된 자주포 시스템입니다. 다음은 K9 자주포의 주요 제원입니다:

            // 1. **중량**: 전투중량으로 47톤에 이르며, 이는 차체의 전체적인 무게를 의미합니다.

            // 2. **전장**: 12m로, 자주포의 길이를 나타냅니다. 차체의 길이는 7.44m입니다.

            // 3. **전폭**: 3.5m로, 자주포의 폭을 의미합니다.

            // 4. **전고**: 3.28m로, 자주포의 높이를 나타냅니다.

            // 5. **주포**: 155mm CN98 곡사포가 장착되어 있습니다.

            // 6. **부무장**: 12.7mm K6 중기관총이 부착되어 있습니다.

            // 7. **급속사격 및 최대발사속도**: 분당 6~8발로, K9A3 버전에서는 분당 10~12발로 예정되어 있습니다.

            // 8. **최대사거리**: 최대 100km까지 활공탄을 사용하여 공격할 수 있습니다.

            // 9. **장갑**: 균질압연강판으로 전방위 35mm 이상의 장갑을 가지고 있습니다. 또한, 10m 위에서 떨어진 152mm 통상고폭탄에 대한 승무원 방호가 제공됩니다.

            // 10. **최고속도**: 67km/h로, 빠른 전투 이동이 가능합니다.

            // 11. **현수장치**: 유기압 현수장치를 사용합니다.

            // 12. **최대주행거리**: 360km로, 광범위한 전투 영역에서 활동할 수 있습니다.

            // 13. **엔진**: 초도 양산분은 MTU MT 881 Ka-500 디젤엔진을 사용하며, 추후 예정으로는 STX 엔진과 SMV-1000 디젤엔진이 개발 중에 있습니다.

            // 14. **승무원**: 5명이 탑승할 수 있습니다. 단, K9A2 및 개량형은 3명의 승무원이 필요합니다.

            // 15. **운용국**: 주로 대한민국에서 운용되며, 노르웨이, 에스토니아, 이집트, 인도, 튀르키, 폴란드, 핀란드, 호주, 우크라이나 등 여러 국가에서도 운용됩니다.`,

            // text: `로터 모듈은 이 드론 폭탄 장치의 중요한 구성 요소 중 하나입니다. 이 모듈은 장치의 상단에 위치하고 회전 모터에 의해 회전하는 로터(날개)를 포함합니다. 이러한 로터는 드론 폭탄 장치가 공중에서 안정적으로 날 수 있도록 제공되며, 이동 및 목표 지점으로의 정확한 이동을 가능하게 합니다.

            // 로터 모듈은 드론이 수행해야 하는 임무에 따라 다양한 크기와 형태로 설계될 수 있습니다. 예를 들어, 고정 지점에서의 정밀한 목표 지점까지의 이동이 필요한 경우 더 큰 로터가 사용될 수 있으며, 더 많은 안정성과 제어를 제공할 수 있습니다. 반면에, 더 빠른 속도와 민첩성이 필요한 임무에서는 작고 경량의 로터가 선택될 수 있습니다.

            // 이로써 드론은 다양한 환경에서 효과적으로 운용될 수 있으며, 적절한 로터 모듈은 장치의 안정성과 성능을 향상시키는 데 중요한 역할을 합니다.`,

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
            className="flex h-min w-min gap-2 whitespace-nowrap scrollbar-hide"
            style={{ flexDirection: mobile ? "row" : "column" }}
          >
            {[
              { text: "휴대용 드론 폭격 장치" },
              { text: "K9 자주포 사격통제장치" },
            ].map((e, i) => {
              return (
                <Card
                  key={i}
                  style={{ flexDirection: mobile ? "row" : "column" }}
                  className="flex aspect-[4/1] h-[60px] w-full items-start justify-center border-1 p-4 text-sm drop-shadow-md"
                  isPressable
                  radius={"none"}
                  shadow={"none"}
                >
                  {e.text}
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
        } relative flex h-[85vh] w-full flex-col items-center justify-start overflow-scroll`}
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
