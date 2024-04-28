"use client";

import { IconBookmark, IconSearch } from "@/components/common/icons";
import GptBox from "@/components/gpt-box";
import { useIsMobile } from "@/hooks/useMediaQuery";
import { Button, Card, Link, Pagination } from "@nextui-org/react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";

const dataset = [
  {
    title: "국방 분야 인공지능 활용 추세 연구",
    text: "국방 분야에서의 인공지능 활용 추세 연구는 빠르게 진화하고 있습니다. 실시간 데이터 수집 및 분석을 통해 예측 모델을 개발하여 전략 수립에 도움이 되고 있습니다. 무인 시스템 및 자율주행 기술을 통한 작전 효율성 향상과 함께, 적응형 알고리즘과 사이버 보안 기술을 강화하여 안전한 군사 환경을 조성하고 있습니다. 또한, 지능형 무기체계와 통신망 강화를 통해 복잡한 군사 작전에 대응하며, 인공지능은 국방 분야의 미래를 주도하는 핵심 기술로 부상하고 있습니다. 향후에는 다양한 도메인에서의 인공지능 적용이 더욱 증가할 것으로 예상되며, 이는 국방 능력 강화 및 안보 정책 혁신에 기여할 것으로 기대됩니다.",
    date: "2023/01/04",
    publish: "국방대학교",
    href: "/search/detail",
  },
  {
    title: "국방 분야 인공지능 활용 추세 연구",
    text: "국방 분야에서의 인공지능 활용 추세 연구는 빠르게 진화하고 있습니다. 실시간 데이터 수집 및 분석을 통해 예측 모델을 개발하여 전략 수립에 도움이 되고 있습니다. 무인 시스템 및 자율주행 기술을 통한 작전 효율성 향상과 함께, 적응형 알고리즘과 사이버 보안 기술을 강화하여 안전한 군사 환경을 조성하고 있습니다. 또한, 지능형 무기체계와 통신망 강화를 통해 복잡한 군사 작전에 대응하며, 인공지능은 국방 분야의 미래를 주도하는 핵심 기술로 부상하고 있습니다. 향후에는 다양한 도메인에서의 인공지능 적용이 더욱 증가할 것으로 예상되며, 이는 국방 능력 강화 및 안보 정책 혁신에 기여할 것으로 기대됩니다.",
    date: "2023/01/04",
    publish: "국방대학교",
    href: "/search/detail",
  },
  {
    title: "국방 분야 인공지능 활용 추세 연구",
    text: "국방 분야에서의 인공지능 활용 추세 연구는 빠르게 진화하고 있습니다. 실시간 데이터 수집 및 분석을 통해 예측 모델을 개발하여 전략 수립에 도움이 되고 있습니다. 무인 시스템 및 자율주행 기술을 통한 작전 효율성 향상과 함께, 적응형 알고리즘과 사이버 보안 기술을 강화하여 안전한 군사 환경을 조성하고 있습니다. 또한, 지능형 무기체계와 통신망 강화를 통해 복잡한 군사 작전에 대응하며, 인공지능은 국방 분야의 미래를 주도하는 핵심 기술로 부상하고 있습니다. 향후에는 다양한 도메인에서의 인공지능 적용이 더욱 증가할 것으로 예상되며, 이는 국방 능력 강화 및 안보 정책 혁신에 기여할 것으로 기대됩니다.",
    date: "2023/01/04",
    publish: "국방대학교",
    href: "/search/detail",
  },
  {
    title: "국방 분야 인공지능 활용 추세 연구",
    text: "국방 분야에서의 인공지능 활용 추세 연구는 빠르게 진화하고 있습니다. 실시간 데이터 수집 및 분석을 통해 예측 모델을 개발하여 전략 수립에 도움이 되고 있습니다. 무인 시스템 및 자율주행 기술을 통한 작전 효율성 향상과 함께, 적응형 알고리즘과 사이버 보안 기술을 강화하여 안전한 군사 환경을 조성하고 있습니다. 또한, 지능형 무기체계와 통신망 강화를 통해 복잡한 군사 작전에 대응하며, 인공지능은 국방 분야의 미래를 주도하는 핵심 기술로 부상하고 있습니다. 향후에는 다양한 도메인에서의 인공지능 적용이 더욱 증가할 것으로 예상되며, 이는 국방 능력 강화 및 안보 정책 혁신에 기여할 것으로 기대됩니다.",
    date: "2023/01/04",
    publish: "국방대학교",
    href: "/search/detail",
  },
  {
    title: "국방 분야 인공지능 활용 추세 연구",
    text: "국방 분야에서의 인공지능 활용 추세 연구는 빠르게 진화하고 있습니다. 실시간 데이터 수집 및 분석을 통해 예측 모델을 개발하여 전략 수립에 도움이 되고 있습니다. 무인 시스템 및 자율주행 기술을 통한 작전 효율성 향상과 함께, 적응형 알고리즘과 사이버 보안 기술을 강화하여 안전한 군사 환경을 조성하고 있습니다. 또한, 지능형 무기체계와 통신망 강화를 통해 복잡한 군사 작전에 대응하며, 인공지능은 국방 분야의 미래를 주도하는 핵심 기술로 부상하고 있습니다. 향후에는 다양한 도메인에서의 인공지능 적용이 더욱 증가할 것으로 예상되며, 이는 국방 능력 강화 및 안보 정책 혁신에 기여할 것으로 기대됩니다.",
    date: "2023/01/04",
    publish: "국방대학교",
    href: "/search/detail",
  },
];

export default function Query() {
  const [isAnimationTriggered, setIsAnimationTriggered] = useState(false);
  const isMobile = useIsMobile();
  const [mobile, setMobile] = useState<boolean>(false);

  const checkResize = () => {
    if (isMobile) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  };

  useEffect(() => {
    checkResize();
  }, [isMobile]);

  useEffect(() => {
    AOS.init();
    return () => {};
  }, []);

  return (
    <section
      className="mx-auto flex w-full max-w-[1200px] flex-row px-4 py-4"
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
        <div
          // data-aos="zoom-in-down"
          // data-aos-duration="500"
          className={`w-full 
          ${isAnimationTriggered ? "" : ""}`}
        >
          <GptBox
            title="MiliPat-GPT 서치어드바이저"
            initialQuery="국방 인공지능 모델 기술과제 분석과 발전방안 연구"
          ></GptBox>
        </div>
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
                  <div className="flex flex-row items-center justify-end space-x-2">
                    <Link href={data.href}>
                      <p className="text-left text-lg font-bold leading-loose">
                        {data.title}
                      </p>
                    </Link>
                    <p className="text-left text-xs leading-loose">
                      {data.publish}, {data.date}
                    </p>
                  </div>
                  <div className="space-x-2">
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
                  </div>
                </div>
                <p className="line-clamp-3 text-justify indent-4 text-sm leading-loose">
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
      <div
      // data-aos="fade-in"
      // data-aos-delay="1000"
      // data-aos-duration="1500"
      // className="sticky top-[14vh] ml-4 max-h-[40vh]"
      ></div>
    </section>
  );
}
