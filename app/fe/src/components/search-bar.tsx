import { IconSearch } from "@/components/common/icons";
import {
  Autocomplete,
  AutocompleteItem,
  AutocompleteSection,
} from "@nextui-org/react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useCallback, useState } from "react";

const dataset = [
  {
    section: "인공지능",
    documents: [
      {
        title: "복합무기체계의 BIT공유 시스템",
        publish: "국방연구원",
        date: "2019-08-31",
        patentApplicationNumber: "10-2014-0053239",
      },
      {
        title:
          "공포탄 격발인지모듈, 레이저발사기 및 이를 이용한 공포탄 격발인지방법",
        publish: "미국 등록",
        date: "2019-01-03",
        patentApplicationNumber: "10-2018-0071443",
      },
      {
        title: "공포탄 어댑터",
        publish: "미국 등록",
        date: "2019-01-03",
        patentApplicationNumber: "10-2018-0071388",
      },
      {
        title: "전구급 합동작전 분석 시뮬레이터",
        publish: "미국 등록",
        date: "2021-07-30",
        patentApplicationNumber: "10-2020-0162167",
      },
    ],
  },
  {
    section: "제조업",
    documents: [
      {
        title: "포 발사식 탄약",
        publish: "미국 등록",
        date: "2018-10-02",
        patentApplicationNumber: "10-2016-0181330",
      },
      {
        title: "성형파편 탄체 제조방법 및 이의 제조 방법에 의해 제조된 탄체",
        publish: "미국 등록",
        date: "2017-10-27",
        patentApplicationNumber: "10-2015-0089992",
      },
      {
        title: "성형 파편체를 구비하는 고폭탄 제조 공법",
        publish: "미국 등록",
        date: "2017-11-03",
        patentApplicationNumber: "10-2015-0162625",
      },
      {
        title: "낙하지점 표시기능을 갖는 묘사탄",
        publish: "미국 등록",
        date: "2018-06-18",
        patentApplicationNumber: "10-2017-0141402",
      },
      {
        title: "게이지 장착 공구",
        publish: "미국 등록",
        date: "2011-06-09",
        patentApplicationNumber: "10-2009-0029408",
      },
    ],
  },
  {
    section: "군사장비",
    documents: [
      {
        title: "클램프를 이용한 타이어용 런플렛 지지체의 조립구조",
        publish: "미국 등록",
        date: "2015-09-16",
        patentApplicationNumber: "10-2014-0011959",
      },
      {
        title: "타이어용 런플렛 지지체의 연결 및 분리구조",
        publish: "미국 등록",
        date: "2015-09-16",
        patentApplicationNumber: "10-2014-0015214",
      },
      {
        title: "발열기능을 갖는 대공사격훈련용 슬리브",
        publish: "미국 등록",
        date: "2017-01-13",
        patentApplicationNumber: "10-2015-0005462",
      },
      {
        title: "방호의자용 거치장치",
        publish: "미국 등록",
        date: "2015-12-03",
        patentApplicationNumber: "10-2015-0115167",
      },
      {
        title: "실총기 기반 사격 훈련이 가능한 모의 소총",
        publish: "미국 등록",
        date: "2015-11-02",
        patentApplicationNumber: "10-2015-0108679",
      },
    ],
  },
];

interface SearchBarProps {
  value?: string;
  mobile?: boolean;
  isDisabled?: boolean;
}

export default function SearchBar(props: SearchBarProps): any {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [textInput, setTextInput] = useState<string>(props.value || "");

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);

      return params.toString();
    },
    [searchParams],
  );

  return (
    <Autocomplete
      isDisabled={props.isDisabled}
      className={`w-full ${
        pathname == "/home" ? "max-w-lg" : props.mobile ? "max-w-sm" : ""
      } select-text`}
      classNames={{
        clearButton: "text-primary",
        selectorButton: "text-primary",
      }}
      inputProps={{
        classNames: {
          base: "text-[#000000]",
          inputWrapper: "border-2",
          label: "text-primary",
          input: "text-lg",
        },
      }}
      listboxProps={{}}
      color={"primary"}
      fullWidth
      radius="full"
      allowsCustomValue={true}
      // placeholder="검색 키워드를 입력하시오."
      variant="bordered"
      size={pathname == "/home" ? "md" : "sm"}
      isClearable={true}
      inputValue={textInput}
      onInputChange={(e) => {
        setTextInput(e);
      }}
      onSelectionChange={(e) => {
        const query = createQueryString("query", e.toString());
        router.push("/home/result" + "?" + query);
      }}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          const query = createQueryString("query", textInput);
          router.push("/home/result" + "?" + query);
        }
      }}
      startContent={
        <div className="mx-2">
          <IconSearch
            width={20}
            height={20}
            strokeWidth={4}
            fill="#1D4A83"
          ></IconSearch>
        </div>
      }
    >
      {dataset.map((data, i) => (
        <AutocompleteSection
          key={i}
          title={`${data.section} 연관 트랜드 특허`}
          classNames={{
            heading:
              "flex w-full font-bold sticky top-1 z-20 py-2 px-2 bg-default-100 shadow-small rounded-small bg-primary text-white select-none",
          }}
        >
          {data.documents.map((document, j) => (
            <AutocompleteItem
              key={document.title}
              value={document.title}
              className="w-full"
            >
              <div className="flex flex-row items-center justify-between space-y-1 py-2">
                <div className="flex flex-col items-start justify-between">
                  <p className="max-w-[300px] truncate">{document.title}</p>
                  <p className="text-xs text-black/50">
                    {document.patentApplicationNumber},
                  </p>
                  <div className="flex flex-row gap-1">
                    <p className="text-xs text-black/50">
                      {document.date.split(".")[0]}
                    </p>
                    <p className="text-xs text-black/50">{document.publish}</p>
                  </div>
                </div>
                <div className="flex flex-row gap-2">
                  <div className="flex flex-col items-center justify-center gap-1">
                    <p className="text-tiny">분석수</p>
                    <p className="text-xs">
                      {Math.round(Math.random() * (100 - 50) + 50)}
                    </p>
                  </div>
                  <div className="flex flex-col items-center justify-center gap-1">
                    <p className="text-tiny">조회수</p>
                    <p className="text-xs">
                      {Math.round(Math.random() * (200 - 50) + 50)}
                    </p>
                  </div>
                </div>
              </div>
            </AutocompleteItem>
          ))}
        </AutocompleteSection>
      ))}
      {/* <AutocompleteSection
        title="Mammals"
        classNames={{
          heading:
            "flex w-full sticky top-1 z-20 py-3 px-2 bg-default-100 shadow-small rounded-small bg-[#dbeafe]",
        }}
      >
        {animals.map((animal) => (
          <AutocompleteItem
            key={animal.value}
            value={animal.value}
            className="w-full"
          >
            {animal.label}
          </AutocompleteItem>
        ))}
      </AutocompleteSection> */}
    </Autocomplete>
  );
}
