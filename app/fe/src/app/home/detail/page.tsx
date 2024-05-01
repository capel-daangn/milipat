"use client";

import {
  Button,
  ButtonGroup,
  Card,
  Chip,
  CircularProgress,
  Pagination,
} from "@nextui-org/react";
import { useEffect, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
// import { Tldraw } from "@tldraw/tldraw";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url,
).toString();

import dynamic from "next/dynamic";
import { useIsMobile } from "@/hooks/useMediaQuery";

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
      className="mx-auto flex h-full w-full max-w-[1200px] flex-row items-start justify-between p-4"
      style={{
        display: "grid",
        gridTemplateColumns: mobile ? "1fr" : "100px 600px 1fr",
        gridTemplateRows: mobile ? "1fr 1fr" : "1fr",
        gap: "20px",
      }}
    >
      <div></div>

      <div className="relative flex max-h-[75vh] min-h-fit w-full flex-col items-center justify-center gap-[20px]">
        <Card className="h-[300px] w-full p-8">
          <div className="flex flex-col gap-2">
            <p className="text-xl font-bold">휴대형 군사용 드론 폭탄 장치</p>
            <div className="flex flex-row gap-2">
              {["드론", "제어", "폭탄"].map((e, i) => (
                <Chip key={i} color={"secondary"}>
                  #{e}
                </Chip>
              ))}
            </div>
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
        {isWindowLoaded ? (
          <TldrawComponent />
        ) : (
          <CircularProgress></CircularProgress>
        )}
        {/* <div className="flex flex-col items-start justify-start">
          <Tabs
            aria-label="Options"
            radius={"none"}
            size={"lg"}
            variant={"bordered"}
          >
            <Tab key="tldraw" title="tldraw">
            </Tab>
            <Tab key="text" title="text">
              sadfs
            </Tab>
          </Tabs>
        </div> */}
      </Card>
    </section>
  );
}
