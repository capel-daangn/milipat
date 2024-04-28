type IconProps = {
  isActivated?: boolean;
  width?: any;
  height?: number;
  fill?: string;
  strokeFill?: string;
  strokeWidth?: number;
  isActive?: boolean;
};

export function IconLogo(props: IconProps) {
  return (
    <>
      <svg
        width={props.width}
        height={props.height}
        viewBox="0 0 167 41"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M154.189 8.54999H161.189V18.05H166.489V23.5H161.189V40H154.189V23.5H150.789V18.05H154.189V8.54999Z"
          fill={props.fill}
        />
        <path
          d="M130.626 40.6C128.593 40.6 126.743 40.2 125.076 39.4C123.443 38.5667 122.143 37.3 121.176 35.6C120.209 33.9 119.726 31.7333 119.726 29.1C119.726 26.6333 120.226 24.5 121.226 22.7C122.226 20.9 123.543 19.5167 125.176 18.55C126.81 17.55 128.543 17.05 130.376 17.05C132.543 17.05 134.176 17.4167 135.276 18.15C136.409 18.85 137.343 19.6333 138.076 20.5L137.776 21.35L138.426 18.15H144.926V40H137.926V35.25L138.476 36.75C138.409 36.75 138.21 36.95 137.876 37.35C137.543 37.7167 137.043 38.1667 136.376 38.7C135.743 39.2 134.943 39.6333 133.976 40C133.043 40.4 131.926 40.6 130.626 40.6ZM132.626 34.9C133.893 34.9 134.959 34.6333 135.826 34.1C136.693 33.5333 137.393 32.7 137.926 31.6V26.25C137.526 25.1833 136.826 24.3333 135.826 23.7C134.859 23.0667 133.71 22.75 132.376 22.75C131.376 22.75 130.443 23.0167 129.576 23.55C128.743 24.05 128.076 24.75 127.576 25.65C127.076 26.55 126.826 27.5833 126.826 28.75C126.826 29.9167 127.093 30.9667 127.626 31.9C128.16 32.8333 128.859 33.5667 129.726 34.1C130.626 34.6333 131.593 34.9 132.626 34.9Z"
          fill={props.fill}
        />
        <path
          d="M101.939 3.20001C106.506 3.20001 110.006 4.33335 112.439 6.60001C114.872 8.83335 116.089 11.8333 116.089 15.6C116.089 17.1 115.856 18.6167 115.389 20.15C114.956 21.65 114.239 23.0167 113.239 24.25C112.272 25.4833 110.956 26.4833 109.289 27.25C107.656 27.9833 105.639 28.35 103.239 28.35H98.0391V40H90.7891V3.20001H101.939ZM103.189 21.3C104.289 21.3 105.206 21.1167 105.939 20.75C106.672 20.35 107.239 19.8667 107.639 19.3C108.072 18.7 108.372 18.0833 108.539 17.45C108.739 16.8167 108.839 16.2667 108.839 15.8C108.839 15.4333 108.772 14.95 108.639 14.35C108.539 13.7167 108.306 13.0833 107.939 12.45C107.572 11.8167 107.006 11.2833 106.239 10.85C105.506 10.4167 104.506 10.2 103.239 10.2H98.0391V21.3H103.189Z"
          fill={props.fill}
        />
        <path
          d="M75.4301 18.15H82.4301V40H75.4301V18.15ZM75.2801 10.4C75.2801 9.36664 75.6801 8.51664 76.4801 7.84998C77.3134 7.18331 78.1967 6.84998 79.1301 6.84998C80.0634 6.84998 80.9134 7.18331 81.6801 7.84998C82.4801 8.51664 82.8801 9.36664 82.8801 10.4C82.8801 11.4333 82.4801 12.2833 81.6801 12.95C80.9134 13.5833 80.0634 13.9 79.1301 13.9C78.1967 13.9 77.3134 13.5833 76.4801 12.95C75.6801 12.2833 75.2801 11.4333 75.2801 10.4Z"
          fill={props.fill}
        />
        <path
          d="M61.2211 0.549988H68.2211V40H61.2211V0.549988Z"
          fill={props.fill}
        />
        <path
          d="M47.0121 18.15H54.0121V40H47.0121V18.15ZM46.8621 10.4C46.8621 9.36664 47.2621 8.51664 48.0621 7.84998C48.8954 7.18331 49.7788 6.84998 50.7121 6.84998C51.6454 6.84998 52.4954 7.18331 53.2621 7.84998C54.0621 8.51664 54.4621 9.36664 54.4621 10.4C54.4621 11.4333 54.0621 12.2833 53.2621 12.95C52.4954 13.5833 51.6454 13.9 50.7121 13.9C49.7788 13.9 48.8954 13.5833 48.0621 12.95C47.2621 12.2833 46.8621 11.4333 46.8621 10.4Z"
          fill={props.fill}
        />
        <path
          d="M0.75 40V1.70001H0.8L21.25 30.7L18.15 30L38.55 1.70001H38.65V40H31.4V18.05L31.85 21.8L19.4 39.5H19.3L6.5 21.8L7.75 18.35V40H0.75Z"
          fill={props.fill}
        />
      </svg>
    </>
  );
}

export const IconSearch = (props: IconProps) => (
  <svg
    aria-hidden="true"
    fill="none"
    focusable="false"
    height={props.height}
    role="presentation"
    viewBox="0 0 24 24"
    width={props.width}
  >
    <path
      d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
      stroke={props.fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={props.strokeWidth}
    />
    <path
      d="M22 22L20 20"
      stroke={props.fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={props.strokeWidth}
    />
  </svg>
);

export const IconBookmark = (props: IconProps) => {
  return (
    <>
      {props.isActive ? (
        <svg
          fill={props.fill}
          viewBox="0 0 16 16"
          height={props.height}
          width={props.width}
          {...props}
        >
          <path
            fillRule="evenodd"
            d="M2 15.5V2a2 2 0 012-2h8a2 2 0 012 2v13.5a.5.5 0 01-.74.439L8 13.069l-5.26 2.87A.5.5 0 012 15.5zM8.16 4.1a.178.178 0 00-.32 0l-.634 1.285a.178.178 0 01-.134.098l-1.42.206a.178.178 0 00-.098.303L6.58 6.993c.042.041.061.1.051.158L6.39 8.565a.178.178 0 00.258.187l1.27-.668a.178.178 0 01.165 0l1.27.668a.178.178 0 00.257-.187L9.368 7.15a.178.178 0 01.05-.158l1.028-1.001a.178.178 0 00-.098-.303l-1.42-.206a.178.178 0 01-.134-.098L8.16 4.1z"
          />
        </svg>
      ) : (
        <svg
          fill={props.fill}
          viewBox="0 0 16 16"
          height={props.height}
          width={props.width}
          {...props}
        >
          <path
            fillRule="evenodd"
            d="M10.854 5.146a.5.5 0 010 .708l-3 3a.5.5 0 01-.708 0l-1.5-1.5a.5.5 0 11.708-.708L7.5 7.793l2.646-2.647a.5.5 0 01.708 0z"
          />
          <path d="M2 2a2 2 0 012-2h8a2 2 0 012 2v13.5a.5.5 0 01-.777.416L8 13.101l-5.223 2.815A.5.5 0 012 15.5V2zm2-1a1 1 0 00-1 1v12.566l4.723-2.482a.5.5 0 01.554 0L13 14.566V2a1 1 0 00-1-1H4z" />
        </svg>
      )}
    </>
  );
};

export const IconBack = (props: IconProps) => {
  return (
    <>
      {props.isActive ? (
        <svg
          height={props.height}
          width={props.width}
          viewBox="0 0 1024 1024"
          fill={props.fill || "#080341"}
          className="icon"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M669.6 849.6c8.8 8 22.4 7.2 30.4-1.6s7.2-22.4-1.6-30.4l-309.6-280c-8-7.2-8-17.6 0-24.8l309.6-270.4c8.8-8 9.6-21.6 2.4-30.4-8-8.8-21.6-9.6-30.4-2.4L360.8 480.8c-27.2 24-28 64-0.8 88.8l309.6 280z"
            fill=""
          />
        </svg>
      ) : (
        <svg
          height={props.height}
          width={props.width}
          viewBox="0 0 1024 1024"
          fill={props.fill || "#080341"}
          className="icon"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M669.6 849.6c8.8 8 22.4 7.2 30.4-1.6s7.2-22.4-1.6-30.4l-309.6-280c-8-7.2-8-17.6 0-24.8l309.6-270.4c8.8-8 9.6-21.6 2.4-30.4-8-8.8-21.6-9.6-30.4-2.4L360.8 480.8c-27.2 24-28 64-0.8 88.8l309.6 280z"
            fill=""
          />
        </svg>
      )}
    </>
  );
};

export const IconLinkedIn = (props: IconProps) => {
  return (
    <>
      {props.isActive ? (
        <svg
          fill={props.fill || "#080341"}
          // stroke={props.strokeFill || "#080341"}
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="0"
          height={props.height}
          width={props.width}
          viewBox="0 0 24 24"
        >
          <path
            stroke="none"
            d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
          ></path>
          <circle cx="4" cy="4" r="2" stroke="none"></circle>
        </svg>
      ) : (
        <svg
          fill={props.fill || "#080341"}
          // stroke={props.strokeFill || "#080341"}
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="0"
          height={props.height}
          width={props.width}
          viewBox="0 0 24 24"
        >
          <path
            stroke="none"
            d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
          ></path>
          <circle cx="4" cy="4" r="2" stroke="none"></circle>
        </svg>
      )}
    </>
  );
};

export const IconGithub = (props: IconProps) => {
  return (
    <>
      {props.isActive ? (
        <svg
          height={props.height}
          width={props.width}
          viewBox="0 0 20 20"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <title>github [#142]</title>
          <desc>Created with Sketch.</desc>
          <defs></defs>
          <g
            id="Page-1"
            stroke="none"
            stroke-width="1"
            fill="none"
            fill-rule="evenodd"
          >
            <g
              id="Dribbble-Light-Preview"
              transform="translate(-140.000000, -7559.000000)"
              fill={props.fill || "#080341"}
            >
              <g id="icons" transform="translate(56.000000, 160.000000)">
                <path
                  d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399"
                  id="github-[#142]"
                ></path>
              </g>
            </g>
          </g>
        </svg>
      ) : (
        <svg
          height={props.height}
          width={props.width}
          viewBox="0 0 20 20"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <title>github [#142]</title>
          <desc>Created with Sketch.</desc>
          <defs></defs>
          <g
            id="Page-1"
            stroke="none"
            stroke-width="1"
            fill="none"
            fill-rule="evenodd"
          >
            <g
              id="Dribbble-Light-Preview"
              transform="translate(-140.000000, -7559.000000)"
              fill={props.fill || "#080341"}
            >
              <g id="icons" transform="translate(56.000000, 160.000000)">
                <path
                  d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399"
                  id="github-[#142]"
                ></path>
              </g>
            </g>
          </g>
        </svg>
      )}
    </>
  );
};

export const IconVoice = (props: IconProps) => {
  return (
    <>
      {props.isActive ? (
        <svg
          height={props.height}
          width={props.width}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6 11L6 13"
            stroke={props.fill || "#080341"}
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M9 9L9 15"
            stroke={props.fill || "#080341"}
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M15 9L15 15"
            stroke={props.fill || "#080341"}
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M18 11L18 13"
            stroke={props.fill || "#080341"}
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M12 11L12 13"
            stroke={props.fill || "#080341"}
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ) : (
        <svg
          height={props.height}
          width={props.width}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6 11L6 13"
            stroke={props.fill || "#000000"}
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M9 9L9 15"
            stroke={props.fill || "#000000"}
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M15 9L15 15"
            stroke={props.fill || "#000000"}
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M18 11L18 13"
            stroke={props.fill || "#000000"}
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M12 11L12 13"
            stroke={props.fill || "#000000"}
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      )}
    </>
  );
};

export const IconPrev = (props: IconProps) => {
  return (
    <>
      {props.isActive ? (
        <svg
          height={props.height}
          width={props.width}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.00003 11.7501L11.5 17.1501"
            stroke={props.fill || "#000000"}
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M7.00003 11.7501L11.5 6.35016"
            stroke={props.fill || "#000000"}
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M12 11.7501L16.5 17.1501"
            stroke={props.fill || "#000000"}
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M12 11.7501L16.5 6.35016"
            stroke={props.fill || "#000000"}
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ) : (
        <svg
          height={props.height}
          width={props.width}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.00003 11.7501L11.5 17.1501"
            stroke={props.fill || "#000000"}
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M7.00003 11.7501L11.5 6.35016"
            stroke={props.fill || "#000000"}
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M12 11.7501L16.5 17.1501"
            stroke={props.fill || "#000000"}
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M12 11.7501L16.5 6.35016"
            stroke={props.fill || "#000000"}
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      )}
    </>
  );
};

export const IconNext = (props: IconProps) => {
  return (
    <>
      {props.isActive ? (
        <svg
          height={props.height}
          width={props.width}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16 11.7501L11.5 17.1501"
            stroke={props.fill || "#000000"}
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M16 11.7501L11.5 6.35016"
            stroke={props.fill || "#000000"}
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M11 11.7501L6.50003 17.1501"
            stroke={props.fill || "#000000"}
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M11 11.7501L6.50003 6.35016"
            stroke={props.fill || "#000000"}
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ) : (
        <svg
          height={props.height}
          width={props.width}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16 11.7501L11.5 17.1501"
            stroke={props.fill || "#000000"}
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M16 11.7501L11.5 6.35016"
            stroke={props.fill || "#000000"}
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M11 11.7501L6.50003 17.1501"
            stroke={props.fill || "#000000"}
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M11 11.7501L6.50003 6.35016"
            stroke={props.fill || "#000000"}
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      )}
    </>
  );
};
export const IconHome = (props: IconProps) => {
  return (
    <>
      {props.isActive ? (
        <svg
          fill={props.fill}
          height={props.height}
          width={props.width}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M20 20a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-9H1l10.327-9.388a1 1 0 0 1 1.346 0L23 11h-3v9z" />
          </g>
        </svg>
      ) : (
        <svg
          fill={props.fill}
          height={props.height}
          width={props.width}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M20 20a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-9H1l10.327-9.388a1 1 0 0 1 1.346 0L23 11h-3v9z" />
          </g>
        </svg>
      )}
    </>
  );
};

export const IconPhone = (props: IconProps) => {
  return (
    <>
      {props.isActive ? (
        <svg
          fill={props.fill}
          height={props.height}
          width={props.width}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M21 16.42v3.536a1 1 0 0 1-.93.998c-.437.03-.794.046-1.07.046-8.837 0-16-7.163-16-16 0-.276.015-.633.046-1.07A1 1 0 0 1 4.044 3H7.58a.5.5 0 0 1 .498.45c.023.23.044.413.064.552A13.901 13.901 0 0 0 9.35 8.003c.095.2.033.439-.147.567l-2.158 1.542a13.047 13.047 0 0 0 6.844 6.844l1.54-2.154a.462.462 0 0 1 .573-.149 13.901 13.901 0 0 0 4 1.205c.139.02.322.042.55.064a.5.5 0 0 1 .449.498z" />
          </g>
        </svg>
      ) : (
        <svg
          fill={props.fill}
          height={props.height}
          width={props.width}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M21 16.42v3.536a1 1 0 0 1-.93.998c-.437.03-.794.046-1.07.046-8.837 0-16-7.163-16-16 0-.276.015-.633.046-1.07A1 1 0 0 1 4.044 3H7.58a.5.5 0 0 1 .498.45c.023.23.044.413.064.552A13.901 13.901 0 0 0 9.35 8.003c.095.2.033.439-.147.567l-2.158 1.542a13.047 13.047 0 0 0 6.844 6.844l1.54-2.154a.462.462 0 0 1 .573-.149 13.901 13.901 0 0 0 4 1.205c.139.02.322.042.55.064a.5.5 0 0 1 .449.498z" />
          </g>
        </svg>
      )}
    </>
  );
};

export const IconPerson = (props: IconProps) => {
  return (
    <>
      {props.isActive ? (
        <svg
          fill={props.fill}
          height={props.height}
          width={props.width}
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M16 15.503A5.041 5.041 0 1 0 16 5.42a5.041 5.041 0 0 0 0 10.083zm0 2.215c-6.703 0-11 3.699-11 5.5v3.363h22v-3.363c0-2.178-4.068-5.5-11-5.5z" />
        </svg>
      ) : (
        <svg
          fill={props.fill}
          height={props.height}
          width={props.width}
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M16 15.503A5.041 5.041 0 1 0 16 5.42a5.041 5.041 0 0 0 0 10.083zm0 2.215c-6.703 0-11 3.699-11 5.5v3.363h22v-3.363c0-2.178-4.068-5.5-11-5.5z" />
        </svg>
      )}
    </>
  );
};

export const IconChat = (props: IconProps) => {
  return (
    <>
      {props.isActive ? (
        <svg
          fill={props.fill}
          height={props.height}
          width={props.width}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M5.457 18.185C3.358 16.677 2 14.4 2 11.908 2 7.323 6.475 3.6 12 3.6s10 3.723 10 8.308c0 4.584-4.475 8.307-10 8.307a11.36 11.36 0 0 1-3.272-.461c-.092-.03-.216-.03-.308-.03-.185 0-.37.06-.525.153l-2.191 1.261a.44.44 0 0 1-.185.062.342.342 0 0 1-.34-.338c0-.093.03-.154.062-.247.03-.03.308-1.046.463-1.661 0-.062.03-.154.03-.216 0-.246-.092-.43-.277-.553zm3.21-7.674c.717 0 1.285-.568 1.285-1.285 0-.718-.568-1.286-1.285-1.286-.718 0-1.285.568-1.285 1.286 0 .717.567 1.285 1.285 1.285zm6.666 0c.718 0 1.285-.568 1.285-1.285 0-.718-.567-1.286-1.285-1.286-.717 0-1.285.568-1.285 1.286 0 .717.568 1.285 1.285 1.285z" />
          </g>
        </svg>
      ) : (
        <svg
          fill={props.fill}
          height={props.height}
          width={props.width}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M5.457 18.185C3.358 16.677 2 14.4 2 11.908 2 7.323 6.475 3.6 12 3.6s10 3.723 10 8.308c0 4.584-4.475 8.307-10 8.307a11.36 11.36 0 0 1-3.272-.461c-.092-.03-.216-.03-.308-.03-.185 0-.37.06-.525.153l-2.191 1.261a.44.44 0 0 1-.185.062.342.342 0 0 1-.34-.338c0-.093.03-.154.062-.247.03-.03.308-1.046.463-1.661 0-.062.03-.154.03-.216 0-.246-.092-.43-.277-.553zm3.21-7.674c.717 0 1.285-.568 1.285-1.285 0-.718-.568-1.286-1.285-1.286-.718 0-1.285.568-1.285 1.286 0 .717.567 1.285 1.285 1.285zm6.666 0c.718 0 1.285-.568 1.285-1.285 0-.718-.567-1.286-1.285-1.286-.717 0-1.285.568-1.285 1.286 0 .717.568 1.285 1.285 1.285z" />
          </g>
        </svg>
      )}
    </>
  );
};

export const IconVoiceChat = (props: IconProps) => {
  return (
    <>
      {props.isActive ? (
        <svg
          fill={props.fill}
          height={props.height}
          width={props.width}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M4.929 19.071A9.969 9.969 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10H2l2.929-2.929zM11 6v12h2V6h-2zM7 9v6h2V9H7zm8 0v6h2V9h-2z" />
          </g>
        </svg>
      ) : (
        <svg
          fill={props.fill}
          height={props.height}
          width={props.width}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M4.929 19.071A9.969 9.969 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10H2l2.929-2.929zM11 6v12h2V6h-2zM7 9v6h2V9H7zm8 0v6h2V9h-2z" />
          </g>
        </svg>
      )}
    </>
  );
};

export const IconCamera = (props: IconProps) => {
  return (
    <>
      {props.isActive ? (
        <svg
          fill={props.fill}
          height={props.height}
          width={props.width}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M9 3h6l2 2h4a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h4l2-2zm3 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12zm0-2a4 4 0 1 1 0-8 4 4 0 0 1 0 8z" />
          </g>
        </svg>
      ) : (
        <svg
          fill={props.fill}
          height={props.height}
          width={props.width}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M9 3h6l2 2h4a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h4l2-2zm3 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12zm0-2a4 4 0 1 1 0-8 4 4 0 0 1 0 8z" />
          </g>
        </svg>
      )}
    </>
  );
};

export const IconBook = (props: IconProps) => {
  return (
    <>
      {props.isActive ? (
        <svg
          fill={props.fill}
          height={props.height}
          width={props.width}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M21 18H6a1 1 0 0 0 0 2h15v2H6a3 3 0 0 1-3-3V4a2 2 0 0 1 2-2h16v16zm-5-9V7H8v2h8z" />
          </g>
        </svg>
      ) : (
        <svg
          fill={props.fill}
          height={props.height}
          width={props.width}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M21 18H6a1 1 0 0 0 0 2h15v2H6a3 3 0 0 1-3-3V4a2 2 0 0 1 2-2h16v16zm-5-9V7H8v2h8z" />
          </g>
        </svg>
      )}
    </>
  );
};

export const IconProfile = (props: IconProps) => {
  return (
    <>
      {props.isActive ? (
        <svg
          fill={props.fill}
          height={props.height}
          width={props.width}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M12 17c3.662 0 6.865 1.575 8.607 3.925l-1.842.871C17.347 20.116 14.847 19 12 19c-2.847 0-5.347 1.116-6.765 2.796l-1.841-.872C5.136 18.574 8.338 17 12 17zm0-15a5 5 0 0 1 5 5v3a5 5 0 0 1-10 0V7a5 5 0 0 1 5-5z" />
          </g>
        </svg>
      ) : (
        <svg
          fill={props.fill}
          height={props.height}
          width={props.width}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M12 17c3.662 0 6.865 1.575 8.607 3.925l-1.842.871C17.347 20.116 14.847 19 12 19c-2.847 0-5.347 1.116-6.765 2.796l-1.841-.872C5.136 18.574 8.338 17 12 17zm0-15a5 5 0 0 1 5 5v3a5 5 0 0 1-10 0V7a5 5 0 0 1 5-5z" />
          </g>
        </svg>
      )}
    </>
  );
};

export const IconFood = (props: IconProps) => {
  return (
    <>
      <svg
        height={props.height}
        width={props.width}
        viewBox="0 0 70.865 70.865"
        enable-background="new 0 0 70.865 70.865"
        id="圖層_1"
        version="1.1"
        xmlSpace="preserve"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <g>
          <circle
            cx="33.822"
            cy="35.434"
            fill="#FFFFFF"
            r="20.125"
            stroke={props.strokeFill}
            stroke-linejoin="round"
            stroke-miterlimit="10"
            stroke-width="3"
          />

          <circle
            cx="33.822"
            cy="35.434"
            fill="#FFFFFF"
            r="7.258"
            stroke={props.strokeFill}
            stroke-linejoin="round"
            stroke-miterlimit="10"
            stroke-width="3"
          />

          <path
            d="M2.933,55.559V38.341   V15.307c0,0,7.4,9.789,7.4,23.034H3.045"
            fill="#FFFFFF"
            stroke={props.strokeFill}
            stroke-linejoin="round"
            stroke-miterlimit="10"
            stroke-width="3"
          />

          <path
            d="M55.584,15.307v5.645   c0,3.41,2.765,6.176,6.175,6.176l0,0c3.41,0,6.174-2.766,6.174-6.176v-5.645"
            fill="none"
            stroke={props.strokeFill}
            stroke-linejoin="round"
            stroke-miterlimit="10"
            stroke-width="3"
          />

          <line
            fill="none"
            stroke={props.strokeFill}
            stroke-linejoin="round"
            stroke-miterlimit="10"
            stroke-width="3"
            x1="61.759"
            x2="61.759"
            y1="15.703"
            y2="55.559"
          />
        </g>
      </svg>
    </>
  );
};

export const IconHotel = (props: IconProps) => {
  return (
    <>
      <svg
        height={props.height}
        width={props.width}
        viewBox="0 0 70.867 70.867"
        enable-background="new 0 0 70.866 70.867"
        id="圖層_1"
        version="1.1"
        xmlSpace="preserve"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <g>
          <rect
            fill="#FFFFFF"
            height="51.426"
            stroke={props.strokeFill}
            stroke-linejoin="round"
            stroke-miterlimit="10"
            stroke-width="3"
            width="41.669"
            x="14.599"
            y="16.508"
          />

          <g>
            <line
              fill="#FFFFFF"
              stroke={props.strokeFill}
              stroke-linejoin="round"
              stroke-miterlimit="10"
              stroke-width="3"
              x1="51.896"
              x2="51.896"
              y1="20.719"
              y2="23.09"
            />

            <line
              fill="#FFFFFF"
              stroke={props.strokeFill}
              stroke-linejoin="round"
              stroke-miterlimit="10"
              stroke-width="3"
              x1="43.723"
              x2="43.723"
              y1="20.719"
              y2="23.09"
            />

            <line
              fill="#FFFFFF"
              stroke={props.strokeFill}
              stroke-linejoin="round"
              stroke-miterlimit="10"
              stroke-width="3"
              x1="35.549"
              x2="35.549"
              y1="20.719"
              y2="23.09"
            />

            <line
              fill="#FFFFFF"
              stroke={props.strokeFill}
              stroke-linejoin="round"
              stroke-miterlimit="10"
              stroke-width="3"
              x1="27.376"
              x2="27.376"
              y1="20.719"
              y2="23.09"
            />

            <line
              fill="#FFFFFF"
              stroke={props.strokeFill}
              stroke-linejoin="round"
              stroke-miterlimit="10"
              stroke-width="3"
              x1="19.203"
              x2="19.203"
              y1="20.719"
              y2="23.09"
            />
          </g>

          <g>
            <line
              fill="#FFFFFF"
              stroke={props.strokeFill}
              stroke-linejoin="round"
              stroke-miterlimit="10"
              stroke-width="3"
              x1="51.896"
              x2="51.896"
              y1="28.252"
              y2="30.624"
            />

            <line
              fill="#FFFFFF"
              stroke={props.strokeFill}
              stroke-linejoin="round"
              stroke-miterlimit="10"
              stroke-width="3"
              x1="43.723"
              x2="43.723"
              y1="28.252"
              y2="30.624"
            />

            <line
              fill="#FFFFFF"
              stroke={props.strokeFill}
              stroke-linejoin="round"
              stroke-miterlimit="10"
              stroke-width="3"
              x1="35.549"
              x2="35.549"
              y1="28.252"
              y2="30.624"
            />

            <line
              fill="#FFFFFF"
              stroke={props.strokeFill}
              stroke-linejoin="round"
              stroke-miterlimit="10"
              stroke-width="3"
              x1="27.376"
              x2="27.376"
              y1="28.252"
              y2="30.624"
            />

            <line
              fill="#FFFFFF"
              stroke={props.strokeFill}
              stroke-linejoin="round"
              stroke-miterlimit="10"
              stroke-width="3"
              x1="19.203"
              x2="19.203"
              y1="28.252"
              y2="30.624"
            />
          </g>

          <g>
            <line
              fill="#FFFFFF"
              stroke={props.strokeFill}
              stroke-linejoin="round"
              stroke-miterlimit="10"
              stroke-width="3"
              x1="51.896"
              x2="51.896"
              y1="35.787"
              y2="38.158"
            />

            <line
              fill="#FFFFFF"
              stroke={props.strokeFill}
              stroke-linejoin="round"
              stroke-miterlimit="10"
              stroke-width="3"
              x1="43.723"
              x2="43.723"
              y1="35.787"
              y2="38.158"
            />

            <line
              fill="#FFFFFF"
              stroke={props.strokeFill}
              stroke-linejoin="round"
              stroke-miterlimit="10"
              stroke-width="3"
              x1="35.549"
              x2="35.549"
              y1="35.787"
              y2="38.158"
            />

            <line
              fill="#FFFFFF"
              stroke={props.strokeFill}
              stroke-linejoin="round"
              stroke-miterlimit="10"
              stroke-width="3"
              x1="27.376"
              x2="27.376"
              y1="35.787"
              y2="38.158"
            />

            <line
              fill="#FFFFFF"
              stroke={props.strokeFill}
              stroke-linejoin="round"
              stroke-miterlimit="10"
              stroke-width="3"
              x1="19.203"
              x2="19.203"
              y1="35.787"
              y2="38.158"
            />
          </g>

          <g>
            <line
              fill="#FFFFFF"
              stroke={props.strokeFill}
              stroke-linejoin="round"
              stroke-miterlimit="10"
              stroke-width="3"
              x1="51.896"
              x2="51.896"
              y1="43.32"
              y2="45.691"
            />

            <line
              fill="#FFFFFF"
              stroke={props.strokeFill}
              stroke-linejoin="round"
              stroke-miterlimit="10"
              stroke-width="3"
              x1="43.723"
              x2="43.723"
              y1="43.32"
              y2="45.691"
            />

            <line
              fill="#FFFFFF"
              stroke={props.strokeFill}
              stroke-linejoin="round"
              stroke-miterlimit="10"
              stroke-width="3"
              x1="35.549"
              x2="35.549"
              y1="43.32"
              y2="45.691"
            />

            <line
              fill="#FFFFFF"
              stroke={props.strokeFill}
              stroke-linejoin="round"
              stroke-miterlimit="10"
              stroke-width="3"
              x1="27.376"
              x2="27.376"
              y1="43.32"
              y2="45.691"
            />

            <line
              fill="#FFFFFF"
              stroke={props.strokeFill}
              stroke-linejoin="round"
              stroke-miterlimit="10"
              stroke-width="3"
              x1="19.203"
              x2="19.203"
              y1="43.32"
              y2="45.691"
            />
          </g>

          <g>
            <line
              fill="#FFFFFF"
              stroke={props.strokeFill}
              stroke-linejoin="round"
              stroke-miterlimit="10"
              stroke-width="3"
              x1="51.896"
              x2="51.896"
              y1="50.854"
              y2="53.227"
            />

            <line
              fill="#FFFFFF"
              stroke={props.strokeFill}
              stroke-linejoin="round"
              stroke-miterlimit="10"
              stroke-width="3"
              x1="43.723"
              x2="43.723"
              y1="50.854"
              y2="53.227"
            />

            <line
              fill="#FFFFFF"
              stroke={props.strokeFill}
              stroke-linejoin="round"
              stroke-miterlimit="10"
              stroke-width="3"
              x1="35.549"
              x2="35.549"
              y1="50.854"
              y2="53.227"
            />

            <line
              fill="#FFFFFF"
              stroke={props.strokeFill}
              stroke-linejoin="round"
              stroke-miterlimit="10"
              stroke-width="3"
              x1="27.376"
              x2="27.376"
              y1="50.854"
              y2="53.227"
            />

            <line
              fill="#FFFFFF"
              stroke={props.strokeFill}
              stroke-linejoin="round"
              stroke-miterlimit="10"
              stroke-width="3"
              x1="19.203"
              x2="19.203"
              y1="50.854"
              y2="53.227"
            />
          </g>

          <polygon
            fill="#FFFFFF"
            points="50.082,2.934    48.387,6.369 44.596,6.92 47.339,9.594 46.69,13.37 50.082,11.588 53.473,13.37 52.825,9.594 55.568,6.92 51.777,6.369  "
            stroke={props.strokeFill}
            stroke-linejoin="round"
            stroke-miterlimit="10"
            stroke-width="3"
          />

          <polygon
            fill="#FFFFFF"
            points="35.433,2.934    33.737,6.369 29.946,6.92 32.69,9.594 32.042,13.37 35.433,11.588 38.824,13.37 38.176,9.594 40.919,6.92 37.128,6.369  "
            stroke={props.strokeFill}
            stroke-linejoin="round"
            stroke-miterlimit="10"
            stroke-width="3"
          />

          <polygon
            fill="#FFFFFF"
            points="20.784,2.934    19.089,6.369 15.298,6.92 18.041,9.594 17.394,13.37 20.784,11.588 24.175,13.37 23.527,9.594 26.271,6.92 22.479,6.369  "
            stroke={props.strokeFill}
            stroke-linejoin="round"
            stroke-miterlimit="10"
            stroke-width="3"
          />

          <rect
            fill="#FFFFFF"
            height="10.545"
            stroke={props.strokeFill}
            stroke-linejoin="round"
            stroke-miterlimit="10"
            stroke-width="3"
            width="9.063"
            x="30.901"
            y="57.389"
          />
        </g>
      </svg>
    </>
  );
};

export const IconCalendar = (props: IconProps) => {
  return (
    <>
      <svg
        height={props.height}
        width={props.width}
        viewBox="0 0 70.865 70.865"
        enable-background="new 0 0 70.865 70.865"
        id="圖層_1"
        version="1.1"
        xmlSpace="preserve"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <g>
          <rect
            fill="#FFFFFF"
            height="37.607"
            stroke={props.strokeFill}
            stroke-linejoin="round"
            stroke-miterlimit="10"
            stroke-width="3"
            width="55"
            x="7.933"
            y="22.758"
          />

          <rect
            fill="#FFFFFF"
            height="9.332"
            stroke={props.strokeFill}
            stroke-linejoin="round"
            stroke-miterlimit="10"
            stroke-width="3"
            width="55"
            x="7.933"
            y="13.426"
          />

          <g>
            <line
              fill="none"
              stroke={props.strokeFill}
              stroke-linejoin="round"
              stroke-miterlimit="10"
              stroke-width="3"
              x1="19.312"
              x2="19.312"
              y1="9"
              y2="17.061"
            />

            <line
              fill="none"
              stroke={props.strokeFill}
              stroke-linejoin="round"
              stroke-miterlimit="10"
              stroke-width="3"
              x1="30.059"
              x2="30.059"
              y1="9"
              y2="17.061"
            />

            <line
              fill="none"
              stroke={props.strokeFill}
              stroke-linejoin="round"
              stroke-miterlimit="10"
              stroke-width="3"
              x1="40.806"
              x2="40.806"
              y1="9"
              y2="17.061"
            />

            <line
              fill="none"
              stroke={props.strokeFill}
              stroke-linejoin="round"
              stroke-miterlimit="10"
              stroke-width="3"
              x1="51.553"
              x2="51.553"
              y1="9"
              y2="17.061"
            />
          </g>

          <rect
            fill="#FFFFFF"
            height="5.112"
            stroke={props.strokeFill}
            stroke-linejoin="round"
            stroke-miterlimit="10"
            stroke-width="3"
            width="6.186"
            x="26.419"
            y="28.201"
          />

          <rect
            fill="#FFFFFF"
            height="5.112"
            stroke={props.strokeFill}
            stroke-linejoin="round"
            stroke-miterlimit="10"
            stroke-width="3"
            width="6.186"
            x="14.578"
            y="28.201"
          />

          <g>
            <rect
              fill="#FFFFFF"
              height="5.112"
              stroke={props.strokeFill}
              stroke-linejoin="round"
              stroke-miterlimit="10"
              stroke-width="3"
              width="6.186"
              x="50.102"
              y="39.006"
            />

            <rect
              fill="#FFFFFF"
              height="5.112"
              stroke={props.strokeFill}
              stroke-linejoin="round"
              stroke-miterlimit="10"
              stroke-width="3"
              width="6.186"
              x="38.261"
              y="39.006"
            />

            <rect
              fill="#FFFFFF"
              height="5.112"
              stroke={props.strokeFill}
              stroke-linejoin="round"
              stroke-miterlimit="10"
              stroke-width="3"
              width="6.186"
              x="26.419"
              y="39.006"
            />

            <rect
              fill="#FFFFFF"
              height="5.112"
              stroke={props.strokeFill}
              stroke-linejoin="round"
              stroke-miterlimit="10"
              stroke-width="3"
              width="6.186"
              x="14.578"
              y="39.006"
            />
          </g>

          <rect
            fill="#FFFFFF"
            height="5.113"
            stroke={props.strokeFill}
            stroke-linejoin="round"
            stroke-miterlimit="10"
            stroke-width="3"
            width="6.186"
            x="50.102"
            y="49.811"
          />

          <rect
            fill="#FFFFFF"
            height="5.113"
            stroke={props.strokeFill}
            stroke-linejoin="round"
            stroke-miterlimit="10"
            stroke-width="3"
            width="6.186"
            x="38.261"
            y="49.811"
          />
        </g>
      </svg>
    </>
  );
};

export const IconParking = (props: IconProps) => {
  return (
    <>
      <svg
        height={props.height}
        width={props.width}
        viewBox="0 0 70.866 70.866"
        enable-background="new 0 0 70.866 70.866"
        id="圖層_1"
        version="1.1"
        xmlSpace="preserve"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <g>
          <rect
            fill="#FFFFFF"
            height="39.429"
            stroke={props.strokeFill}
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-miterlimit="10"
            stroke-width="3"
            width="46.391"
            x="12.238"
            y="26.879"
          />

          <polygon
            fill="#FFFFFF"
            points="   65.523,26.879 35.433,4.558 5.343,26.879  "
            stroke={props.strokeFill}
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-miterlimit="10"
            stroke-width="3"
          />

          <g>
            <path
              d="    M44.857,35.497c1.898,1.61,2.846,4.085,2.846,7.424s-0.977,5.78-2.921,7.327c-1.948,1.547-4.918,2.32-8.914,2.32h-3.594v7.539    h-6.032V33.08h9.551C39.943,33.08,42.963,33.886,44.857,35.497z M40.43,46.129c0.724-0.812,1.085-1.997,1.085-3.558    c0-1.559-0.472-2.668-1.412-3.325c-0.941-0.657-2.404-0.985-4.39-0.985h-3.439v9.086h4.06    C38.343,47.347,39.709,46.941,40.43,46.129z"
              fill="#FFFFFF"
              stroke={props.strokeFill}
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-miterlimit="10"
              stroke-width="3"
            />
          </g>
        </g>
      </svg>
    </>
  );
};

export const IconBenTaxi = (props: IconProps) => {
  return (
    <>
      <svg
        height={props.height}
        width={props.width}
        viewBox="0 0 70.866 70.866"
        enable-background="new 0 0 70.865 70.866"
        id="圖層_1"
        version="1.1"
        xmlSpace="preserve"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <g>
          <path
            d="M8.861,13.346h34.813   c2.97,0,5.631,1.836,6.686,4.612l3.356,8.835c0.772,2.031,2.721,3.375,4.895,3.375h2.123c4.651,0,8.422,3.771,8.422,8.422v4.207   c0,4.396-3.564,7.961-7.961,7.961H8.169c-3.568,0-6.46-2.892-6.46-6.459v-23.8C1.709,16.549,4.911,13.346,8.861,13.346z"
            fill="#FFFFFF"
            stroke={props.strokeFill}
            stroke-linejoin="round"
            stroke-miterlimit="10"
            stroke-width="3"
          />

          <circle
            cx="14.905"
            cy="50.758"
            fill="#FFFFFF"
            r="6.763"
            stroke={props.strokeFill}
            stroke-linejoin="round"
            stroke-miterlimit="10"
            stroke-width="3"
          />

          <circle
            cx="54.148"
            cy="50.758"
            fill="#FFFFFF"
            r="6.763"
            stroke={props.strokeFill}
            stroke-linejoin="round"
            stroke-miterlimit="10"
            stroke-width="3"
          />

          <path
            d="M43.675,18.456   c0.842,0,1.61,0.53,1.909,1.317l2.613,6.879c0.252,0.663,0.558,1.297,0.905,1.901H38.481V18.456H43.675z"
            fill="#FFFFFF"
            stroke={props.strokeFill}
            stroke-linejoin="round"
            stroke-miterlimit="10"
            stroke-width="3"
          />

          <rect
            fill="#FFFFFF"
            height="10.098"
            stroke={props.strokeFill}
            stroke-linejoin="round"
            stroke-miterlimit="10"
            stroke-width="3"
            width="10.723"
            x="22.649"
            y="18.456"
          />

          <path
            d="M6.818,20.499   c0-1.126,0.917-2.043,2.043-2.043h8.679v10.098H6.818V20.499z"
            fill="#FFFFFF"
            stroke={props.strokeFill}
            stroke-linejoin="round"
            stroke-miterlimit="10"
            stroke-width="3"
          />

          <line
            fill="none"
            stroke={props.strokeFill}
            stroke-linejoin="round"
            stroke-miterlimit="10"
            stroke-width="3"
            x1="38.481"
            x2="41.316"
            y1="34.992"
            y2="34.992"
          />
        </g>
      </svg>
    </>
  );
};

export const IconTourSpot = (props: IconProps) => {
  return (
    <>
      <svg
        height={props.height}
        width={props.width}
        viewBox="0 0 70.865 70.865"
        enable-background="new 0 0 70.865 70.865"
        id="圖層_1"
        version="1.1"
        xmlSpace="preserve"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <g>
          <path
            d="   M14.72,63.144h41.427c3.748,0,6.786-3.038,6.786-6.786v-24.68c0-3.748-3.038-6.786-6.786-6.786H14.72   c-3.748,0-6.787,3.038-6.787,6.786v24.68C7.933,60.105,10.972,63.144,14.72,63.144z"
            fill="#FFFFFF"
            stroke={props.strokeFill}
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-miterlimit="10"
            stroke-width="3"
          />

          <g>
            <path
              d="    M12.862,44.546V32.542c0-1.594,1.297-2.89,2.891-2.89h8.688v14.894H12.862z"
              fill="#FFFFFF"
              stroke={props.strokeFill}
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-miterlimit="10"
              stroke-width="3"
            />

            <path
              d="    M46.427,44.546V29.652h8.688c1.594,0,2.891,1.296,2.891,2.89v12.004H46.427z"
              fill="#FFFFFF"
              stroke={props.strokeFill}
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-miterlimit="10"
              stroke-width="3"
            />
          </g>

          <rect
            fill="#FFFFFF"
            height="28.651"
            stroke={props.strokeFill}
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-miterlimit="10"
            stroke-width="3"
            width="14.764"
            x="28.052"
            y="29.652"
          />

          <line
            fill="#FFFFFF"
            stroke={props.strokeFill}
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-miterlimit="10"
            stroke-width="3"
            x1="35.433"
            x2="35.433"
            y1="24.892"
            y2="12.214"
          />

          <line
            fill="#FFFFFF"
            stroke={props.strokeFill}
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-miterlimit="10"
            stroke-width="3"
            x1="55.397"
            x2="15.469"
            y1="16.705"
            y2="7.722"
          />
        </g>
      </svg>
    </>
  );
};

export const IconMap = (props: IconProps) => {
  return (
    <>
      <svg
        height={props.height}
        width={props.width}
        viewBox="0 0 70.867 70.867"
        enable-background="new 0 0 70.866 70.867"
        id="圖層_1"
        version="1.1"
        xmlSpace="preserve"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <g>
          <g>
            <polygon
              fill="#FFFFFF"
              points="    44.123,67.934 61.502,63.322 61.502,22.418 44.123,27.029   "
              stroke={props.strokeFill}
              stroke-linejoin="round"
              stroke-miterlimit="10"
              stroke-width="3"
            />

            <polygon
              fill="#FFFFFF"
              points="    44.123,67.934 26.743,63.322 26.743,22.418 44.123,27.029   "
              stroke={props.strokeFill}
              stroke-linejoin="round"
              stroke-miterlimit="10"
              stroke-width="3"
            />

            <polygon
              fill="#FFFFFF"
              points="9.364,67.934     26.743,63.322 26.743,22.418 9.364,27.029   "
              stroke={props.strokeFill}
              stroke-linejoin="round"
              stroke-miterlimit="10"
              stroke-width="3"
            />

            <path
              d="M30.035,17.021    c0,7.78,14.088,25.658,14.088,25.658s14.088-17.878,14.088-25.658c0-7.781-6.308-14.088-14.088-14.088    C36.342,2.934,30.035,9.24,30.035,17.021z"
              fill="#FFFFFF"
              stroke={props.strokeFill}
              stroke-linejoin="round"
              stroke-miterlimit="10"
              stroke-width="3"
            />

            <circle
              cx="44.123"
              cy="17.66"
              fill="#FFFFFF"
              r="6.731"
              stroke={props.strokeFill}
              stroke-linejoin="round"
              stroke-miterlimit="10"
              stroke-width="3"
            />
          </g>
        </g>
      </svg>
    </>
  );
};

export const IconSign = (props: IconProps) => {
  return (
    <>
      <svg
        height={props.height}
        width={props.width}
        viewBox="0 0 70.866 70.866"
        enable-background="new 0 0 70.866 70.866"
        id="圖層_1"
        version="1.1"
        xmlSpace="preserve"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <g>
          <circle
            cx="37.913"
            cy="6.392"
            fill="#FFFFFF"
            r="3.459"
            stroke={props.strokeFill}
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-miterlimit="10"
            stroke-width="3"
          />

          <line
            fill="none"
            stroke={props.strokeFill}
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-miterlimit="10"
            stroke-width="3"
            x1="37.913"
            x2="37.913"
            y1="9.852"
            y2="67.933"
          />

          <path
            d="   M11.616,24.932h26.297V13.241H11.616c-3.229,0-5.846,2.617-5.846,5.846l0,0C5.771,22.315,8.388,24.932,11.616,24.932z"
            fill="#FFFFFF"
            stroke={props.strokeFill}
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-miterlimit="10"
            stroke-width="3"
          />

          <path
            d="   M22.243,41.904h15.67V30.212h-15.67c-3.229,0-5.846,2.618-5.846,5.846l0,0C16.397,39.287,19.015,41.904,22.243,41.904z"
            fill="#FFFFFF"
            stroke={props.strokeFill}
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-miterlimit="10"
            stroke-width="3"
          />

          <path
            d="   M59.25,33.418H37.913V21.727H59.25c3.229,0,5.846,2.617,5.846,5.846l0,0C65.096,30.801,62.479,33.418,59.25,33.418z"
            fill="#FFFFFF"
            stroke={props.strokeFill}
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-miterlimit="10"
            stroke-width="3"
          />
        </g>
      </svg>
    </>
  );
};

export const IconBadge = (props: IconProps) => {
  return (
    <>
      <svg
        height={props.height}
        width={props.width}
        viewBox="0 0 73.701 73.701"
        enable-background="new 0 0 73.701 73.701"
        id="圖層_1"
        version="1.1"
        xmlSpace="preserve"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <g>
          <path
            d="   M23.997,23.997L12.101,12.103c6.335-6.334,15.086-10.252,24.75-10.252v16.822C31.831,18.673,27.286,20.708,23.997,23.997z"
            fill="#FFFFFF"
            stroke={props.strokeFill}
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-miterlimit="10"
            stroke-width="3"
          />

          <path
            d="   M36.851,18.673V1.851c9.665,0,18.415,3.918,24.748,10.252L49.704,23.997C46.415,20.708,41.871,18.673,36.851,18.673z"
            fill="#FFFFFF"
            stroke={props.strokeFill}
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-miterlimit="10"
            stroke-width="3"
          />

          <path
            d="   M55.028,36.851c0-5.02-2.035-9.564-5.324-12.854l11.895-11.895c6.334,6.334,10.252,15.084,10.252,24.748l0,0H55.028L55.028,36.851z   "
            fill="#FFFFFF"
            stroke={props.strokeFill}
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-miterlimit="10"
            stroke-width="3"
          />

          <path
            d="   M18.673,36.851L18.673,36.851H1.851c0-9.664,3.918-18.414,10.25-24.748l11.896,11.895C20.708,27.286,18.673,31.831,18.673,36.851z"
            fill="#FFFFFF"
            stroke={props.strokeFill}
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-miterlimit="10"
            stroke-width="3"
          />

          <path
            d="   M36.851,55.028v16.822c-9.664,0-18.415-3.918-24.75-10.251l11.896-11.896C27.286,52.994,31.831,55.028,36.851,55.028z"
            fill="#FFFFFF"
            stroke={props.strokeFill}
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-miterlimit="10"
            stroke-width="3"
          />

          <path
            d="   M55.028,36.851h16.822c0,9.666-3.918,18.415-10.252,24.749L49.704,49.704C52.993,46.415,55.028,41.87,55.028,36.851z"
            fill="#FFFFFF"
            stroke={props.strokeFill}
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-miterlimit="10"
            stroke-width="3"
          />

          <path
            d="   M1.851,36.851h16.822c0,5.02,2.035,9.564,5.324,12.854L12.101,61.6C5.769,55.266,1.851,46.517,1.851,36.851L1.851,36.851z"
            fill="#FFFFFF"
            stroke={props.strokeFill}
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-miterlimit="10"
            stroke-width="3"
          />

          <path
            d="   M49.704,49.704L61.599,61.6c-6.333,6.333-15.083,10.251-24.748,10.251V55.028C41.871,55.028,46.415,52.994,49.704,49.704z"
            fill="#FFFFFF"
            stroke={props.strokeFill}
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-miterlimit="10"
            stroke-width="3"
          />

          <path
            d="   M23.997,23.997c3.289-3.289,7.834-5.324,12.854-5.324c5.02,0,9.564,2.035,12.854,5.324s5.324,7.834,5.324,12.854l0,0   c0,5.02-2.035,9.564-5.324,12.854c-3.289,3.29-7.833,5.324-12.854,5.324c-5.02,0-9.564-2.034-12.854-5.324   c-3.289-3.289-5.324-7.834-5.324-12.854S20.708,27.286,23.997,23.997z"
            fill="none"
            stroke={props.strokeFill}
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-miterlimit="10"
            stroke-width="3"
          />
        </g>
      </svg>
    </>
  );
};
