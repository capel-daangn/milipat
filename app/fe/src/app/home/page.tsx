"use client";

import { IconLogo } from "@/components/common/icons";
import SearchBar from "@/components/search-bar";
import { Card } from "@nextui-org/react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { useIsMobile } from "@/hooks/useMediaQuery";
import { useQuery } from "@tanstack/react-query";
import WorldmapChart from "@/components/chart/worldmap-chart";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { faker } from "@faker-js/faker";
import ChatbotTab from "@/components/chatbot-tab";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

export default function Home() {
  const queryIndexOfViews = useQuery<any>({
    queryKey: ["indexOfViews"],
    queryFn: () => {},
    refetchOnMount: true,
  });

  return (
    <section className="flex min-h-screen w-full flex-col items-center justify-center">
      {(queryIndexOfViews.data as string) == "search" && (
        <SearchView></SearchView>
      )}
      {(queryIndexOfViews.data as string) == "analysis" && (
        <AnalysisView></AnalysisView>
      )}
      {(queryIndexOfViews.data as string) == "chatbot" && (
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
        <div className="flex flex-col items-start">
          <p
            className={`select-none font-bold ${
              mobile ? "text-tiny" : "text-md"
            }`}
          >
            미래 기술 강군을 위한,
          </p>
          <p
            className={`select-none font-bold ${
              mobile ? "text-tiny" : "text-md"
            }`}
          >
            방산 분야 특허 관리 지능형 플랫폼
          </p>
        </div>
      </div>
      <div
        data-aos={"fade-in"}
        data-aos-duration="1500"
        className="mx-auto flex w-full flex-row items-end justify-center pb-16"
      >
        <SearchBar mobile value=""></SearchBar>
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
            "/images/logo/dod.webp",
            "/images/logo/dapa.webp",
            "/images/logo/data_portal.webp",
            "/images/logo/ai_hub.webp",
          ].map((e, i) => (
            <Image
              loading={"lazy"}
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
  const [indexOfAnalysis, setIndexOfAnalysis] = useState("기술 동향 분석 도구");

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
    <div
      className={`grid h-screen w-full max-w-[1200px] gap-4 pt-[100px]`}
      style={{
        gridTemplateColumns: mobile ? "1fr" : "auto 1fr",
        gridTemplateRows: mobile ? "auto 1fr" : "1fr",
      }}
    >
      {/*  */}

      <div className="sticky flex h-full w-full flex-col gap-4 overflow-x-scroll px-4 scrollbar-hide">
        <div
          className="flex h-min w-min gap-2 scrollbar-hide"
          style={{ flexDirection: mobile ? "row" : "column" }}
        >
          {[
            {
              name: "기술 동향 분석 도구",
              description:
                "특허의 네트워크 분석은 특허 데이터를 활용하여 기술 분야에서의 연결과 상호작용을 이해하는 과정입니다.",
              content: <></>,
              // bgImg: "/images/background/map.jpg",
              router: "/analytics/tech-trend",
            },
            {
              name: "특허 유사도 분석 도구",
              description:
                "특허의 네트워크 분석은 특허 데이터를 활용하여 기술 분야에서의 연결과 상호작용을 이해하는 과정입니다.",
              content: <></>,
              // bgImg: "/images/background/trend.jpg",
              router: "/analytics/patent-similarity",
            },
            {
              name: "특허 경쟁력 진단 도구",
              description:
                "특허의 네트워크 분석은 특허 데이터를 활용하여 기술 분야에서의 연결과 상호작용을 이해하는 과정입니다.",
              content: <></>,
              // bgImg: "/images/background/compare.jpg",
              router: "/analytics/patent-power",
            },
          ].map((e, i) => {
            return (
              <Card
                key={i}
                // style={{ flexDirection: mobile ? "row" : "column" }}
                // style={{ backgroundImage: `url('${e.bgImg}')` }}
                className="flex aspect-[5/1] h-[60px] items-start justify-center gap-1 border-1 p-4 drop-shadow-md"
                isPressable
                onClick={() => {
                  setIndexOfAnalysis(e.name);
                }}
                radius={"none"}
                shadow={"none"}
              >
                <p className="select-none font-bold text-black">{e.name}</p>
                {/* <p className="line-clamp-2 whitespace-normal break-keep text-start text-tiny font-bold text-white">
                    {e.description}
                  </p> */}
              </Card>
            );
          })}
        </div>
      </div>

      {/*  */}
      <Card
        shadow={"none"}
        radius={"none"}
        className={`${
          mobile ? "h-full" : "h-[85vh]"
        } grid w-full flex-col items-center justify-center overflow-y-scroll border-1 p-4`}
      >
        <div className="flex flex-col items-center justify-center gap-16">
          {indexOfAnalysis == "기술 동향 분석 도구" && <TrendTool></TrendTool>}
          {indexOfAnalysis == "특허 유사도 분석 도구" && (
            <SimilarityTool></SimilarityTool>
          )}
          {indexOfAnalysis == "특허 경쟁력 진단 도구" && (
            <CountryTool></CountryTool>
          )}
        </div>
      </Card>
    </div>
  );
}

function TrendTool(props: any) {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-4">
      <p className="text-xl font-bold">기술 동향 분석 도구</p>
      <Card className="min-h-fit w-full p-8">
        <TrendChart></TrendChart>
      </Card>
    </div>
  );
}
function SimilarityTool(props: any) {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-4">
      <p className="text-xl font-bold">특허 유사도 분석 도구</p>
      <Card className="flex min-h-fit w-full flex-col justify-between gap-8 p-8">
        <div className="flex flex-row items-center justify-between gap-8">
          <Card
            isPressable
            className="flex aspect-[3/4] h-1/2 w-full flex-col items-center justify-center border-2 bg-gray-300"
            radius={"none"}
          >
            <p>비교할 특허 문서 선택하기</p>
          </Card>
          <Card
            isPressable
            className="flex aspect-[3/4] h-1/2 w-full flex-col items-center justify-center border-2 bg-gray-300"
            radius={"none"}
          >
            <p>비교할 특허 문서 선택하기</p>
          </Card>
          <Card
            isPressable
            className="flex aspect-[3/4] h-1/2 w-full flex-col items-center justify-center border-2 bg-gray-300"
            radius={"none"}
          >
            <p>비교할 특허 문서 선택하기</p>
          </Card>
        </div>
        <Card
          className="h-[300px] w-full border-3 drop-shadow-none"
          shadow={"none"}
          radius={"none"}
        ></Card>
      </Card>
    </div>
  );
}
function CountryTool(props: any) {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-4">
      <p className="text-xl font-bold">특허 경쟁력 진단 도구</p>
      <Card className="min-h-fit w-full p-8">
        <WorldmapChart
          size={"responsive"}
          data={[
            {
              country: "cn",
              value: faker.number.float({ min: 0.2, max: 0.4 }),
            }, // china
            {
              country: "us",
              value: faker.number.float({ min: 0.2, max: 0.4 }),
            }, // united states
            {
              country: "kr",
              value: faker.number.float({ min: 0.2, max: 0.4 }),
            }, // korea
            {
              country: "jp",
              value: faker.number.float({ min: 0.2, max: 0.4 }),
            }, // japan
          ]}
        ></WorldmapChart>
      </Card>
    </div>
  );
}

function ChatbotView(props: any) {
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
    <div
      className={`grid h-screen w-full max-w-[1200px] gap-4 pt-[100px]`}
      style={{
        gridTemplateColumns: mobile ? "1fr" : "auto 1fr",
        gridTemplateRows: mobile ? "auto 1fr" : "1fr",
      }}
    >
      {/*  */}

      <div className="flex h-full w-full flex-col gap-4 overflow-auto px-4 scrollbar-hide">
        <div
          className="flex h-min w-min gap-2"
          style={{ flexDirection: mobile ? "row" : "column" }}
        >
          {[
            { text: "휴대용 드론 폭격 장치" },
            { text: "특허 문서 요약" },
            { text: "핵심 키워드 추출" },
            { text: "K9 자주포 사격통제장치" },
          ].map((e, i) => {
            return (
              <Card
                key={i}
                className="flex aspect-[5/1] h-[60px] w-full items-start justify-center border-1 p-4 font-bold drop-shadow-md"
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

      {/*  */}
      <ChatbotTab></ChatbotTab>
    </div>
  );
}

function TrendChart(params: any) {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Chart.js Line Chart",
      },
    },
  };

  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];

  const data = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: labels.map(() =>
          faker.datatype.number({ min: -1000, max: 1000 }),
        ),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Dataset 2",
        data: labels.map(() =>
          faker.datatype.number({ min: -1000, max: 1000 }),
        ),
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };
  return <Line options={options} data={data} width={700} />;
}
