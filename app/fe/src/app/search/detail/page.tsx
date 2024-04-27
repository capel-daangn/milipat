"use client";

import {
  Card,
  CircularProgress,
  Pagination,
  Tabs,
  Tab,
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
      className="flex h-screen flex-row items-center justify-between px-24 pt-[10vh]"
      style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2vw" }}
    >
      <Card className="relative flex h-[80vh] w-full flex-col items-center justify-center">
        <Document
          file={"/sample.pdf"}
          onLoadSuccess={onDocumentLoadSuccess}
          loading={<CircularProgress></CircularProgress>}
        >
          <Page pageNumber={pageNumber} />
        </Document>
        <div className="absolute bottom-4 z-10">
          <Pagination
            loop
            size={"sm"}
            isCompact
            showControls
            // variant={"light"}
            total={numPages}
            initialPage={1}
            onChange={(e) => {
              setPageNumber(e);
            }}
            classNames={{}}
            // radius={"full"}
          />
        </div>
      </Card>
      <Card className="flex h-[80vh] w-full flex-col">
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
