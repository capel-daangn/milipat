"use client";

import { Button, Card, CardBody, CardHeader, Divider } from "@nextui-org/react";
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

export default function Home() {
  const router = useRouter();
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
    <section className="mx-auto h-full min-h-full w-full select-none">
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
                  window.open("https://github.com/ziweek/milipat");
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
      {/* 3. 핵심 기술 설명 */}
      <div className="flex h-full min-h-screen flex-col items-center justify-center space-y-8 bg-primary-50 py-16">
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
                  <p className="text-md font-bold text-primary">
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
      </div>
      {/* Footer */}
      <Footer isFixed></Footer>
    </section>
  );
}
