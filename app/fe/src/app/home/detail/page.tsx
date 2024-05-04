"use client";

import {
  Button,
  ButtonGroup,
  Card,
  Chip,
  CircularProgress,
  Pagination,
  Accordion,
  AccordionItem,
} from "@nextui-org/react";
import { useEffect, useState, useRef, useCallback } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import WordCloud from "react-d3-cloud";
import { scaleOrdinal } from "d3-scale";
import { schemeCategory10 } from "d3-scale-chromatic";
import { GraphCanvas } from "reagraph";
import { Radar } from "react-chartjs-2";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url,
).toString();

import dynamic from "next/dynamic";
import { useIsMobile } from "@/hooks/useMediaQuery";
import TextBubble from "@/components/text-bubble";
import FooterTray from "@/components/common/footer-tray";
import { useQuery } from "@tanstack/react-query";
import {
  Chart,
  RadialLinearScale,
  PointElement,
  LineElement,
  ArcElement,
} from "chart.js";
// import ChartNetwork from "@/components/chart/network-chart";

// const DynamicComponentWithNoSSR = dynamic(() => import("./Chart"), {
//   ssr: false,
// });

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
  const [numPages, setNumPages] = useState<any>();
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [isLoaded, setisLoaded] = useState(false);

  const isMobile = useIsMobile();
  const [mobile, setMobile] = useState<boolean>(false);
  const [scale, setScale] = useState<number>(1);

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

  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages);
    setisLoaded(true);
  }

  const [isWindowLoaded, setIsWindowLoaded] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsWindowLoaded(true);
    }
  }, []);

  return (
    <section
      className="mx-auto flex min-h-full w-full max-w-[1200px] flex-row items-start justify-between px-4"
      style={{
        display: "grid",
        gridTemplateColumns: mobile ? "1fr" : "100px 600px 1fr",
        gridTemplateRows: mobile ? "1fr 1fr" : "1fr",
        gap: "20px",
      }}
    >
      {!mobile && <div></div>}

      <div
        className="relative flex max-h-[75vh] min-h-fit w-full flex-col items-center justify-center gap-[20px]"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr",
          gridTemplateRows: "auto 1fr",
        }}
      >
        <Card className="h-full w-full p-4">
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
              본 특허는 휴대형 군사용 드론 폭탄 장치는 작은 크기의 드론에 폭탄을
              부착하여 적군을 타격하는 군사 전술 장치에 관한 내용입니다.
            </p>
          </div>
        </Card>

        <Card className="relative flex h-full min-h-full w-full flex-col items-center justify-center">
          <Document
            file={"/sample.pdf"}
            onLoadSuccess={onDocumentLoadSuccess}
            loading={<CircularProgress></CircularProgress>}
            className={"h-full overflow-scroll"}
          >
            <Page pageNumber={pageNumber} scale={scale} />
          </Document>
          <div className="absolute top-0 z-10 flex w-full flex-col items-center justify-center py-2">
            <ButtonGroup color={"default"} variant={"flat"} radius={"none"}>
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
          <div className="absolute bottom-0 z-10 flex w-full flex-col items-center justify-center py-2">
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
          </div>
        </Card>
      </div>

      <div className="flex h-full max-h-[75vh] w-full flex-col">
        {(queryIndexOfViews.data as string) == "analysis" && (
          <AnalysisView></AnalysisView>
        )}
        {
          (queryIndexOfViews.data as string) == "chatbot" && (
            // (
            //   isWindowLoaded ? (
            <ChatbotView></ChatbotView>
          )
          // ) : (
          //   <div className="flex h-full w-full flex-col items-center justify-center">
          //     <CircularProgress></CircularProgress>
          //   </div>
          // )
          // )
        }
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
        className="h-fit"
        // defaultExpandedKeys={["1"]}
        fullWidth
        variant={"shadow"}
        keepContentMounted
      >
        <AccordionItem
          key="1"
          aria-label="wordCloud"
          title="워드 클라우드"
          subtitle="주요 키워드의 빈도를 강조하여 시각적으로 표현합니다."
          classNames={{ title: "text-md font-bold", subtitle: "text-tiny" }}
        >
          <ChartWordCloud></ChartWordCloud>
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
          <ChartNetworkComponent></ChartNetworkComponent>
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
    <Card className="flex h-full max-h-[75vh] w-full flex-col">
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

function ChartWordCloud(params: any) {
  const fontSize = useCallback((word: any) => Math.log2(word.value) * 5, []);
  const rotate = useCallback((word: any) => word.value % 180, []);
  const fill = useCallback(
    (d: any, i: any) => scaleOrdinal(schemeCategory10)(i),
    [],
  );
  const onWordClick = useCallback((word: any) => {
    console.log(`onWordClick: ${word}`);
  }, []);
  const onWordMouseOver = useCallback((word: any) => {
    console.log(`onWordMouseOver: ${word}`);
  }, []);
  const onWordMouseOut = useCallback((word: any) => {
    console.log(`onWordMouseOut: ${word}`);
  }, []);
  const data = [
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
  ];

  return (
    typeof window !== "undefined" && (
      <WordCloud
        data={data}
        // width={500}
        height={500}
        font="Times"
        fontWeight="bold"
        fontSize={fontSize}
        spiral="rectangular"
        rotate={rotate}
        padding={5}
        random={Math.random}
        fill={fill}
        onWordClick={onWordClick}
        onWordMouseOver={onWordMouseOver}
        onWordMouseOut={onWordMouseOut}
      />
    )
  );
}

function ChartRadar(params: any) {
  const data = {
    labels: [
      "Eating",
      "Drinking",
      "Sleeping",
      "Designing",
      "Coding",
      "Cycling",
      "Running",
    ],
    datasets: [
      {
        label: "My First Dataset",
        data: [65, 59, 90, 81, 56, 55, 40],
        fill: true,
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgb(255, 99, 132)",
        pointBackgroundColor: "rgb(255, 99, 132)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgb(255, 99, 132)",
      },
      {
        label: "My Second Dataset",
        data: [28, 48, 40, 19, 96, 27, 100],
        fill: true,
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgb(54, 162, 235)",
        pointBackgroundColor: "rgb(54, 162, 235)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgb(54, 162, 235)",
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
      display: false,
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
