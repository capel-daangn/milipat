"use client";

import {
  Button,
  ButtonGroup,
  Card,
  Accordion,
  AccordionItem,
  Tabs,
  Tab,
} from "@nextui-org/react";
import { useEffect, useState, useRef } from "react";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import { Radar } from "react-chartjs-2";

import dynamic from "next/dynamic";
import { useIsMobile } from "@/hooks/useMediaQuery";

import toast, { Toaster } from "react-hot-toast";

import {
  Chart,
  RadialLinearScale,
  PointElement,
  LineElement,
  ArcElement,
} from "chart.js";
import ThreeRender from "@/components/3d-render";
import { useSearchParams } from "next/navigation";
import { IconBack, IconChat } from "@/components/common/icons";
import PdfRender from "@/components/pdf-render";
import ChartWordCloud from "@/components/chart/wordcloud-chart";
import ChatbotTab from "@/components/chatbot-tab";

const ChartNetworkComponent = dynamic(
  () => import("../../../components/chart/network-chart"),
  {
    ssr: false,
  },
);
Chart.register(RadialLinearScale, PointElement, LineElement, ArcElement);
const TldrawComponent = dynamic(
  () => import("../../../components/tldraw-component"),
  {
    ssr: false,
  },
);

export default function DetailPage(props: any): any {
  const searchParams = useSearchParams();

  const [type, setType] = useState<string | null>("patent");

  useEffect(() => {
    if (searchParams.get("type") && searchParams.get("type") != undefined) {
      setType(searchParams.get("type"));
    }
  }, [searchParams]);

  //
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [searchText, setSearchText] = useState("");

  const isMobile = useIsMobile();
  const [mobile, setMobile] = useState<boolean>(false);
  const [scale, setScale] = useState<number>(1.25);
  const [indexOfTab, setIndexOfTab] = useState<string>("chatbot");

  const [isSidebarVisible, setIsSidebarVisible] = useState<boolean>(true);

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
    toast(
      "본 데모 버전에서는\n운용비용 및 리소스 자원의 한계로 인해\n일부 기능이 제한될 수 있습니다.",
      {
        className: "leading-relaxed text-center font-bold",
        duration: 8000,
      },
    );
  }, []);

  return (
    <>
      <section
        className="mx-auto flex h-full w-full max-w-[1200px] items-center justify-between px-4"
        style={{
          flexDirection: mobile ? "column" : "row",
          display: "grid",
          gridTemplateColumns: mobile ? "1fr" : "100px 600px 1fr",
          gridTemplateRows: mobile ? "1fr 1fr" : "1fr",
        }}
      >
        <div
          className="relative col-span-2 flex h-full max-h-[85vh] min-h-fit w-full flex-col items-start justify-center gap-[20px]"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gridTemplateRows: "auto 1fr",
          }}
        >
          <Tabs
            aria-label="Options"
            variant={"underlined"}
            color={"primary"}
            onSelectionChange={(key: any) => {}}
            className="col-span-2"
          >
            <Tab key="result-search" title="문서 탭"></Tab>
          </Tabs>

          {/* <Card className="h-full w-[200px] p-4">
          {type == "patent" ? (
            <div className="flex h-full select-none flex-col gap-2">
              <p className="text-xl font-bold">휴대형 군사용 드론 폭탄 장치</p>
              <div className="flex flex-row gap-2">
                {["드론", "제어", "폭탄"].map((e, i) => (
                  <Chip key={i} color={"secondary"} size={"sm"}>
                    #{e}
                  </Chip>
                ))}
              </div>
              <p className="line-clamp-2 text-sm">
                본 특허는 휴대형 군사용 드론 폭탄 장치는 작은 크기의 드론에
                폭탄을 부착하여 적군을 타격하는 군사 전술 장치에 관한
                내용입니다.
              </p>
            </div>
          ) : (
            <div className="flex h-full select-none flex-col gap-2">
              <p className="text-xl font-bold">K9 자주곡사포</p>
              <div className="flex flex-row gap-2">
                {["국산", "자주포", "방산"].map((e, i) => (
                  <Chip key={i} color={"secondary"} size={"sm"}>
                    #{e}
                  </Chip>
                ))}
              </div>
              <p className="line-clamp-2 text-sm">
                대한민국 국군 포병 전력의 주력 장비이자 대한민국 방산업계의 효자
                상품으로 대한민국 국군뿐만 아니라 해외 여러 국가에서도 주력
                자주포로 운용한다.
              </p>
            </div>
          )}
        </Card> */}

          <Card
            shadow={"none"}
            radius={"none"}
            className="relative row-span-2 flex aspect-square overflow-scroll border-1"
          >
            {type == "patent" ? (
              <>
                <PdfRender
                  searchText={searchText}
                  pageNumber={pageNumber}
                  scale={scale}
                ></PdfRender>
                {isSidebarVisible ? (
                  <div className="absolute left-0 top-0 z-20 flex h-full w-[300px] flex-col items-start justify-start gap-2 border-r-1 bg-white p-4 drop-shadow-md">
                    <div className="flex h-fit w-full flex-row items-center justify-between">
                      <div className="flex flex-row gap-1 bg-primary-500 px-3 py-1">
                        <IconChat width={20}></IconChat>
                        <p className="text-md select-none font-bold">
                          AI 책갈피
                        </p>
                      </div>
                      <Button
                        className="rounded-none"
                        isIconOnly
                        variant={"flat"}
                        size={"sm"}
                        onPress={() => {
                          setIsSidebarVisible(false);
                        }}
                      >
                        <IconBack></IconBack>
                      </Button>
                    </div>
                    <Card
                      className="h-fit w-full select-none rounded-none bg-primary-300 p-2 text-sm"
                      shadow={"none"}
                    >
                      AI 책갈피 기능은 특허 문서를 분석하여 주요한 원문 문장을
                      표시해주는 기능입니다.
                    </Card>
                    <Accordion>
                      {[
                        {
                          title: "요약",
                          contents: [
                            {
                              text: "발명 내용",
                              sentence:
                                "본 발명은 소형으로 제작하여 용이하게 휴대할 수 있고, 신속하게 사용할 수 있으며, 근거리의 적군뿐만 아니라 일정 거리 이상의 적군 측으로 날려 정밀 공격할 수 있는 휴대형 드론 폭탄 장치에 관한 것",
                            },
                          ],
                        },
                        {
                          title: "청구범위",
                          contents: [
                            {
                              text: "청구항 1",
                              sentence:
                                "본 발명에 따르면, 장치 하우징; 상기 장치 하우징에 구비되는 회전 모터; 상기 장치 하우징의 상단부에서 상기 회전 모터의 회전축에 연결되어 구비되는 로터 모듈; 상기 장치 하우징에 구비되며, 하기 제어 모듈의 제어 신호의 의해 기폭하여 폭발하는 신관 어셈블리 모듈을 포함하는 살상 수단; 상기 장치 하우징에 구비되어 영상을 촬영하도록 구성되는 짐벌 카메라 모듈; 상기 회전 모터와 신관 어셈블리 모듈 및 짐벌 카메라 모듈에 대한 작동 전원의 공급 및 동작을 제어하는 제어 모듈; 및 상기 장치 하우징에 구비되며, 상기 제어 모듈에 전력을 공급하는 배터리 모듈;을 포함하는 것을 특징으로 하는 휴대형 군사용 드론 폭탄 장치가 제공된다.",
                            },
                          ],
                        },
                        {
                          title: "발명의 설명",
                          contents: [
                            {
                              text: "기술분야",
                              sentence:
                                "본 발명은 소형으로 제작하여 용이하게 휴대할 수 있고, 신속하게 사용할 수 있으며, 근거리의 적군뿐만 아니라 일정 거리 이상의 적군 측으로 날려 정밀 공격할 수 있는 휴대형 드론 폭탄 장치에 관한 것이다.",
                            },
                            {
                              text: "배경기술",
                              sentence:
                                "본 발명은 소형으로 제작하여 용이하게 휴대할 수 있고, 신속하게 사용할 수 있으며, 근거리의 적군뿐만 아니라 일정 거리 이상의 적군 측으로 날려 정밀 공격할 수 있는 휴대형 드론 폭탄 장치에 관한 것이다.",
                            },
                            {
                              text: "발명의 효과",
                              sentence:
                                "본 발명은 소형으로 제작하여 용이하게 휴대할 수 있고, 신속하게 사용할 수 있으며, 근거리의 적군뿐만 아니라 일정 거리 이상의 적군 측으로 날려 정밀 공격할 수 있는 휴대형 드론 폭탄 장치에 관한 것이다.",
                            },
                          ],
                        },
                      ].map((e, i) => {
                        return (
                          <AccordionItem
                            key={i + 1}
                            aria-label={e.title}
                            title={e.title}
                            classNames={{
                              title: "text-md",
                              content: "text-sm pl-2",
                            }}
                          >
                            <div className="flex flex-col gap-1">
                              {e.contents.map((c, i) => {
                                return (
                                  <Button
                                    onPress={() => {
                                      setSearchText(c.sentence);
                                    }}
                                    key={i}
                                    isIconOnly
                                    variant={"light"}
                                    className="w-fit px-2"
                                    disableRipple={true}
                                    disableAnimation={true}
                                  >
                                    {c.text}
                                  </Button>
                                );
                              })}
                            </div>
                          </AccordionItem>
                        );
                      })}
                    </Accordion>
                  </div>
                ) : (
                  <div className="absolute left-4 top-4 z-20 flex h-fit w-fit">
                    <div>
                      <Button
                        className="rotate-180 rounded-none"
                        isIconOnly
                        variant={"flat"}
                        size={"sm"}
                        onPress={() => {
                          setIsSidebarVisible(true);
                        }}
                      >
                        <IconBack></IconBack>
                      </Button>
                    </div>
                  </div>
                )}
                <div className="absolute bottom-4 z-10 flex w-full flex-col items-center justify-center py-2">
                  <ButtonGroup
                    color={"default"}
                    variant={"flat"}
                    radius={"none"}
                  >
                    <Button
                      isIconOnly
                      onPress={() => {
                        if (scale > 0.75) {
                          setScale(() => scale - 0.25);
                        }
                      }}
                    >
                      -
                    </Button>
                    <Button
                      isIconOnly
                      onPress={() => {
                        setScale(() => 1);
                      }}
                    >
                      <p className="text-tiny font-bold">{scale * 100}%</p>
                    </Button>
                    <Button
                      isIconOnly
                      onPress={() => {
                        setScale(() => scale + 0.25);
                      }}
                    >
                      +
                    </Button>
                  </ButtonGroup>
                </div>
                {/* <div className="absolute bottom-0 z-10 flex w-full flex-col items-center justify-center py-2">
                <Pagination
                  className="opacity-90"
                  loop
                  size={"sm"}
                  isCompact
                  showControls
                  variant={"flat"}
                  total={numPages}
                  initialPage={1}
                  color={"default"}
                  onChange={(e) => {
                    setPageNumber(e);
                  }}
                  // classNames={{
                  //   base: "bg-trasparent",
                  //   wrapper: "",
                  //   item: "text-white font-bold",
                  //   next: "bg-white font-bold",
                  // }}
                  radius={"none"}
                />
              </div> */}
              </>
            ) : (
              <div className="h-full w-full overflow-clip">
                <ThreeRender
                  src={"/models/k9.glb"}
                  scale={2}
                  position={[0, 0, 0]}
                ></ThreeRender>
              </div>
            )}
          </Card>
        </div>

        <div className="flex h-full max-h-[85vh] w-full flex-col gap-[20px]">
          <Tabs
            aria-label="Options"
            variant={"underlined"}
            color={"primary"}
            onSelectionChange={async (key: any) => {
              await setIndexOfTab(key);
            }}
          >
            <Tab key="chatbot" title="챗봇 탭"></Tab>
            <Tab key="analysis" title="분석 탭"></Tab>
            <Tab key="model" title="모델링 탭"></Tab>
            <Tab key="memo" title="메모 탭"></Tab>
          </Tabs>
          {indexOfTab == "analysis" && <AnalysisView></AnalysisView>}
          {indexOfTab == "chatbot" && <ChatbotTab></ChatbotTab>}
          {indexOfTab == "model" && <ModelView></ModelView>}
          {indexOfTab == "memo" && <MemoView></MemoView>}
        </div>
      </section>
      <Toaster></Toaster>
    </>
  );
}

function MemoView(props: any) {
  return (
    <Card
      className="relative flex h-full w-full flex-col border-1"
      radius={"none"}
      shadow={"none"}
    >
      <TldrawComponent></TldrawComponent>
    </Card>
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
        className="h-full rounded-none border-1"
        defaultExpandedKeys={["1"]}
        fullWidth
        variant={"bordered"}
        keepContentMounted
      >
        <AccordionItem
          key="1"
          aria-label="Accordion 3"
          title="네트워크 그래프"
          subtitle="핵심어 키워드 간의 관계와 연관성을 나타냅니다."
          classNames={{ title: "text-md font-bold", subtitle: "text-tiny" }}
        >
          <ChartNetworkComponent></ChartNetworkComponent>
        </AccordionItem>
        <AccordionItem
          key="2"
          aria-label="wordCloud"
          title="워드 클라우드"
          subtitle="주요 키워드의 빈도를 강조하여 시각적으로 표현합니다."
          classNames={{ title: "text-md font-bold", subtitle: "text-tiny" }}
        >
          <ChartWordCloud
            data={[
              { text: "제어", value: 69 },
              { text: "로터", value: 67 },
              { text: "휴대", value: 54 },
              { text: "드론", value: 53 },
              { text: "폭탄", value: 49 },
              { text: "회전", value: 39 },
              { text: "모터", value: 3 },
              { text: "수용", value: 356 },
              { text: "살상", value: 34 },
              { text: "신관", value: 32 },
              { text: "배터리", value: 308 },
              { text: "어셈블리", value: 308 },
              { text: "짐벌", value: 30 },
              { text: "카메라", value: 30 },
              { text: "수단", value: 273 },
              { text: "공격", value: 27 },
              { text: "높이", value: 26 },
              { text: "케이스", value: 26 },
              { text: "의하다", value: 242 },
              { text: "나타내다", value: 241 },
              { text: "바라보다", value: 241 },
              { text: "연결", value: 236 },
              { text: "전원", value: 234 },
              { text: "폭발", value: 21 },
              { text: "늘다", value: 209 },
              { text: "단부", value: 208 },
              { text: "기술", value: 2 },
              { text: "오프", value: 20 },
              { text: "동작", value: 199 },
              { text: "부재", value: 199 },
              { text: "한정", value: 196 },
              { text: "송수", value: 193 },
            ]}
            setIsModalVisible={(a: any) => a}
            setSeletedWord={(a: any) => a}
          ></ChartWordCloud>
        </AccordionItem>
        <AccordionItem
          key="3"
          aria-label="Accordion 2"
          title="방사형 그래프"
          subtitle="관련 키워드들을 연결성과 중요도를 시각적으로 파악할 수 있습니다."
          classNames={{ title: "text-md font-bold", subtitle: "text-tiny" }}
        >
          <ChartRadar></ChartRadar>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

function ModelView(params: any) {
  const [isThreeModelVisible, setIsThreeModelVisible] =
    useState<boolean>(false);

  return (
    <div className="flex h-full w-full flex-col items-center justify-center overflow-clip bg-primary-50">
      {isThreeModelVisible ? (
        <ThreeRender
          src={"/models/drone.glb"}
          scale={1}
          position={[0, 0, 0]}
        ></ThreeRender>
      ) : (
        <div className="flex flex-col items-center justify-center gap-4">
          <Button
            color={"primary"}
            onPress={() => {
              setIsThreeModelVisible(!isThreeModelVisible);
            }}
          >
            3D 모델링 보기
          </Button>
          <p className="text-sm text-primary">
            수초 이내의 로딩 시간이 소요될 수 있습니다.
          </p>
        </div>
      )}
    </div>
  );
}

function ChartRadar(params: any) {
  const data = {
    labels: [
      "무기 및 무기 시스템",
      "통신 및 통신 장비",
      "군사 차량 및 운송 수단",
      "센서 및 탐지 시스템",
      "방어 및 보호 장비",
      "정보 수집 및 분석 시스템",
    ],
    datasets: [
      {
        label: "Drone Bomb Device",
        data: [90, 60, 20, 80, 10, 40],
        fill: true,
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgb(255, 99, 132)",
        pointBackgroundColor: "rgb(255, 99, 132)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgb(255, 99, 132)",
      },
    ],
  };
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    layout: {
      // beginAtZero: true,
      // padding: {
      //   right: 35,
      //   bottom: 60,
      // },
    },
    ticks: {
      beginAtZero: true,
      display: true,
      maxTicksLimit: 2,
    },
    // title: {
    //   display: true,
    //   text: "Chart.js Radar Chart",
    // },
    // scale: {
    //   gridLines: {
    //     circular: true,
    //   },
    // },
  };
  return (
    typeof window !== "undefined" && (
      <div className="relative flex h-full w-full flex-col items-center justify-center">
        <Radar
          data={data}
          options={options}
          className="h-fit min-h-[300px] w-full"
        />
      </div>
    )
  );
}
