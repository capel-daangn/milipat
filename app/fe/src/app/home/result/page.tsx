"use client";

import FooterTray from "@/components/common/footer-tray";
import TextBubble from "@/components/text-bubble";
import { useIsMobile } from "@/hooks/useMediaQuery";
import {
  Button,
  Card,
  Link,
  Pagination,
  Accordion,
  AccordionItem,
} from "@nextui-org/react";
import { useQuery } from "@tanstack/react-query";
import AOS from "aos";
import "aos/dist/aos.css";
import { useCallback, useEffect, useRef, useState } from "react";
import { Radar } from "react-chartjs-2";

const dataset = [
  {
    title: "이중곡률반경 형성체 리브를 가지는 항공기 타이어",
    text: "이중곡률반경 형성체 리브를 가진 항공기 타이어는 최근 군사 분야에서의 주목을 받고 있습니다. 이 타이어는 항공기의 안전과 효율성을 높이는 데 기여하는 핵심 부품 중 하나입니다. 국방 분야에서의 인공지능 활용 추세 연구는 빠르게 진화하고 있으며, 무인 시스템 및 자율주행 기술과 결합되어 작전 효율성을 향상시키고 있습니다. 또한, 적응형 알고리즘과 사이버 보안 기술의 강화로 안전한 군사 환경을 조성하고 있습니다. 이러한 기술의 발전은 군사 작전에 있어서 더욱 효율적인 결과를 가져오고 있으며, 향후에는 다양한 도메인에서의 인공지능 적용이 더욱 늘어날 것으로 예상됩니다.",
    date: "2004-06-25",
    patId: "10-2004-0048382",
    href: "/home/detail",
  },
  {
    title: "숄더그루브 깊이를 축소시킨 소형 항공기 타이어",
    text: "숄더그루브 깊이를 축소시킨 소형 항공기 타이어는 최근 군사 분야에서의 주목을 받고 있습니다. 이 타이어는 항공기의 안전과 효율성을 높이는 데 기여하는 핵심 부품 중 하나입니다. 국방 분야에서의 인공지능 활용 추세 연구는 빠르게 진화하고 있으며, 무인 시스템 및 자율주행 기술과 결합되어 작전 효율성을 향상시키고 있습니다. 또한, 적응형 알고리즘과 사이버 보안 기술의 강화로 안전한 군사 환경을 조성하고 있습니다. 이러한 기술의 발전은 군사 작전에 있어서 더욱 효율적인 결과를 가져오고 있으며, 향후에는 다양한 도메인에서의 인공지능 적용이 더욱 늘어날 것으로 예상됩니다.",
    date: "2005-08-31",
    patId: "10-2004-0048381",
    href: "/home/detail",
  },
  {
    title: "포드 인양장치 하중시험용 치구",
    text: "포드 인양장치 하중시험용 치구는 최근 군사 분야에서의 주목을 받고 있습니다. 이 치구는 항공기의 안전과 효율성을 높이는 데 기여하는 핵심 부품 중 하나입니다. 국방 분야에서의 인공지능 활용 추세 연구는 빠르게 진화하고 있으며, 무인 시스템 및 자율주행 기술과 결합되어 작전 효율성을 향상시키고 있습니다. 또한, 적응형 알고리즘과 사이버 보안 기술의 강화로 안전한 군사 환경을 조성하고 있습니다. 이러한 기술의 발전은 군사 작전에 있어서 더욱 효율적인 결과를 가져오고 있으며, 향후에는 다양한 도메인에서의 인공지능 적용이 더욱 늘어날 것으로 예상됩니다.",
    date: "2004-03-02",
    patId: "10-2012-0133631",
    href: "/home/detail",
  },
  {
    title: "능동 배열 안테나의 성능 검증 시스템 및 방법",
    text: "능동 배열 안테나의 성능 검증 시스템 및 방법은 최근 군사 분야에서의 주목을 받고 있습니다. 이 시스템과 방법은 향상된 통신 기술을 통해 핵심 정보를 안전하게 전달하는 데 기여하고 있습니다. 국방 분야에서의 인공지능 활용 추세 연구는 빠르게 진화하고 있으며, 무인 시스템 및 자율주행 기술과 결합되어 작전 효율성을 향상시키고 있습니다. 또한, 적응형 알고리즘과 사이버 보안 기술의 강화로 안전한 군사 환경을 조성하고 있습니다. 이러한 기술의 발전은 군사 작전에 있어서 더욱 효율적인 결과를 가져오고 있으며, 향후에는 다양한 도메인에서의 인공지능 적용이 더욱 늘어날 것으로 예상됩니다.",
    date: "2015-01-23",
    patId: "10-2013-0005915",
    href: "/home/detail",
  },
  {
    title: "전술훈련을 위한 충격조끼",
    text: "전술훈련을 위한 충격조끼는 최근 군사 분야에서의 주목을 받고 있습니다. 이 충격조끼는 군인들의 안전을 보장하고 훈련 효율성을 높이는 데 기여합니다. 국방 분야에서의 인공지능 활용 추세 연구는 빠르게 진화하고 있으며, 무인 시스템 및 자율주행 기술과 결합되어 작전 효율성을 향상시키고 있습니다. 또한, 적응형 알고리즘과 사이버 보안 기술의 강화로 안전한 군사 환경을 조성하고 있습니다. 이러한 기술의 발전은 군사 작전에 있어서 더욱 효율적인 결과를 가져오고 있으며, 향후에는 다양한 도메인에서의 인공지능 적용이 더욱 늘어날 것으로 예상됩니다.",
    date: "2014-06-02",
    patId: "10-2014-0034219",
    href: "/home/detail",
  },
];

export default function Query() {
  const isMobile = useIsMobile();
  const [mobile, setMobile] = useState<boolean>(false);

  const queryIndexOfViews = useQuery<any>({
    queryKey: ["indexOfViews"],
    queryFn: () => {},
    refetchOnMount: true,
  });

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
    <section
      className="mx-auto flex w-full max-w-[1200px] flex-row px-4"
      style={{
        display: "grid",
        gridTemplateColumns: mobile ? "1fr" : "100px 600px 1fr",
        gap: "20px",
      }}
    >
      {/*  */}
      <div className="w-full">
        {/* <Button
          onClick={() => {
            setIsAnimationTriggered(!isAnimationTriggered);
          }}
        >
          11
        </Button> */}
      </div>
      {/*  */}
      <div className="flex flex-col items-start justify-center space-y-8">
        {/* <div
          // data-aos="zoom-in-down"
          // data-aos-duration="500"
          className={`w-full 
          ${isAnimationTriggered ? "" : ""}`}
        >
          <GptBox
            title="MiliPat-GPT 서치어드바이저"
            initialQuery="국방 인공지능 모델 기술과제 분석과 발전방안 연구"
          ></GptBox>
        </div> */}
        <div className="w-full space-y-2">
          {dataset.map((data, i) => {
            return (
              <Card
                key={i}
                className="w-full max-w-2xl space-y-2 border-0 p-4"
                isBlurred
                shadow={"none"}
                // isPressable
              >
                <div className="flex w-full flex-row items-end justify-between">
                  <div className="flex flex-col items-start justify-center">
                    <Link href={data.href}>
                      <p className="text-left text-lg font-bold leading-loose">
                        {data.title}
                      </p>
                    </Link>
                    <p className="text-left text-xs leading-loose text-secondary">
                      출원번호 {data.patId}, 출원일자 {data.date}
                    </p>
                  </div>
                  {/* <div className="space-x-2">
                    {[
                      {
                        text: "비교하기",
                        icon: <IconBookmark width={"20px"}></IconBookmark>,
                      },
                      {
                        text: "비교하기",
                        icon: <IconBookmark width={"20px"}></IconBookmark>,
                      },
                      {
                        text: "비교하기",
                        icon: <IconBookmark width={"20px"}></IconBookmark>,
                      },
                    ].map((button, i) => {
                      return (
                        <Button
                          key={i}
                          isIconOnly
                          size={"sm"}
                          variant={"shadow"}
                        >
                          {button.icon}
                        </Button>
                      );
                    })}
                  </div> */}
                </div>
                <p className="line-clamp-3 text-justify text-sm leading-loose">
                  {data.text}
                </p>
              </Card>
            );
          })}
          <div className="flex w-full flex-col items-center justify-center py-8">
            <Pagination
              total={10}
              initialPage={1}
              variant={"light"}
              showControls
            />
          </div>
        </div>
      </div>
      {/*  */}
      <div className="sticky top-16 flex h-full max-h-[500px] w-full flex-col px-4">
        {(queryIndexOfViews.data as string) == "analysis" && (
          <AnalysisView></AnalysisView>
        )}
        {(queryIndexOfViews.data as string) == "chatbot" && (
          <ChatbotView></ChatbotView>
        )}
      </div>
    </section>
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
    <div className={`flex h-full w-full gap-4`}>
      {/*  */}
      <Accordion
        className="h-fit border-1"
        defaultExpandedKeys={["1"]}
        fullWidth
        variant={"bordered"}
        keepContentMounted
      >
        <AccordionItem
          key="1"
          aria-label="wordCloud"
          title="워드 클라우드"
          subtitle="주요 키워드의 빈도를 강조하여 시각적으로 표현합니다."
          classNames={{ title: "text-md font-bold", subtitle: "text-tiny" }}
        >
          {/* <Cha></Cha> */}
        </AccordionItem>
        <AccordionItem
          key="2"
          aria-label="Accordion 2"
          title="방사형 그래프"
          subtitle="관련 키워드들을 연결성과 중요도를 시각적으로 파악할 수 있습니다."
          classNames={{ title: "text-md font-bold", subtitle: "text-tiny" }}
        >
          {/* <ChartRadar></ChartRadar> */}
        </AccordionItem>
        <AccordionItem
          key="3"
          aria-label="Accordion 3"
          title="네트워크 그래프"
          subtitle="핵심어 키워드 간의 관계와 연관성을 나타냅니다."
          classNames={{ title: "text-md font-bold", subtitle: "text-tiny" }}
        >
          {/* <ChartNetworkComponent></ChartNetworkComponent> */}
        </AccordionItem>
      </Accordion>
    </div>
  );
}

function ChatbotView(props: any) {
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
    <Card className="flex h-full max-h-[75vh] w-full flex-col border-1 shadow-none drop-shadow-none">
      <div
        className={`grid h-full w-full gap-4`}
        style={{
          gridTemplateColumns: false ? "1fr" : "1fr",
          gridTemplateRows: false ? "1fr" : "1fr",
        }}
      >
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
    </Card>
  );
}
