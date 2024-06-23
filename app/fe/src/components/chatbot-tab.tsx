import { useIsMobile } from "@/hooks/useMediaQuery";
import { Card, Tabs, Tab, Tooltip } from "@nextui-org/react";
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
            text: `안녕하세요, 소중한 고객님.

먼저 저희 서비스를 이용해 주셔서 진심으로 감사드립니다. 현재 LLM 서버에서 발생한 비용이 예산을 초과함에 따라 부득이하게 잠시 서버와의 연결을 중지하게 되었음을 알려드립니다.

서비스 이용에 불편을 드려 대단히 죄송합니다. 저희 팀은 운영 예산과 컴퓨팅 자원의 제약 속에서 RAG LLM 모델의 성능을 고의로 저하시켜 제한적으로 서비스를 제공하는 방안을 검토하고 있습니다.

이해와 협조에 감사드리며, 추가적인 문의 사항이 있으시면 언제든지 고객 지원팀으로 연락 주시기 바랍니다.

감사합니다.

* LLM RAG 모델의 기술 내용 전달을 위하여 해당 내용이 녹화된 서비스의 시연영상을 아래의 버튼을 눌러서 확인할 수 있습니다.

MiliPat 팀 드림
            `,
            isSourceContained: true,
            context: null,
          },
        ]);
      }, 500);
    }
  }, [dialogContext]);

  return (
    <Card
      className="relative flex h-full w-full flex-col items-center border-1"
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
          <div className="z-50 flex h-fit w-full flex-col items-center gap-1">
            <Tooltip
              className="max-w-[350px] p-4"
              color={"primary"}
              showArrow={true}
              content={
                <div className="flex flex-col items-center gap-2">
                  <p className="text-sm font-bold">
                    MiliPat은 사용자의 필요에 따라 적절한 LLM 환경을 선택하여
                    질의할 수 있도록 지원하고 있습니다.
                  </p>
                  <div className="flex flex-col gap-1">
                    <li className="text-tiny">
                      GPT 성능 모델 : 사전학습모델로 유연한 답변에 특화
                    </li>
                    <li className="text-tiny">
                      MiliPat 보안 모델 : 독립된 서버자원으로 보안에 특화
                    </li>
                  </div>
                </div>
              }
            >
              <Tabs
                aria-label="Options"
                className="z-50"
                size="sm"
                color={"primary"}
                variant={"bordered"}
              >
                <Tab key="GPT" title="GPT 성능 모델"></Tab>
                <Tab key="MiliPat" title="MiliPat 보안 모델"></Tab>
              </Tabs>
            </Tooltip>
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
