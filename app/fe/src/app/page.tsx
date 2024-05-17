"use client";

import {
  Accordion,
  AccordionItem,
  Button,
  Card,
  CardBody,
  CardHeader,
  Divider,
} from "@nextui-org/react";
import {
  Lottie3DModel,
  LottieArrowDown,
  LottieDotCircle,
  LottieEnsemble,
} from "@/components/common/lotties";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useIsMobile } from "@/hooks/useMediaQuery";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "@/components/layout/footer";
import { IconLogo } from "@/components/common/icons";
import { IconChart, IconLike, IconLock } from "@/components/common/icons";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";
import HorizontalSlider from "@/components/horizontal-slider";
import ThreeRender from "@/components/3d-render";
import { useTheme } from "next-themes";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Legend);

export default function Home() {
  const router = useRouter();
  const isMobile = useIsMobile();
  const [mobile, setMobile] = useState<boolean>(false);
  const [isThreeModelVisible, setIsThreeModelVisible] =
    useState<boolean>(false);
  const theme = useTheme();

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
    <section className="mx-auto h-full min-h-full w-full select-none overflow-x-clip">
      {/* 1. 프로젝트 소개  */}
      <div className="mx-auto flex h-screen flex-col items-center justify-center bg-[url('../../public/images/background-pattern.jpg')] bg-cover bg-center">
        <div className="flex w-full flex-col items-center justify-center space-y-4">
          {/* 소개 텍스트 */}
          <div className="flex w-full flex-col items-center justify-center gap-2">
            {/* <Image
              src={"/images/logo-text-white.png"}
              width={100}
              height={100}
              alt="logo"
              className={`${mobile ? "w-[150px]" : "w-[250px]"}`}
            ></Image> */}
            <IconLogo width={mobile ? 150 : 200} fill="#fff"></IconLogo>
            <p
              className={`text-center font-bold text-white ${
                mobile ? "text-sm" : "text-md"
              }`}
            >
              방산 분야 특허 검색 및 분석 관리를 위한 지능형 플랫폼
            </p>
          </div>
          {/*  */}
          <div className="flex w-full flex-col items-center justify-center space-y-4">
            <div
              className={`${
                mobile ? "h-[150px]" : "h-[200px]"
              } flex  flex-col justify-center overflow-y-clip`}
            >
              <LottieDotCircle
                play
                loop
                width={mobile ? "200px" : "300px"}
              ></LottieDotCircle>
            </div>
            <div className="flex flex-row space-x-2">
              <Button
                className={`font-bold text-white hover:-translate-y-1 ${
                  mobile ? "border-2" : "border-3"
                }`}
                size={mobile ? "md" : "lg"}
                color={"default"}
                variant={"bordered"}
                onClick={() => {
                  window.open("https://github.com/ziweek/밀리팻");
                }}
              >
                프로젝트 소개자료
              </Button>
              <Button
                className={`font-bold text-white hover:-translate-y-1 ${
                  mobile ? "border-2" : "border-3"
                }`}
                size={mobile ? "md" : "lg"}
                color={"default"}
                variant={"bordered"}
                onClick={() => {
                  router.push("/login");
                }}
              >
                프로젝트 체험하기
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-4">
          <LottieArrowDown play loop width={50}></LottieArrowDown>
        </div>
        <div className="absolute z-10 h-screen w-auto min-w-full max-w-none bg-black/75"></div>
        <video
          controls={false}
          autoPlay={true}
          loop={true}
          muted={true}
          playsInline={true}
          className="absolute z-0 h-screen w-screen max-w-none overflow-clip object-cover"
        >
          <source
            src={require("../../public/video/bg.mp4")}
            type="video/mp4"
            className="h-screen w-screen"
          />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* 2. 개발배경 소개  */}
      <div className="mx-auto flex h-screen flex-col items-center justify-center bg-[url('../../public/images/background-fk-21-2.jpeg')] bg-cover bg-center">
        <div className="flex w-full flex-col items-center justify-center space-y-4">
          {/* 소개 텍스트 */}
          <div
            data-aos={"fade-in"}
            data-aos-duration="500"
            className="flex flex-col items-center justify-center space-y-4"
          >
            <p
              className={`${
                mobile ? "text-xl" : "text-2xl"
              } select-none font-bold text-white`}
            >
              미래기술강군으로 도약하기 위한 디딤돌
            </p>
            <p
              className={`${
                mobile ? "w-[80%] text-sm" : "text-md"
              } select-none text-center text-white`}
            >
              신속하고 정확한 특허 검색, 통합된 분석 솔루션으로 양질의 특허자산
              확보를 유도
            </p>
          </div>
        </div>
      </div>

      {/* 3. 사명 */}
      <div className="flex flex-col items-center justify-center gap-8 pt-48">
        <p
          data-aos="fade-in"
          data-aos-duration="1000"
          className="select-none text-center"
        >
          팀 밀리팻은 대한민국 국군의 일원으로<br></br>창조적인 아이디어와
          혁신적인 기술역량으로<br></br>우리 방산의 미래를 함께 고민합니다.
        </p>
      </div>

      {/* 인트로  */}
      <div className="flex h-fit flex-col items-center justify-center gap-8 pt-48">
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="flex flex-col items-center justify-center space-y-8"
        >
          <p className="select-none text-center text-3xl font-bold">
            밀리팻에 담아놓은<br></br>대한민국 방산의 이야기
          </p>
          <p className="select-none text-center">
            우리 육군의 실제 목소리를 담아<br></br>밀리팻이라는 도전을
            시작하였습니다.
          </p>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="flex h-fit w-full flex-col gap-4"
        >
          <HorizontalSlider
            width={300}
            height={300}
            backgroundColor="#00000050"
            content={[
              {
                title: "육군종합정비창",
                text: "K1A1 전차 종합 정비",
                bgImgSrc: "/images/thumbnail/engineer.png",
                tags: ["정비"],
              },
              {
                title: "육군1사단 기동정비반",
                text: "파손된 차량의 엔진 교체 작업 중",
                bgImgSrc: "/images/thumbnail/engineer1.jpg",
                tags: ["기동정비반"],
              },
              {
                title: "육군종합정비창",
                text: "인터뷰 내용",
                bgImgSrc: "/images/thumbnail/engineer2.jpg",
                tags: ["정비"],
              },
            ]}
          ></HorizontalSlider>
        </div>
      </div>

      {/* 1. 놀라운 성능 */}
      <div className="mx-auto flex h-fit max-w-[600px] flex-col items-center justify-center gap-8 pt-48">
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="flex flex-col items-center justify-center space-y-6"
        >
          <div className="flex flex-col items-center justify-center gap-1">
            <IconChart width={"30"}></IconChart>
            <p className="text-tiny">차별화 포인트 1</p>
          </div>
          <p className="select-none text-3xl font-bold">
            최고의 전투력을 위한,<br></br> 밀리팻의 놀라운 성능.
          </p>
          <p className="select-none text-center">
            기술교범 계의 챗 GPT로 등장한 밀리팻은<br></br>뛰어난 성능에서부터
            시작합니다.
          </p>
        </div>
        <div
          className="mx-auto flex w-full flex-col gap-4 px-4"
          // className="flex h-fit w-full select-none flex-col items-center max-w-[1024px] px-4 gap-4"
          // style={
          //   mobile
          //     ? { gap: "20px" }
          //     : {
          //         display: "grid",
          //         gridTemplateAreas: `"a b" "c d"`,
          //         gridTemplateColumns: "1fr 1fr",
          //         gridTemplateRows: "1fr",
          //         gap: "20px",
          //       }
          // }
        >
          {[
            {
              title: "LLM-Blender Ensenble 구조로\n기존의 모델을 상회하는 성능",
              img: (
                <Bar
                  data={{
                    labels: ["문서 요약", "전체 평가"],
                    datasets: [
                      {
                        label: "ChatGPT",
                        data: [33.3, 42.7],
                        backgroundColor: "#74AA9C90",
                      },
                      {
                        label: "밀리팻 LLM",
                        data: [56.94, 59.05],
                        backgroundColor: "#1D4A8390",
                      },
                    ],
                  }}
                  options={{
                    responsive: true,
                    animation: {
                      // delay: 1000,
                      duration: 1000,
                    },
                    plugins: {
                      legend: {
                        position: "top" as const,
                      },
                    },
                  }}
                  height={250}
                ></Bar>
              ),
            },
            {
              title: "실시간 3D 랜더링\n필터링하는 sLLM 에이전트",
              img: (
                <div className="flex h-[400px] w-full flex-col items-center justify-center overflow-clip rounded-xl bg-primary-50">
                  {isThreeModelVisible ? (
                    <ThreeRender src={"/models/k9.glb"}></ThreeRender>
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
              ),
            },
          ].map((content, i) => {
            return (
              <Card
                key={i}
                data-aos={"fade-up"}
                data-aos-duration="1000"
                data-aos-id={`super-duper`}
                className="h-full w-full py-4"
                shadow={"none"}
              >
                <CardHeader>
                  <p className="mx-auto whitespace-pre-line text-center text-xl font-bold leading-relaxed text-primary">
                    {content.title}
                  </p>
                </CardHeader>
                {/* <Divider></Divider> */}
                <CardBody className="text-balance gap-4 break-keep">
                  {/* <p className="text-secondary leading-relaxed text-sm">
                    {content.text}
                  </p> */}
                  {content.img}
                  <></>
                </CardBody>
              </Card>
            );
          })}
        </div>
      </div>

      {/* 2. 강력한 보안 */}
      <div className="mx-auto flex h-fit max-w-[600px] flex-col items-center justify-center gap-8 pt-48">
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="flex flex-col items-center justify-center space-y-6"
        >
          <div className="flex flex-col items-center justify-center gap-1">
            <IconLock width={20}></IconLock>
            <p className="text-tiny">차별화 포인트 1</p>
          </div>
          <p className="select-none text-center text-3xl font-bold">
            데이터를 보호하기 위한,<br></br>밀리팻의 지속적인 노력.
          </p>
          <p className="select-none text-center">
            전자 교범 데이터를 운용하는 밀리팻은<br></br>강력한 수준의 보안
            정책을 지향하며<br></br>지속적으로 노력하고 있습니다.
          </p>
        </div>
        <div
          className="flex flex-col gap-4 px-8"
          // className="flex h-fit w-full select-none flex-col items-center max-w-[1024px] px-4"
          // style={
          //   mobile
          //     ? { gap: "20px" }
          //     : {
          //         display: "grid",
          //         gridTemplateAreas: `"a b" "c d"`,
          //         gridTemplateColumns: "1fr 1fr",
          //         gridTemplateRows: "1fr",
          //         gap: "20px",
          //       }
          // }
        >
          {[
            {
              title: "개발자도구 감지 및 차단 장치로 소스코드 유출 방지",
              // gridArea: "a",
              img: (
                <Image
                  src={"/images/index/devtool_detection.png"}
                  width={600}
                  height={600}
                  alt="img"
                  className="mx-auto w-full"
                ></Image>
              ),
              text: "밀리팻에는 브라우저의 개발자도구를 탐지하는 코드가 항상 동작하여, 소스코드의 유출 및 악의적인 위변조를 차단하고 있습니다.",
            },
            {
              title: "적대적 프롬프트 주입 공격을 필터링하는 sLLM 에이전트",
              // gridArea: "a",
              img: (
                <Image
                  src={"/images/index/defensive_agent.png"}
                  width={600}
                  height={600}
                  alt="img"
                  className="mx-auto w-full"
                ></Image>
              ),
              text: "밀리팻에는 프롬프트를 필터링하는 별도의 sLLM 에이전트를 배치하여, 사용자의 악의적인 프롬프트 공격에 대비하고 있습니다.",
            },
          ].map((content, i) => {
            return (
              <Card
                key={i}
                data-aos="fade-left"
                // data-aos-delay={i * 100 + 100}

                data-aos-duration="1000"
                className="h-full w-full bg-black p-4"
                // style={{ gridArea: content.gridArea }}
                shadow={"sm"}
              >
                <CardHeader>
                  <p className="tprimary whitespace-pre-line break-keep text-xl font-bold leading-relaxed text-white">
                    {content.title}
                  </p>
                </CardHeader>
                {/* <Divider></Divider> */}
                <CardBody className="text-balance gap-4 break-keep">
                  <p className="text-sm leading-relaxed text-white">
                    {content.text}
                  </p>
                  {content.img}
                </CardBody>
              </Card>
            );
          })}
        </div>
      </div>

      {/* 3. 직관적인  */}
      <div className="mx-auto flex h-fit max-w-[600px] flex-col items-center justify-center gap-8 pt-48">
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="flex flex-col items-center justify-center space-y-6"
        >
          <div className="flex flex-col items-center justify-center gap-1">
            <IconLike width={20}></IconLike>
            <p className="text-tiny">차별화 포인트 1</p>
          </div>
          <p className="select-none text-3xl font-bold">
            누구나 손쉽게 배우는,<br></br>직관적인 사용자 경험.
          </p>
          <p className="select-none text-center">
            모든 장병을 위해 설계된 밀리팻은<br></br>간단한 조작만으로도 기능을
            수행합니다.
          </p>
        </div>
        <div
          className="flex flex-col gap-4 px-8"
          // className="flex h-fit w-full select-none flex-col items-center max-w-[1024px] px-4"
          // style={
          //   mobile
          //     ? { gap: "20px" }
          //     : {
          //         display: "grid",
          //         gridTemplateAreas: `"a b" "c d"`,
          //         gridTemplateColumns: "1fr 1fr",
          //         gridTemplateRows: "1fr",
          //         gap: "20px",
          //       }
          // }
        >
          {[
            {
              title: "텍스트, 이미지, 음성 등을 포괄하는 멀티모달 데이터 분석",
              img: (
                <div className="mx-auto flex h-[120px] w-fit flex-col justify-center">
                  <LottieEnsemble
                    // play
                    // loop
                    height={80}
                    goTo={12}
                  ></LottieEnsemble>
                </div>
              ),
              text: "텍스트 질의 뿐만 아니라 카메라 또는 음성 인식 등의 멀티모달 인터페이스를 지원하여 사용자 편의성을 개선하였습니다.",
            },
            {
              title: "군용장비의 3D 모델링으로 실증적 진단",
              img: (
                <div className="mx-auto flex h-[120px] w-fit flex-col justify-center">
                  <Lottie3DModel goTo={30} height={120}></Lottie3DModel>
                </div>
              ),
              text: "blender 등의 소프트웨어로 작성된 3D 모델링 구조도를 통해 운용장비의 파트에 대해 직관적으로 접근할 수 있습니다.",
            },
          ].map((content, i) => {
            return (
              <Card
                key={i}
                data-aos="fade-right"
                // data-aos-delay={i * 100 + 100}

                data-aos-duration="1000"
                className="h-full w-full break-keep bg-primary-300 p-4"
                // style={{ gridArea: content.gridArea }}
                shadow={"sm"}
              >
                <CardHeader>
                  <p className="texprimary whitespace-pre-line text-xl font-bold leading-relaxed">
                    {content.title}
                  </p>
                </CardHeader>
                {/* <Divider></Divider> */}
                <CardBody className="text-balance gap-4 break-keep">
                  <p className="text-sm leading-relaxed text-primary">
                    {content.text}
                  </p>
                  {content.img}
                </CardBody>
              </Card>
            );
          })}
        </div>
      </div>

      {/* 핵심기술 설명  */}
      <div className="flex h-fit flex-col items-center justify-center gap-8 pt-48">
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="flex flex-col items-center justify-center space-y-8"
        >
          <p className="select-none text-center text-3xl font-bold">
            밀리팻에 담아놓은<br></br>대한민국 방산의 이야기
          </p>
          <p className="select-none text-center">
            우리 육군의 실제 목소리를 담아<br></br>밀리팻이라는 도전을
            시작하였습니다.
          </p>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="flex h-fit w-full flex-col gap-4"
        >
          <HorizontalSlider
            width={300}
            height={300}
            backgroundColor="#00000050"
            content={[
              {
                title: "육군종합정비창",
                text: "K1A1 전차 종합 정비",
                bgImgSrc: "/images/thumbnail/engineer.png",
                tags: ["정비"],
              },
              {
                title: "육군1사단 기동정비반",
                text: "파손된 차량의 엔진 교체 작업 중",
                bgImgSrc: "/images/thumbnail/engineer1.jpg",
                tags: ["기동정비반"],
              },
              {
                title: "육군종합정비창",
                text: "인터뷰 내용",
                bgImgSrc: "/images/thumbnail/engineer2.jpg",
                tags: ["정비"],
              },
            ]}
          ></HorizontalSlider>
        </div>
      </div>

      {/* 3. 핵심 기술 설명 */}
      {/* <div className="flex h-full min-h-screen flex-col items-center justify-center space-y-8 bg-primary-50 py-16">
        <p className="select-none text-2xl font-bold text-primary">
          핵심기능 소개
        </p>
        <div
          className="flex min-h-[40vh] w-full max-w-[1024px] select-none flex-col items-center justify-between px-4"
          style={
            mobile
              ? { gap: "20px" }
              : {
                  display: "grid",
                  gridTemplateAreas: `"a b" "c d"`,
                  gridTemplateColumns: "1fr 1fr",
                  gridTemplateRows: "1fr 1fr",
                  gap: "20px",
                }
          }
        >
          {[
            {
              title: "Ollama를 활용한 온디바이스 생성형 AI",
              gridArea: "a",
              img: (
                <Image
                  src={"/images/logo_ollama.png"}
                  width={100}
                  height={100}
                  alt="img"
                  className="mx-auto h-[120px] w-fit drop-shadow-md"
                ></Image>
              ),
              text: "자체적으로 구분된 독립적인 서버를 사용하여 보안 문제를 해결하기 위해 Ollama 프레임워크를 활용하였습니다. 이 덕분에 Mistral 등의 다양한 LLM 모델을 운용할 수 있습니다.",
            },
            {
              title: "Agent 간 Ensemble을 통한 정확도 개선",
              gridArea: "b",
              img: (
                <div className="mx-auto flex h-[120px] w-fit flex-col justify-center">
                  <LottieEnsemble height={120} goTo={10}></LottieEnsemble>
                </div>
              ),
              text: " 다수의 에이전트 모델 간의 상호작용을 시키는 앙상블 기법을 활용하여 LLM 특유의 ‘할루시네이션’(환각) 현상을 최소화하고 경제적인 관점에서 최대한의 효율적인 성능을 확보할 수 있습니다.",
            },
            {
              title: "특허 유사도 분석 및 기술 동향 예측",
              gridArea: "c",
              img: (
                <div className="mx-auto flex h-[120px] w-fit flex-col justify-center">
                  <LottieEnsemble
                    // play
                    // loop
                    height={80}
                    goTo={12}
                  ></LottieEnsemble>
                </div>
              ),
              text: "텍스트 질의 뿐만 아니라 카메라 또는 음성 인식 등의 멀티모달 인터페이스를 지원하여 사용자 편의성을 개선하였습니다.",
            },
            {
              title: "구조도 실시간 3D 렌더링",
              gridArea: "d",
              img: (
                <div className="mx-auto flex h-[120px] w-fit flex-col justify-center">
                  <Lottie3DModel goTo={30} height={120}></Lottie3DModel>
                </div>
              ),
              text: "blender 등의 소프트웨어로 작성된 3D 모델링 구조도를 통해 운용장비의 파트에 대해 직관적으로 접근할 수 있습니다.",
            },
          ].map((content, i) => {
            return (
              <Card
                key={i}
                className="h-full min-h-[300px] w-full p-4"
                style={{ gridArea: content.gridArea }}
                shadow={"sm"}
              >
                <CardHeader>
                  <p className="text-md font-bold texprimary">
                    {content.title}
                  </p>
                </CardHeader>
                <Divider></Divider>
                <CardBody className="text-pretty gap-2">
                  {content.img}
                  <p className="text-justify leading-loose">{content.text}</p>
                </CardBody>
              </Card>
            );
          })}
        </div>
      </div> */}

      {/* Footer */}
      <div className="mx-auto max-w-[600px] px-8 py-12">
        <Accordion variant={"shadow"} className="bg-black/20" isDisabled>
          <AccordionItem
            key="1"
            aria-label="Accordion 1"
            title="데이터 출처 확인하기"
            classNames={{ title: "text-sm" }}
          >
            aa
          </AccordionItem>
        </Accordion>
      </div>

      {/* Footer */}
      <Footer isFixed></Footer>
    </section>
  );
}
