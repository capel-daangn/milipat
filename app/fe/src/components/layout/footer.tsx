import { Button } from "@nextui-org/react";
import { IconLogo } from "../common/icons";

export default function Footer() {
  return (
    <div
      className="sticky bottom-0 left-0 right-0 flex w-full flex-row items-center justify-between px-24 py-8"
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 4fr 2fr",
        gap: "10px",
      }}
    >
      {/* <div>
        {props.isLogoVisible || props.isLogoVisible == undefined ? (
          <button
            onClick={() => {
              router.push("/search");
            }}
          >
            <IconLogo width={"10vw"} fill="black"></IconLogo>
          </button>
        ) : (
          <></>
        )}
      </div>
      <div>
        {props.isSearchBarVisible ? (
          <div className="flex h-[80px] w-full flex-col items-center justify-center">
            <SearchBar value={props.searchedText}></SearchBar>
          </div>
        ) : (
          <></>
        )}
      </div> */}
      <div className="flex flex-row items-center justify-end space-x-4">
        <Button
          variant="light"
          disableRipple
          onPress={() => {
            // router.push("/");
          }}
        >
          서비스 소개
        </Button>
        <Button
          variant="light"
          disableRipple
          onPress={() => {
            // router.push("https://github.com/ziweek/milipat");
          }}
        >
          개발팀 소개
        </Button>
      </div>
    </div>
  );
}
