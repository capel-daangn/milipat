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
import { useEffect, useState, useRef } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url,
).toString();

import dynamic from "next/dynamic";
import { useIsMobile } from "@/hooks/useMediaQuery";
import TextBubble from "@/components/text-bubble";
import FooterTray from "@/components/common/footer-tray";
import { useQuery } from "@tanstack/react-query";

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
      className="mx-auto flex h-full w-full max-w-[1200px] flex-row items-start justify-between px-4"
      style={{
        display: "grid",
        gridTemplateColumns: mobile ? "1fr" : "100px 600px 1fr",
        gridTemplateRows: mobile ? "1fr 1fr" : "1fr",
        gap: "20px",
      }}
    >
      <div></div>

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
        <Card className="relative flex h-full min-h-fit w-full flex-col items-center justify-center">
          <Document
            file={"/sample.pdf"}
            onLoadSuccess={onDocumentLoadSuccess}
            loading={<CircularProgress></CircularProgress>}
            className={"overflow-scroll"}
          >
            <Page pageNumber={pageNumber} scale={scale} />
          </Document>
          <div className="absolute bottom-10 z-10 flex w-full flex-col items-center justify-center py-2">
            <ButtonGroup color={"primary"}>
              <Button
                isIconOnly
                onPress={() => {
                  setScale(() => scale - 0.25);
                }}
              >
                -
              </Button>
              <Button isIconOnly>{scale * 100}%</Button>
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
              loop
              size={"sm"}
              isCompact
              showControls
              variant={"flat"}
              total={numPages}
              initialPage={1}
              color={"primary"}
              onChange={(e) => {
                setPageNumber(e);
              }}
              // classNames={{
              //   base: "bg-trasparent",
              //   wrapper: "",
              //   item: "text-white font-bold",
              //   next: "bg-white font-bold",
              // }}
              // radius={"full"}
            />
          </div>
        </Card>
      </div>

      <Card className="flex h-full max-h-[75vh] w-full flex-col">
        {(queryIndexOfViews.data as string) == "analysis" && (
          <AnalysisView></AnalysisView>
        )}
        {(queryIndexOfViews.data as string) == "chatbot" &&
          (isWindowLoaded ? (
            <ChatbotView></ChatbotView>
          ) : (
            <div className="flex h-full w-full flex-col items-center justify-center">
              <CircularProgress></CircularProgress>
            </div>
          ))}
      </Card>
    </section>
  );
}

function AnalysisView(props: any) {
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
    <div
      className={`grid h-full w-full gap-4`}
      // style={{
      //   gridTemplateColumns: false ? "1fr" : "1fr",
      //   gridTemplateRows: false ? "1fr" : "1fr",
      // }}
    >
      <></>
      {/*  */}
      {/* <div
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
      </div> */}
      <Accordion>
        <AccordionItem key="1" aria-label="Accordion 1" title="Accordion 1">
          sdf
        </AccordionItem>
        <AccordionItem key="2" aria-label="Accordion 2" title="Accordion 2">
          sdf
        </AccordionItem>
        <AccordionItem key="3" aria-label="Accordion 3" title="Accordion 3">
          sdf
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
    <div
      className={`grid h-full w-full max-w-[1200px] gap-4`}
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
  );
}
