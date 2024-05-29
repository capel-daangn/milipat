"use client";

import { useState, useCallback } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { CircularProgress } from "@nextui-org/react";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url,
).toString();

export default function PdfRender(props: {
  searchText: string;
  pageNumber: number;
  scale: number;
}) {
  const [numPages, setNumPages] = useState<any>(1);
  const [textItems, setTextItems] = useState<any[]>([]);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages);
    console.log(numPages);
  }
  const onPageLoadSuccess = useCallback(async (page: any) => {
    console.log("onPageLoadSuccess_" + page._pageIndex);
    const textContent = await page.getTextContent();
    await setTextItems(textContent.items);
  }, []);

  function highlightPattern(text: any, pattern: any, status: boolean) {
    console.log(pattern + " " + status);
    return text.replace(
      pattern,
      `<mark><strong><u>${pattern}</u></strong></mark>`,
    );
  }

  function getTextItemWithNeighbors(textItems: any, itemIndex: any, span = 1) {
    return textItems
      .slice(Math.max(0, itemIndex - span), itemIndex + 1 + span)
      .filter(Boolean)
      .map((item: any) => item.str)
      .join(" ");
  }
  function getIndexRange(string: any, substring: any) {
    const indexStart = string.indexOf(substring);
    const indexEnd = indexStart + substring.length;

    return [indexStart, indexEnd];
  }
  const customTextRenderer = useCallback(
    (textItem: any) => {
      // console.log(textItem);
      // if (!textItems) {
      //   return;
      // }
      console.log("customTextRenderer_" + textItem.pageIndex);
      var status = false;

      const { itemIndex } = textItem;

      const matchInTextItem = textItem.str.match(props.searchText);

      if (matchInTextItem) {
        // Found full match within current item, no need for black magic
        return highlightPattern(textItem.str, props.searchText, status);
      }

      // Full match within current item not found, let's check if we can find it
      // spanned across multiple lines

      // Get text item with neighbors
      const textItemWithNeighbors = getTextItemWithNeighbors(
        textItems,
        itemIndex,
      );
      // console.log(textItemWithNeighbors);

      const matchInTextItemWithNeighbors = textItemWithNeighbors.match(
        props.searchText,
      );
      // console.log(matchInTextItemWithNeighbors);

      if (!matchInTextItemWithNeighbors) {
        // No match
        return textItem.str;
      }

      // Now we need to figure out if the match we found was at least partially
      // in the line we're currently rendering
      const [matchIndexStart, matchIndexEnd] = getIndexRange(
        textItemWithNeighbors,
        props.searchText,
      );
      const [textItemIndexStart, textItemIndexEnd] = getIndexRange(
        textItemWithNeighbors,
        textItem.str,
      );

      if (
        // Match entirely in the previous line
        matchIndexEnd < textItemIndexStart ||
        // Match entirely in the next line
        matchIndexStart > textItemIndexEnd
      ) {
        return textItem.str;
      }

      // Match found was partially in the line we're currently rendering. Now
      // we need to figure out what does "partially" exactly mean

      // Find partial match in a line
      const indexOfCurrentTextItemInMergedLines = textItemWithNeighbors.indexOf(
        textItem.str,
      );

      const matchIndexStartInTextItem = Math.max(
        0,
        matchIndexStart - indexOfCurrentTextItemInMergedLines,
      );
      const matchIndexEndInTextItem =
        matchIndexEnd - indexOfCurrentTextItemInMergedLines;

      const partialStringToHighlight = textItem.str.slice(
        matchIndexStartInTextItem,
        matchIndexEndInTextItem,
      );
      console.log(textItem.str);
      console.log(partialStringToHighlight);
      status = true;

      return highlightPattern(textItem.str, partialStringToHighlight, status);
    },
    [props.searchText, textItems],
  );

  // return (
  //   <>
  //     {Array.from({ length: 11 }, (v, i) => i).map((e, i) => {
  //       return (
  //         <Document
  //           key={i}
  //           file={"/sample.pdf"}
  //           // onLoadSuccess={onDocumentLoadSuccess}
  //           loading={
  //             <div className="flex h-[500px] w-full flex-col items-center justify-center">
  //               <CircularProgress></CircularProgress>
  //             </div>
  //           }
  //           // className={
  //           //   "flex h-full w-full flex-col items-center overflow-auto overflow-x-auto"
  //           // }
  //         >
  //           <Page
  //             pageNumber={e + 1}
  //             onLoadSuccess={onPageLoadSuccess}
  //             customTextRenderer={customTextRenderer}
  //             scale={props.scale}
  //             height={700}
  //           />
  //         </Document>
  //       );
  //     })}
  //   </>
  // );

  return (
    <Document
      file={"/sample.pdf"}
      onLoadSuccess={onDocumentLoadSuccess}
      loading={
        <div className="flex h-[500px] w-full flex-col items-center justify-center">
          <CircularProgress></CircularProgress>
        </div>
      }
      className={
        "flex h-full w-full flex-col items-center overflow-auto overflow-x-auto"
      }
    >
      {/* {Array.from({ length: numPages }, (v, i) => i).map((e, i) => {
        return (
          <Page
            key={i}
            pageNumber={e + 1}
            onLoadSuccess={onPageLoadSuccess}
            customTextRenderer={customTextRenderer}
            scale={props.scale}
            renderTextLayer={true}
            renderAnnotationLayer={true}
            renderMode={"canvas"}
          />
        );
      })} */}
      <Page
        pageNumber={1}
        onLoadSuccess={onPageLoadSuccess}
        customTextRenderer={customTextRenderer}
        scale={props.scale}
        // width={400}
      />
    </Document>
  );
}
