import { useIsMobile } from "@/hooks/useMediaQuery";
import { Card } from "@nextui-org/react";
import { useRef, useState, useEffect } from "react";
import TextBubble from "./text-bubble";
import FooterTray from "./common/footer-tray";

export default function ChatbotTab(props: any) {
  const messageEndRef = useRef<HTMLDivElement | null>(null);
  const [dialogContext, setDialogContext] = useState([
    {
      isAnimated: true,
      isSent: false,
      isLoading: false,
      imgSrc: "/images/logo.png",
      name: "MiliPat 챗봇",
      text: "어떻게 도와드릴까요?",
      isSourceContained: false,
      context: null,
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
            name: "MiliPat 챗봇",
            text:
              dialogContext[dialogContext.length - 1].text.includes("로터") &&
              dialogContext[dialogContext.length - 1].text.includes("역할")
                ? `로터 모듈은 이 드론 폭탄 장치의 중요한 구성 요소 중 하나입니다. 이 모듈은 장치의 상단에 위치하고 회전 모터에 의해 회전하는 로터(날개)를 포함합니다. 이러한 로터는 드론 폭탄 장치가 공중에서 안정적으로 날 수 있도록 제공 되며, 이동 및 목표 지점으로의 정확한 이동을 가능하게 합니다.
              
              로터 모듈은 드론이 수행해야 하는 임무에 따라 다양한 크기와 형태로 설계될 수 있습니다. 예를 들어, 고정 지점에 서의 정밀한 목표 지점까지의 이동이 필요한 경우 더 큰 로터가 사용될 수 있으며, 더 많은 안정성과 제어를 제공할 수 있습니다. 반면에, 더 빠른 속도와 민첩성이 필요한 임무에서는 작고 경량의 로터가 선택될 수 있습니다.
              
              이로써 드론은 다양한 환경에서 효과적으로 운용될 수 있으며, 적절한 로터 모듈은 장치의 안정성과 성능을 향상 시키는 데 중요한 역할을 합니다`
                : `인가 받지 않은 사용자 입니다. 관리자에게 문의해주시길 바랍니다.`,
            //                 `안녕하세요, 소중한 고객님.

            // 먼저 저희 서비스를 이용해 주셔서 진심으로 감사드립니다. 현재 LLM 서버에서 발생한 비용이 예산을 초과함에 따라 부득이하게 잠시 서버와의 연결을 중지하게 되었음을 알려드립니다.

            // 서비스 이용에 불편을 드려 대단히 죄송합니다. 저희 팀은 운영 예산과 컴퓨팅 자원의 제약 속에서 RAG LLM 모델의 성능을 고의로 저하시켜 제한적으로 서비스를 제공하는 방안을 검토하고 있습니다.

            // 이해와 협조에 감사드리며, 추가적인 문의 사항이 있으시면 언제든지 고객 지원팀으로 연락 주시기 바랍니다.

            // 감사합니다.

            // * LLM RAG 모델의 기술 내용 전달을 위하여 해당 내용이 녹화된 서비스의 시연영상을 아래의 버튼을 눌러서 확인할 수 있습니다.

            // MiliPat 팀 드림
            //             `
            isSourceContained: dialogContext[
              dialogContext.length - 1
            ].text.includes("로터")
              ? false
              : true,
            context: null,
          },
        ]);
      }, 500);
    }
  }, [dialogContext]);

  return (
    <Card
      className="relative flex h-full w-full flex-col border-1"
      radius={"none"}
      shadow={"none"}
    >
      <div
        className={`relative grid h-full w-full gap-4`}
        style={{
          gridTemplateColumns: false ? "1fr" : "1fr",
          gridTemplateRows: false ? "1fr" : "1fr",
        }}
      >
        {/*  */}
        <div
          className={`${
            mobile ? "pb-1" : ""
          } relative flex h-full w-full flex-col items-center justify-start overflow-scroll`}
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
                  isSourceContained={e.isSourceContained}
                  dialogContext={dialogContext}
                  setDialogContext={setDialogContext}
                  context={e.context}
                ></TextBubble>
              );
            })}
            <div ref={messageEndRef} className="h-[100px]"></div>
          </div>
          <div className="z-50 flex h-fit w-full flex-col items-center">
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
