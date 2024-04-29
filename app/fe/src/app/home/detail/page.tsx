"use client";

import { Card, CircularProgress, Pagination } from "@nextui-org/react";
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
        gridTemplateColumns: mobile ? "1fr" : "2fr 1fr",
        gridTemplateRows: mobile ? "1fr 1fr" : "1fr",
        gap: "20px",
      }}
    >
      <Card className="relative flex h-fit max-h-[70vh] w-full flex-col items-center justify-center">
        <Document
          file={"/sample.pdf"}
          onLoadSuccess={onDocumentLoadSuccess}
          loading={<CircularProgress></CircularProgress>}
          className={"overflow-scroll"}
        >
          <Page pageNumber={pageNumber} scale={1.5} />
          <Page pageNumber={pageNumber} />
          <Page pageNumber={pageNumber} />
        </Document>
        <div className="absolute bottom-0 z-10 flex w-full flex-col items-center justify-center bg-secondary py-2">
          <Pagination
            loop
            size={"sm"}
            isCompact
            showControls
            variant={"light"}
            total={numPages}
            initialPage={1}
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
      <Card className="flex h-full max-h-[70vh] w-full flex-col">
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
