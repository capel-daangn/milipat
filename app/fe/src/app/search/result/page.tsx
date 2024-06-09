"use client";

import FooterTray from "@/components/common/footer-tray";
import TextBubble from "@/components/text-bubble";
import { useIsMobile } from "@/hooks/useMediaQuery";
import { faker } from "@faker-js/faker/locale/ko";
import {
  Card,
  Link,
  Pagination,
  Accordion,
  AccordionItem,
  Tabs,
  Tab,
  Button,
  CircularProgress,
  Progress,
} from "@nextui-org/react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import WorldmapChart from "@/components/chart/worldmap-chart";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Legend,
} from "chart.js";
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Legend);
import { Bar } from "react-chartjs-2";
import { useApiGet } from "@/hooks/useReactQuery";
import ChatbotTab from "@/components/chatbot-tab";

const dataset = [
  {
    title: "휴대형 군사용 드론 폭탄 장치",
    applicationNumber: "10-2004-0048882",
    patentDate: "2004-06-25",
    filingDate: "6/25/04",
    status: "등록",
    text: "휴대형 군사용 드론 폭탄 장치는 현대 전장에서의 전술적 우위를 제공하는 혁신적인 기술 장비입니다. 이 장치는 소형 드론과 폭발물을 결합하여 적의 진영을 정밀 타격하거나 전략적 목표를 신속하게 파괴하는 데 사용됩니다.",
  },
  {
    title:
      "포드 인양장치 하중시험용 치구(load testing tool for pod lifting equipment)",
    applicationNumber: "10-2012-064850",
    filingDate: "6/18/12",
    patentId: "1.01207E+12",
    patentDate: "11/26/12",
    status: "등록",
    text: "휴대형 군사용 드론 폭탄 장치는 현대 전장에서의 전술적 우위를 제공하는 혁신적인 기술 장비입니다. 이 장치는 소형 드론과 폭발물을 결합하여 적의 진영을 정밀 타격하거나 전략적 목표를 신속하게 파괴하는 데 사용됩니다.",
  },
  {
    title:
      "이중곡률반경 형성체 리브를 가지는 항공기 타이어(Aircraft Tire with shapped Double Radius of RIB)",
    applicationNumber: "10-2004-0048382",
    filingDate: "6/25/04",
    patentId: "1.00513E+12",
    patentDate: "8/31/05",
    status: "등록",
    text: "휴대형 군사용 드론 폭탄 장치는 현대 전장에서의 전술적 우위를 제공하는 혁신적인 기술 장비입니다. 이 장치는 소형 드론과 폭발물을 결합하여 적의 진영을 정밀 타격하거나 전략적 목표를 신속하게 파괴하는 데 사용됩니다.",
  },
  {
    title:
      "숄더그루브 깊이를 축소시킨 소형 항공기 타이어(Small-sized Aircraft Tire With Reduced Depth of Shoulder Groove)",
    applicationNumber: "10-2004-0048381",
    filingDate: "6/25/04",
    patentId: "1.00535E+12",
    patentDate: "12/1/05",
    status: "등록",
    text: "휴대형 군사용 드론 폭탄 장치는 현대 전장에서의 전술적 우위를 제공하는 혁신적인 기술 장비입니다. 이 장치는 소형 드론과 폭발물을 결합하여 적의 진영을 정밀 타격하거나 전략적 목표를 신속하게 파괴하는 데 사용됩니다.",
  },
  {
    title: "방독면(GAS-MASK)",
    applicationNumber: "10-2012-0133170",
    filingDate: "11/22/12",
    patentId: "1.01278E+12",
    patentDate: "6/18/13",
    status: "등록",
    text: "휴대형 군사용 드론 폭탄 장치는 현대 전장에서의 전술적 우위를 제공하는 혁신적인 기술 장비입니다. 이 장치는 소형 드론과 폭발물을 결합하여 적의 진영을 정밀 타격하거나 전략적 목표를 신속하게 파괴하는 데 사용됩니다.",
  },
  {
    title: "방독면(GAS-MASK)",
    applicationNumber: "10-2012-0133138",
    filingDate: "11/22/12",
    patentId: "1.01278E+12",
    patentDate: "6/18/13",
    status: "등록",
    text: "휴대형 군사용 드론 폭탄 장치는 현대 전장에서의 전술적 우위를 제공하는 혁신적인 기술 장비입니다. 이 장치는 소형 드론과 폭발물을 결합하여 적의 진영을 정밀 타격하거나 전략적 목표를 신속하게 파괴하는 데 사용됩니다.",
  },
  {
    title: "방독면(GAS-MASK)",
    applicationNumber: "10-2012-0149789",
    filingDate: "12/20/12",
    patentId: "1.01293E+12",
    patentDate: "7/29/13",
    status: "등록",
    text: "휴대형 군사용 드론 폭탄 장치는 현대 전장에서의 전술적 우위를 제공하는 혁신적인 기술 장비입니다. 이 장치는 소형 드론과 폭발물을 결합하여 적의 진영을 정밀 타격하거나 전략적 목표를 신속하게 파괴하는 데 사용됩니다.",
  },
  {
    title:
      "능동 배열 안테나의 성능 검증 시스템 및 방법(System and method for simulating performance of active array antenna)",
    applicationNumber: "10-2012-0133631",
    filingDate: "11/23/12",
    patentId: "1.01337E+12",
    patentDate: "11/29/13",
    status: "등록",
    text: "휴대형 군사용 드론 폭탄 장치는 현대 전장에서의 전술적 우위를 제공하는 혁신적인 기술 장비입니다. 이 장치는 소형 드론과 폭발물을 결합하여 적의 진영을 정밀 타격하거나 전략적 목표를 신속하게 파괴하는 데 사용됩니다.",
  },
  {
    title: "훈련용 유도탄 포드(loading guided missiles pod for training)",
    applicationNumber: "10-2012-0123827",
    filingDate: "11/2/12",
    patentId: "1.01372E+12",
    patentDate: "2/28/14",
    status: "등록",
    text: "휴대형 군사용 드론 폭탄 장치는 현대 전장에서의 전술적 우위를 제공하는 혁신적인 기술 장비입니다. 이 장치는 소형 드론과 폭발물을 결합하여 적의 진영을 정밀 타격하거나 전략적 목표를 신속하게 파괴하는 데 사용됩니다.",
  },
  {
    title:
      "KUH를 위한 비행시뮬레이터 및 그 제어방법(Flight Simulator for KUH and Controlling Method)",
    applicationNumber: "10-2013-0005915",
    filingDate: "1/18/13",
    patentId: "1.01392E+12",
    patentDate: "4/29/14",
    status: "등록",
    text: "휴대형 군사용 드론 폭탄 장치는 현대 전장에서의 전술적 우위를 제공하는 혁신적인 기술 장비입니다. 이 장치는 소형 드론과 폭발물을 결합하여 적의 진영을 정밀 타격하거나 전략적 목표를 신속하게 파괴하는 데 사용됩니다.",
  },
  {
    title: "전술훈련을 위한 충격조끼(Impact vest for tactical training)",
    applicationNumber: "10-2013-0149356",
    filingDate: "12/3/13",
    patentId: "1.01393E+12",
    patentDate: "5/2/14",
    status: "등록",
    text: "휴대형 군사용 드론 폭탄 장치는 현대 전장에서의 전술적 우위를 제공하는 혁신적인 기술 장비입니다. 이 장치는 소형 드론과 폭발물을 결합하여 적의 진영을 정밀 타격하거나 전략적 목표를 신속하게 파괴하는 데 사용됩니다.",
  },
  {
    title: "전술훈련을 위한 충격조끼(Impact vest for tactical training)",
    applicationNumber: "10-2014-0025011",
    filingDate: "3/3/14",
    patentId: "1.01405E+12",
    patentDate: "6/2/14",
    status: "등록",
    text: "휴대형 군사용 드론 폭탄 장치는 현대 전장에서의 전술적 우위를 제공하는 혁신적인 기술 장비입니다. 이 장치는 소형 드론과 폭발물을 결합하여 적의 진영을 정밀 타격하거나 전략적 목표를 신속하게 파괴하는 데 사용됩니다.",
  },
  {
    title:
      "복합 항법 장치를 이용한 고도정보 획득 시스템(ALTITUDE INFORMATION OBTENTION SYSTEM USING A COMPLEX NAVIGATION EQUIPMENT)",
    applicationNumber: "10-2012-0151983",
    filingDate: "12/24/12",
    patentId: "1.01438E+12",
    patentDate: "8/29/14",
    status: "등록",
    text: "휴대형 군사용 드론 폭탄 장치는 현대 전장에서의 전술적 우위를 제공하는 혁신적인 기술 장비입니다. 이 장치는 소형 드론과 폭발물을 결합하여 적의 진영을 정밀 타격하거나 전략적 목표를 신속하게 파괴하는 데 사용됩니다.",
  },
  {
    title:
      "전장효과를 제공하는 폭음탄(A EXPLOSION BOMB FOR PROVIDING BATTLEFIELD EFFECT)",
    applicationNumber: "10-2014-0034219",
    filingDate: "3/24/14",
    patentId: "1.01446E+12",
    patentDate: "9/23/14",
    status: "등록",
    text: "휴대형 군사용 드론 폭탄 장치는 현대 전장에서의 전술적 우위를 제공하는 혁신적인 기술 장비입니다. 이 장치는 소형 드론과 폭발물을 결합하여 적의 진영을 정밀 타격하거나 전략적 목표를 신속하게 파괴하는 데 사용됩니다.",
  },
  {
    title:
      "전장효과를 제공하는 연막탄(SMOKE BOMB FOR PROVIDING BATTLEFIELD EFFECT)",
    applicationNumber: "10-2014-0034222",
    filingDate: "3/24/14",
    patentId: "1.01446E+12",
    patentDate: "9/23/14",
    status: "등록",
    text: "휴대형 군사용 드론 폭탄 장치는 현대 전장에서의 전술적 우위를 제공하는 혁신적인 기술 장비입니다. 이 장치는 소형 드론과 폭발물을 결합하여 적의 진영을 정밀 타격하거나 전략적 목표를 신속하게 파괴하는 데 사용됩니다.",
  },
  {
    title:
      "발사효과를 제공하는 묘사탄을 구비한 박격포용 축사기(A TRENCH MORTAR SABOT TRAINER WITH MOCK BOMB PROVIDING LAUNCH EFFECT)",
    applicationNumber: "10-2014-0057923",
    filingDate: "5/14/14",
    patentId: "1.01451E+12",
    patentDate: "10/8/14",
    status: "등록",
    text: "휴대형 군사용 드론 폭탄 장치는 현대 전장에서의 전술적 우위를 제공하는 혁신적인 기술 장비입니다. 이 장치는 소형 드론과 폭발물을 결합하여 적의 진영을 정밀 타격하거나 전략적 목표를 신속하게 파괴하는 데 사용됩니다.",
  },
  {
    title: "차량 주행 안전장치용 런플랫(RUN FLAT)",
    applicationNumber: "10-2013-0129625",
    filingDate: "10/29/13",
    patentId: "1.01458E+12",
    patentDate: "10/28/14",
    status: "등록",
    text: "휴대형 군사용 드론 폭탄 장치는 현대 전장에서의 전술적 우위를 제공하는 혁신적인 기술 장비입니다. 이 장치는 소형 드론과 폭발물을 결합하여 적의 진영을 정밀 타격하거나 전략적 목표를 신속하게 파괴하는 데 사용됩니다.",
  },
  {
    title:
      "워게임 시뮬레이션 엔진 시스템 및 그 동작 방법(Wargame simulation engine system and operating method thereof)",
    applicationNumber: "10-2014-0145353",
    filingDate: "10/24/14",
    patentId: "1.01477E+12",
    patentDate: "12/19/14",
    status: "등록",
    text: "휴대형 군사용 드론 폭탄 장치는 현대 전장에서의 전술적 우위를 제공하는 혁신적인 기술 장비입니다. 이 장치는 소형 드론과 폭발물을 결합하여 적의 진영을 정밀 타격하거나 전략적 목표를 신속하게 파괴하는 데 사용됩니다.",
  },
  {
    title: "훈련용 유도탄 모의기(Guided missile simulator for training)",
    applicationNumber: "10-2013-0121656",
    filingDate: "10/14/13",
    patentId: "1.01488E+12",
    patentDate: "1/23/15",
    status: "등록",
    text: "휴대형 군사용 드론 폭탄 장치는 현대 전장에서의 전술적 우위를 제공하는 혁신적인 기술 장비입니다. 이 장치는 소형 드론과 폭발물을 결합하여 적의 진영을 정밀 타격하거나 전략적 목표를 신속하게 파괴하는 데 사용됩니다.",
  },
  {
    title:
      "근접전계시험 데이터 보상방법 및 이를 이용한 레이더 및 센서(Near-Field Measurement Data Compensation Method and Radar and Sensor Using thereof)",
    applicationNumber: "10-2013-0139130",
    filingDate: "11/15/13",
    patentId: "1.01494E+12",
    patentDate: "2/11/15",
    status: "등록",
    text: "휴대형 군사용 드론 폭탄 장치는 현대 전장에서의 전술적 우위를 제공하는 혁신적인 기술 장비입니다. 이 장치는 소형 드론과 폭발물을 결합하여 적의 진영을 정밀 타격하거나 전략적 목표를 신속하게 파괴하는 데 사용됩니다.",
  },
  {
    title:
      "가시광선과 적외선 레이저빔이 정렬된 적층형의 레이저 발사기 및 빔 정렬방법(Stacking type laser transmitter providing collinear visible and IR beams)",
    applicationNumber: "10-2013-0022167",
    filingDate: "2/28/13",
    patentId: "1.01498E+12",
    patentDate: "2/25/15",
    status: "등록",
    text: "휴대형 군사용 드론 폭탄 장치는 현대 전장에서의 전술적 우위를 제공하는 혁신적인 기술 장비입니다. 이 장치는 소형 드론과 폭발물을 결합하여 적의 진영을 정밀 타격하거나 전략적 목표를 신속하게 파괴하는 데 사용됩니다.",
  },
  {
    title:
      "가상환경 내 캐릭터와 훈련자 동작연동을 통한 전술 모의훈련 장치, 모의훈련 연동방법 및 모의훈련 모니터링 방법(The Tactical Simulation Training Tool by linking Trainee''s movement with Virtual Character''s movement, Interoperability Method and Trainee Monitoring Method)",
    applicationNumber: "10-2013-0149331",
    filingDate: "12/3/13",
    patentId: "1.01499E+12",
    patentDate: "2/26/15",
    status: "등록",
    text: "휴대형 군사용 드론 폭탄 장치는 현대 전장에서의 전술적 우위를 제공하는 혁신적인 기술 장비입니다. 이 장치는 소형 드론과 폭발물을 결합하여 적의 진영을 정밀 타격하거나 전략적 목표를 신속하게 파괴하는 데 사용됩니다.",
  },
  {
    title: "무인 항공기 자동착륙 방법(METHOD FOR AUTOMATIC LANDING OF UAV)",
    applicationNumber: "10-2014-0046437",
    filingDate: "4/18/14",
    patentId: "1.01508E+12",
    patentDate: "3/26/15",
    status: "등록",
    text: "휴대형 군사용 드론 폭탄 장치는 현대 전장에서의 전술적 우위를 제공하는 혁신적인 기술 장비입니다. 이 장치는 소형 드론과 폭발물을 결합하여 적의 진영을 정밀 타격하거나 전략적 목표를 신속하게 파괴하는 데 사용됩니다.",
  },
  {
    title:
      "회수 및 불발률 확인 기능이 구비된 시험용 자탄(Bomblet unit for test that possess withdrawal and blind shell confirmation function)",
    applicationNumber: "10-2014-0035041",
    filingDate: "3/26/14",
    patentId: "1.0152E+12",
    patentDate: "5/6/15",
    status: "등록",
    text: "휴대형 군사용 드론 폭탄 장치는 현대 전장에서의 전술적 우위를 제공하는 혁신적인 기술 장비입니다. 이 장치는 소형 드론과 폭발물을 결합하여 적의 진영을 정밀 타격하거나 전략적 목표를 신속하게 파괴하는 데 사용됩니다.",
  },
  {
    title: "워터젯(Waterjet)",
    applicationNumber: "10-2015-0005462",
    filingDate: "1/13/15",
    patentId: "1.01522E+12",
    patentDate: "5/13/15",
    status: "등록",
    text: "휴대형 군사용 드론 폭탄 장치는 현대 전장에서의 전술적 우위를 제공하는 혁신적인 기술 장비입니다. 이 장치는 소형 드론과 폭발물을 결합하여 적의 진영을 정밀 타격하거나 전략적 목표를 신속하게 파괴하는 데 사용됩니다.",
  },
  {
    title:
      "고 경도 장갑 강 벤딩용 금형(a High hardness armor steel for bending mold)",
    applicationNumber: "10-2014-0029973",
    filingDate: "3/14/14",
    patentId: "1.01525E+12",
    patentDate: "5/27/15",
    status: "등록",
    text: "휴대형 군사용 드론 폭탄 장치는 현대 전장에서의 전술적 우위를 제공하는 혁신적인 기술 장비입니다. 이 장치는 소형 드론과 폭발물을 결합하여 적의 진영을 정밀 타격하거나 전략적 목표를 신속하게 파괴하는 데 사용됩니다.",
  },
  {
    title:
      "복합무기체계의 BIT공유 시스템(COMPLEX WEAPON SYSTEM OF BIT SHARING SYSTEM)",
    applicationNumber: "10-2014-0053239",
    filingDate: "5/2/14",
    patentId: "1.01534E+12",
    patentDate: "6/29/15",
    status: "등록",
    text: "휴대형 군사용 드론 폭탄 장치는 현대 전장에서의 전술적 우위를 제공하는 혁신적인 기술 장비입니다. 이 장치는 소형 드론과 폭발물을 결합하여 적의 진영을 정밀 타격하거나 전략적 목표를 신속하게 파괴하는 데 사용됩니다.",
  },
  {
    title: "방독면용 안경(THE SPECTACLES OF GAS MASK)",
    applicationNumber: "10-2014-0112970",
    filingDate: "8/28/14",
    patentId: "1.0154E+12",
    patentDate: "7/21/15",
    status: "등록",
    text: "휴대형 군사용 드론 폭탄 장치는 현대 전장에서의 전술적 우위를 제공하는 혁신적인 기술 장비입니다. 이 장치는 소형 드론과 폭발물을 결합하여 적의 진영을 정밀 타격하거나 전략적 목표를 신속하게 파괴하는 데 사용됩니다.",
  },
  {
    title:
      "워게임 모델의 연동 시스템 및 방법(Interacting system and method for wargame model)",
    applicationNumber: "10-2014-0156791",
    filingDate: "11/12/14",
    patentId: "1.01548E+12",
    patentDate: "8/24/15",
    status: "등록",
    text: "휴대형 군사용 드론 폭탄 장치는 현대 전장에서의 전술적 우위를 제공하는 혁신적인 기술 장비입니다. 이 장치는 소형 드론과 폭발물을 결합하여 적의 진영을 정밀 타격하거나 전략적 목표를 신속하게 파괴하는 데 사용됩니다.",
  },
  {
    title:
      "타이어용 런플렛 지지체의 연결 및 분리구조(Connection and separation structure of run-flat suppoter for tire)",
    applicationNumber: "10-2014-0015214",
    filingDate: "2/11/14",
    patentId: "1.01555E+12",
    patentDate: "9/16/15",
    status: "등록",
    text: "휴대형 군사용 드론 폭탄 장치는 현대 전장에서의 전술적 우위를 제공하는 혁신적인 기술 장비입니다. 이 장치는 소형 드론과 폭발물을 결합하여 적의 진영을 정밀 타격하거나 전략적 목표를 신속하게 파괴하는 데 사용됩니다.",
  },
  {
    title:
      "클램프를 이용한 타이어용 런플렛 지지체의 조립구조(Assembling structure for tire run-flat suppoter using clamp)",
    applicationNumber: "10-2014-0011959",
    filingDate: "2/3/14",
    patentId: "1.01555E+12",
    patentDate: "9/16/15",
    status: "등록",
    text: "휴대형 군사용 드론 폭탄 장치는 현대 전장에서의 전술적 우위를 제공하는 혁신적인 기술 장비입니다. 이 장치는 소형 드론과 폭발물을 결합하여 적의 진영을 정밀 타격하거나 전략적 목표를 신속하게 파괴하는 데 사용됩니다.",
  },
  {
    title:
      "워게임을 위한 무인기 시뮬레이션 시스템(UAV simulation system for wargame)",
    applicationNumber: "10-2015-0066287",
    filingDate: "5/12/15",
    patentId: "1.01557E+12",
    patentDate: "9/24/15",
    status: "등록",
    text: "휴대형 군사용 드론 폭탄 장치는 현대 전장에서의 전술적 우위를 제공하는 혁신적인 기술 장비입니다. 이 장치는 소형 드론과 폭발물을 결합하여 적의 진영을 정밀 타격하거나 전략적 목표를 신속하게 파괴하는 데 사용됩니다.",
  },
  {
    title:
      "발열기능을 갖는 대공사격훈련용 슬리브(Sleeve for antiaircraft fire training having calorification function)",
    applicationNumber: "10-2013-0118944",
    filingDate: "10/7/13",
    patentId: "1.01561E+12",
    patentDate: "10/8/15",
    status: "등록",
    text: "휴대형 군사용 드론 폭탄 장치는 현대 전장에서의 전술적 우위를 제공하는 혁신적인 기술 장비입니다. 이 장치는 소형 드론과 폭발물을 결합하여 적의 진영을 정밀 타격하거나 전략적 목표를 신속하게 파괴하는 데 사용됩니다.",
  },
  {
    title: "실총기 기반 사격 훈련이 가능한 모의 기관총(MIMETIC RIFLE)",
    applicationNumber: "10-2015-0108675",
    filingDate: "7/31/15",
    patentId: "1.01567E+12",
    patentDate: "11/2/15",
    status: "등록",
    text: "휴대형 군사용 드론 폭탄 장치는 현대 전장에서의 전술적 우위를 제공하는 혁신적인 기술 장비입니다. 이 장치는 소형 드론과 폭발물을 결합하여 적의 진영을 정밀 타격하거나 전략적 목표를 신속하게 파괴하는 데 사용됩니다.",
  },
  {
    title: "실화기 기반 모의 소총(MIMETIC RIFLE)",
    applicationNumber: "10-2015-0108690",
    filingDate: "7/31/15",
    patentId: "1.01567E+12",
    patentDate: "11/2/15",
    status: "등록",
    text: "휴대형 군사용 드론 폭탄 장치는 현대 전장에서의 전술적 우위를 제공하는 혁신적인 기술 장비입니다. 이 장치는 소형 드론과 폭발물을 결합하여 적의 진영을 정밀 타격하거나 전략적 목표를 신속하게 파괴하는 데 사용됩니다.",
  },
  {
    title: "실총기 기반 사격 훈련이 가능한 모의 소총(MIMETIC RIFLE)",
    applicationNumber: "10-2015-0108679",
    filingDate: "7/31/15",
    patentId: "1.01567E+12",
    patentDate: "11/2/15",
    status: "등록",
    text: "휴대형 군사용 드론 폭탄 장치는 현대 전장에서의 전술적 우위를 제공하는 혁신적인 기술 장비입니다. 이 장치는 소형 드론과 폭발물을 결합하여 적의 진영을 정밀 타격하거나 전략적 목표를 신속하게 파괴하는 데 사용됩니다.",
  },
  {
    title: "방호의자용 거치장치(Support apparatus for safety guard chair)",
    applicationNumber: "10-2015-0115167",
    filingDate: "8/17/15",
    patentId: "1.01576E+12",
    patentDate: "12/3/15",
    status: "등록",
    text: "휴대형 군사용 드론 폭탄 장치는 현대 전장에서의 전술적 우위를 제공하는 혁신적인 기술 장비입니다. 이 장치는 소형 드론과 폭발물을 결합하여 적의 진영을 정밀 타격하거나 전략적 목표를 신속하게 파괴하는 데 사용됩니다.",
  },
  {
    title:
      "워 게임 시뮬레이션을 위한 레이더 탐지 모의 시스템 및 방법(Radar simulation system and method for war game simulation)",
    applicationNumber: "10-2016-0129219",
    filingDate: "10/6/16",
    patentId: "1.01696E+12",
    patentDate: "1/6/17",
    status: "등록",
    text: "휴대형 군사용 드론 폭탄 장치는 현대 전장에서의 전술적 우위를 제공하는 혁신적인 기술 장비입니다. 이 장치는 소형 드론과 폭발물을 결합하여 적의 진영을 정밀 타격하거나 전략적 목표를 신속하게 파괴하는 데 사용됩니다.",
  },
  {
    title: "실화기 베이스 모의 소총(MIMETIC RIFLE)",
    applicationNumber: "10-2016-0145207",
    filingDate: "11/2/16",
    patentId: "1.01698E+12",
    patentDate: "1/13/17",
    status: "등록",
    text: "휴대형 군사용 드론 폭탄 장치는 현대 전장에서의 전술적 우위를 제공하는 혁신적인 기술 장비입니다. 이 장치는 소형 드론과 폭발물을 결합하여 적의 진영을 정밀 타격하거나 전략적 목표를 신속하게 파괴하는 데 사용됩니다.",
  },
  {
    title: "박격포 적재장치(MORTAR LOADING APPARATUS)",
    applicationNumber: "10-2015-0139654",
    filingDate: "10/5/15",
    patentId: "1.01713E+12",
    patentDate: "2/28/17",
    status: "등록",
    text: "휴대형 군사용 드론 폭탄 장치는 현대 전장에서의 전술적 우위를 제공하는 혁신적인 기술 장비입니다. 이 장치는 소형 드론과 폭발물을 결합하여 적의 진영을 정밀 타격하거나 전략적 목표를 신속하게 파괴하는 데 사용됩니다.",
  },
  {
    title:
      "워게임 시뮬레이션 장치 및 이를 이용한 워게임 설정 관리 방법(WARGAME SIMULATION DEVICE AND METHOD FOR WARGAME SETTING MANAGEMENT METHOD)",
    applicationNumber: "10-2016-0129618",
    filingDate: "10/7/16",
    patentId: "1.01721E+12",
    patentDate: "3/24/17",
    status: "등록",
    text: "휴대형 군사용 드론 폭탄 장치는 현대 전장에서의 전술적 우위를 제공하는 혁신적인 기술 장비입니다. 이 장치는 소형 드론과 폭발물을 결합하여 적의 진영을 정밀 타격하거나 전략적 목표를 신속하게 파괴하는 데 사용됩니다.",
  },
  {
    title:
      "워게임 사후 검토 상황 재연 시스템 및 방법(Replay system and method for after action review of wargame)",
    applicationNumber: "10-2016-0111346",
    filingDate: "8/31/16",
    patentId: "1.01725E+12",
    patentDate: "4/3/17",
    status: "등록",
    text: "휴대형 군사용 드론 폭탄 장치는 현대 전장에서의 전술적 우위를 제공하는 혁신적인 기술 장비입니다. 이 장치는 소형 드론과 폭발물을 결합하여 적의 진영을 정밀 타격하거나 전략적 목표를 신속하게 파괴하는 데 사용됩니다.",
  },
  {
    title:
      "워 게임 시뮬레이션 모델의 연동 테스트를 위한 에뮬레이션 장치 및 방법(EMULATION APPARATUS AND METHOD FOR INTERACTION TEST OF WAR GAME SIMULATION MODEL)",
    applicationNumber: "10-2016-0111347",
    filingDate: "8/31/16",
    patentId: "1.01725E+12",
    patentDate: "4/3/17",
    status: "등록",
    text: "휴대형 군사용 드론 폭탄 장치는 현대 전장에서의 전술적 우위를 제공하는 혁신적인 기술 장비입니다. 이 장치는 소형 드론과 폭발물을 결합하여 적의 진영을 정밀 타격하거나 전략적 목표를 신속하게 파괴하는 데 사용됩니다.",
  },
  {
    title:
      "워게임 시뮬레이션 장치 및 이를 이용한 워게임 시뮬레이션 방법(WARGAME SIMULATION DEVICE AND METHOD FOR WARGAME SIMULATING METHOD)",
    applicationNumber: "10-2016-0129617",
    filingDate: "10/7/16",
    patentId: "1.01728E+12",
    patentDate: "4/13/17",
    status: "등록",
    text: "휴대형 군사용 드론 폭탄 장치는 현대 전장에서의 전술적 우위를 제공하는 혁신적인 기술 장비입니다. 이 장치는 소형 드론과 폭발물을 결합하여 적의 진영을 정밀 타격하거나 전략적 목표를 신속하게 파괴하는 데 사용됩니다.",
  },
  {
    title:
      "동적 메모리맵 파일 관리를 이용하는 워 게임 시뮬레이션 엔진의 연동 테스트 시스템(INTERACTION TEST SYSTEM OF WAR GAME SIMULATION ENGINE EMPLOYING DYNAMIC MEMORY MAP FILE MANAGEMENT)",
    applicationNumber: "10-2017-0032593",
    filingDate: "3/15/17",
    patentId: "1.01734E+12",
    patentDate: "5/2/17",
    status: "등록",
    text: "휴대형 군사용 드론 폭탄 장치는 현대 전장에서의 전술적 우위를 제공하는 혁신적인 기술 장비입니다. 이 장치는 소형 드론과 폭발물을 결합하여 적의 진영을 정밀 타격하거나 전략적 목표를 신속하게 파괴하는 데 사용됩니다.",
  },
  {
    title:
      "이산사건 시스템 명세 기반 워 게임 모의 엔진 시스템(Simulation engine system for war game based on discrete event system specification)",
    applicationNumber: "10-2016-0160123",
    filingDate: "11/29/16",
    patentId: "1.01737E+12",
    patentDate: "5/11/17",
    status: "등록",
    text: "휴대형 군사용 드론 폭탄 장치는 현대 전장에서의 전술적 우위를 제공하는 혁신적인 기술 장비입니다. 이 장치는 소형 드론과 폭발물을 결합하여 적의 진영을 정밀 타격하거나 전략적 목표를 신속하게 파괴하는 데 사용됩니다.",
  },
  {
    title:
      "워게임 시뮬레이션 엔진의 동적 메모리 파일 관리 시스템(FILE MANAGEMENT SYSTEM USING DYNAMIC MEMORY)",
    applicationNumber: "10-2016-0111345",
    filingDate: "8/31/16",
    patentId: "1.01754E+12",
    patentDate: "6/28/17",
    status: "등록",
    text: "휴대형 군사용 드론 폭탄 장치는 현대 전장에서의 전술적 우위를 제공하는 혁신적인 기술 장비입니다. 이 장치는 소형 드론과 폭발물을 결합하여 적의 진영을 정밀 타격하거나 전략적 목표를 신속하게 파괴하는 데 사용됩니다.",
  },
  {
    title:
      "전장상황 배치 방법(Battlefield situation placement device and method thereof)",
    applicationNumber: "10-2016-0179534",
    filingDate: "12/26/16",
    patentId: "1.01755E+12",
    patentDate: "6/30/17",
    status: "등록",
    text: "휴대형 군사용 드론 폭탄 장치는 현대 전장에서의 전술적 우위를 제공하는 혁신적인 기술 장비입니다. 이 장치는 소형 드론과 폭발물을 결합하여 적의 진영을 정밀 타격하거나 전략적 목표를 신속하게 파괴하는 데 사용됩니다.",
  },
  {
    title:
      "이산사건 시스템 명세 기반 워 게임 모의 시스템 및 방법(Simulation system for war game based on discrete event system specification and simulation method therefor)",
    applicationNumber: "10-2017-0016271",
    filingDate: "2/6/17",
    patentId: "1.01765E+12",
    patentDate: "7/31/17",
    status: "등록",
    text: "휴대형 군사용 드론 폭탄 장치는 현대 전장에서의 전술적 우위를 제공하는 혁신적인 기술 장비입니다. 이 장치는 소형 드론과 폭발물을 결합하여 적의 진영을 정밀 타격하거나 전략적 목표를 신속하게 파괴하는 데 사용됩니다.",
  },
  {
    title:
      "성형파편 탄체 제조방법 및 이의 제조 방법에 의해 제조된 탄체(MANUFACTURING METHOD OF AIRFRAME WITH PREFORMED FRAGMENT AND AIRFRAME THREOF)",
    applicationNumber: "10-2015-0089992",
    filingDate: "6/24/15",
    patentId: "1.01793E+12",
    patentDate: "10/27/17",
    status: "등록",
    text: "휴대형 군사용 드론 폭탄 장치는 현대 전장에서의 전술적 우위를 제공하는 혁신적인 기술 장비입니다. 이 장치는 소형 드론과 폭발물을 결합하여 적의 진영을 정밀 타격하거나 전략적 목표를 신속하게 파괴하는 데 사용됩니다.",
  },
  {
    title:
      "성형 파편체를 구비하는 고폭탄 제조 공법(METHOD FOR MANUFACTURING HIGH EXPLOSIVE SHELL WITH PREFORMED FRAGMENT)",
    applicationNumber: "10-2015-0162625",
    filingDate: "11/19/15",
    patentId: "1.01796E+12",
    patentDate: "11/3/17",
    status: "등록",
    text: "휴대형 군사용 드론 폭탄 장치는 현대 전장에서의 전술적 우위를 제공하는 혁신적인 기술 장비입니다. 이 장치는 소형 드론과 폭발물을 결합하여 적의 진영을 정밀 타격하거나 전략적 목표를 신속하게 파괴하는 데 사용됩니다.",
  },
  {
    title:
      "낙하지점 표시기능을 갖는 묘사탄(MOCK BOMB WITH DISPLAY FUNCTION OF DROP POINT)",
    applicationNumber: "10-2017-0141402",
    filingDate: "10/27/17",
    patentId: "1.0187E+12",
    patentDate: "6/18/18",
    status: "등록",
    text: "휴대형 군사용 드론 폭탄 장치는 현대 전장에서의 전술적 우위를 제공하는 혁신적인 기술 장비입니다. 이 장치는 소형 드론과 폭발물을 결합하여 적의 진영을 정밀 타격하거나 전략적 목표를 신속하게 파괴하는 데 사용됩니다.",
  },
  {
    title: "포 발사식 탄약(Ammunition for Mortar)",
    applicationNumber: "10-2016-0181330",
    filingDate: "12/28/16",
    patentId: "1.01906E+12",
    patentDate: "10/2/18",
    status: "등록",
    text: "휴대형 군사용 드론 폭탄 장치는 현대 전장에서의 전술적 우위를 제공하는 혁신적인 기술 장비입니다. 이 장치는 소형 드론과 폭발물을 결합하여 적의 진영을 정밀 타격하거나 전략적 목표를 신속하게 파괴하는 데 사용됩니다.",
  },
  {
    title:
      "D-HDMA를 이용한 무선 통신 방법(METHOD FOR WIRELESS COMMUNICATION WITH D-HDMA)",
    applicationNumber: "10-2018-0073119",
    filingDate: "6/26/18",
    patentId: "1.01914E+12",
    patentDate: "10/25/18",
    status: "등록",
    text: "휴대형 군사용 드론 폭탄 장치는 현대 전장에서의 전술적 우위를 제공하는 혁신적인 기술 장비입니다. 이 장치는 소형 드론과 폭발물을 결합하여 적의 진영을 정밀 타격하거나 전략적 목표를 신속하게 파괴하는 데 사용됩니다.",
  },
  {
    title:
      "항공 무장효과 분석 시뮬레이터 및 그 시뮬레이션 방법(SIMULATOR FOR ANALYZING EFFECTIVENESS OF WEAPON AND METHOD THEREOF)",
    applicationNumber: "10-2017-0124364",
    filingDate: "9/26/17",
    patentId: "1.01926E+12",
    patentDate: "11/30/18",
    status: "등록",
    text: "휴대형 군사용 드론 폭탄 장치는 현대 전장에서의 전술적 우위를 제공하는 혁신적인 기술 장비입니다. 이 장치는 소형 드론과 폭발물을 결합하여 적의 진영을 정밀 타격하거나 전략적 목표를 신속하게 파괴하는 데 사용됩니다.",
  },
  {
    title:
      "분산 이산사건시스템 명세 기반 연속 시스템 시뮬레이터, 시뮬레이션 방법, 이를 위한 기록매체, 및 시스템(DEVS Based Continuous System Simulator, Simulation Method, Recording Medium For The Same, and System Comprising The Same)",
    applicationNumber: "10-2017-0124358",
    filingDate: "9/26/17",
    patentId: "1.01926E+12",
    patentDate: "11/30/18",
    status: "등록",
    text: "휴대형 군사용 드론 폭탄 장치는 현대 전장에서의 전술적 우위를 제공하는 혁신적인 기술 장비입니다. 이 장치는 소형 드론과 폭발물을 결합하여 적의 진영을 정밀 타격하거나 전략적 목표를 신속하게 파괴하는 데 사용됩니다.",
  },
  {
    title:
      "분리철갑탄의 회전 안정형 탄두용 압력판(Pressure Plate Member for Rollstabilised Warhesd of Armor Piercing Discarding Sabot)",
    applicationNumber: "10-2017-0142978",
    filingDate: "10/31/17",
    patentId: "1.01927E+12",
    patentDate: "12/4/18",
    status: "등록",
    text: "휴대형 군사용 드론 폭탄 장치는 현대 전장에서의 전술적 우위를 제공하는 혁신적인 기술 장비입니다. 이 장치는 소형 드론과 폭발물을 결합하여 적의 진영을 정밀 타격하거나 전략적 목표를 신속하게 파괴하는 데 사용됩니다.",
  },
  {
    title:
      "공포탄 격발인지모듈, 레이저발사기 및 이를 이용한 공포탄 격발인지방법(Module for recognizing percussion of blank ammunition, laser transmitter and method for recognizing percussion of blank ammunition using the same)",
    applicationNumber: "10-2018-0071443",
    filingDate: "6/21/18",
    patentId: "1.01937E+12",
    patentDate: "1/3/19",
    status: "등록",
    text: "휴대형 군사용 드론 폭탄 장치는 현대 전장에서의 전술적 우위를 제공하는 혁신적인 기술 장비입니다. 이 장치는 소형 드론과 폭발물을 결합하여 적의 진영을 정밀 타격하거나 전략적 목표를 신속하게 파괴하는 데 사용됩니다.",
  },
  {
    title: "공포탄 어댑터(Blank ammunition adapter)",
    applicationNumber: "10-2018-0071388",
    filingDate: "6/21/18",
    patentId: "1.01937E+12",
    patentDate: "1/3/19",
    status: "등록",
    text: "휴대형 군사용 드론 폭탄 장치는 현대 전장에서의 전술적 우위를 제공하는 혁신적인 기술 장비입니다. 이 장치는 소형 드론과 폭발물을 결합하여 적의 진영을 정밀 타격하거나 전략적 목표를 신속하게 파괴하는 데 사용됩니다.",
  },
  {
    title:
      "직사화기에 의한 객체의 피해 평가 시스템, 피해 평가 방법 및 이를 실행하기 위한 기록매체(SYTEM AND METHOD FOR ESTIMATING DAMAGE RESULT BY DIRECT FIRE WEAPON AND COMPUTER READABLE MEDIUM RECORDING THEREOF)",
    applicationNumber: "10-2018-0072577",
    filingDate: "6/25/18",
    patentId: "1.01988E+12",
    patentDate: "6/4/19",
    status: "등록",
    text: "휴대형 군사용 드론 폭탄 장치는 현대 전장에서의 전술적 우위를 제공하는 혁신적인 기술 장비입니다. 이 장치는 소형 드론과 폭발물을 결합하여 적의 진영을 정밀 타격하거나 전략적 목표를 신속하게 파괴하는 데 사용됩니다.",
  },
  {
    title:
      "항공 무장효과 분석을 위한 무장 투하 시뮬레이터, 시뮬레이션 방법 및 그 방법을 실행시키기 위한 프로그램을 기록한 컴퓨터로 읽을 수 있는 기록매체(BOMB RELEASE SIMULATOR FOR ANALYZING EFFECTIVENESS OF WEAPON, SIMULATION METHOD THEREOF AND A COMPUTER-READABLE STORAGE MEDIUM FOR EXECUTING THE METHOD)",
    applicationNumber: "10-2019-0016390",
    filingDate: "2/12/19",
    patentId: "1.01996E+12",
    patentDate: "6/28/19",
    status: "등록",
    text: "휴대형 군사용 드론 폭탄 장치는 현대 전장에서의 전술적 우위를 제공하는 혁신적인 기술 장비입니다. 이 장치는 소형 드론과 폭발물을 결합하여 적의 진영을 정밀 타격하거나 전략적 목표를 신속하게 파괴하는 데 사용됩니다.",
  },
  {
    title:
      "무한궤도차량의 처짐 제어장치(Apparatus for controlling a sag prevent of caterpillar vehicles)",
    applicationNumber: "10-2018-0152498",
    filingDate: "11/30/18",
    patentId: "1.02003E+12",
    patentDate: "7/18/19",
    status: "등록",
    text: "휴대형 군사용 드론 폭탄 장치는 현대 전장에서의 전술적 우위를 제공하는 혁신적인 기술 장비입니다. 이 장치는 소형 드론과 폭발물을 결합하여 적의 진영을 정밀 타격하거나 전략적 목표를 신속하게 파괴하는 데 사용됩니다.",
  },
  {
    title:
      "인버터를 장착한 특수차량 및 인버터 안전제어방법(Special vehicle with inverter and Method for inverter safety control)",
    applicationNumber: "1.02018E+12",
    filingDate: "11/30/18",
    patentId: "1.02009E+12",
    patentDate: "8/5/19",
    status: "등록",
    text: "휴대형 군사용 드론 폭탄 장치는 현대 전장에서의 전술적 우위를 제공하는 혁신적인 기술 장비입니다. 이 장치는 소형 드론과 폭발물을 결합하여 적의 진영을 정밀 타격하거나 전략적 목표를 신속하게 파괴하는 데 사용됩니다.",
  },
  {
    title:
      "교전급 항공기 기동 시뮬레이터, 시뮬레이션 방법 및 그 방법을 실행시키기 위한 프로그램을 기록한 컴퓨터로 읽을 수 있는 기록매체",
    applicationNumber: "10-2019-0016389",
    filingDate: "2/12/19",
    patentId: "102046823",
    patentDate: "11/14/19",
    status: "등록",
    text: "휴대형 군사용 드론 폭탄 장치는 현대 전장에서의 전술적 우위를 제공하는 혁신적인 기술 장비입니다. 이 장치는 소형 드론과 폭발물을 결합하여 적의 진영을 정밀 타격하거나 전략적 목표를 신속하게 파괴하는 데 사용됩니다.",
  },
  {
    title: "군사작전 시뮬레이션 모델을 위한 항공임무명령서 자동생성장치",
    applicationNumber: "10-2020-0162037",
    filingDate: "11/27/20",
    patentId: "102237609",
    patentDate: "4/1/21",
    status: "등록",
    text: "휴대형 군사용 드론 폭탄 장치는 현대 전장에서의 전술적 우위를 제공하는 혁신적인 기술 장비입니다. 이 장치는 소형 드론과 폭발물을 결합하여 적의 진영을 정밀 타격하거나 전략적 목표를 신속하게 파괴하는 데 사용됩니다.",
  },
  {
    title: "전구급 합동작전 분석 시뮬레이터, 및 시뮬레이션 방법",
    applicationNumber: "10-2020-0162167",
    filingDate: "11/27/20",
    patentId: "102286642",
    patentDate: "7/30/21",
    status: "등록",
    text: "휴대형 군사용 드론 폭탄 장치는 현대 전장에서의 전술적 우위를 제공하는 혁신적인 기술 장비입니다. 이 장치는 소형 드론과 폭발물을 결합하여 적의 진영을 정밀 타격하거나 전략적 목표를 신속하게 파괴하는 데 사용됩니다.",
  },
  {
    title: "게이지 장착 공구",
    applicationNumber: "10-2009-0029408",
    filingDate: "4/7/09",
    patentId: "10-1042095",
    patentDate: "6/9/11",
    status: "등록",
    text: "휴대형 군사용 드론 폭탄 장치는 현대 전장에서의 전술적 우위를 제공하는 혁신적인 기술 장비입니다. 이 장치는 소형 드론과 폭발물을 결합하여 적의 진영을 정밀 타격하거나 전략적 목표를 신속하게 파괴하는 데 사용됩니다.",
  },
  {
    title: "일체형 리프트 슬링",
    applicationNumber: "10-2009-0038283",
    filingDate: "4/30/09",
    patentId: "10-1074946",
    patentDate: "10/12/11",
    status: "등록",
    text: "휴대형 군사용 드론 폭탄 장치는 현대 전장에서의 전술적 우위를 제공하는 혁신적인 기술 장비입니다. 이 장치는 소형 드론과 폭발물을 결합하여 적의 진영을 정밀 타격하거나 전략적 목표를 신속하게 파괴하는 데 사용됩니다.",
  },
  {
    title: "오토 클레이브 에어 시스템",
    applicationNumber: "10-2009-0065407",
    filingDate: "7/17/09",
    patentId: "10-1095206",
    patentDate: "12/9/11",
    status: "등록",
    text: "휴대형 군사용 드론 폭탄 장치는 현대 전장에서의 전술적 우위를 제공하는 혁신적인 기술 장비입니다. 이 장치는 소형 드론과 폭발물을 결합하여 적의 진영을 정밀 타격하거나 전략적 목표를 신속하게 파괴하는 데 사용됩니다.",
  },
  {
    title:
      "항공기의 전원 자동 제어 및 분배와 시스템 보호방법 및 그 방법에 의한 컴퓨터 프로그램을 저장한 기록매체",
    applicationNumber: "10-2009-0096149",
    filingDate: "10/9/09",
    patentId: "10-1025979",
    patentDate: "3/23/11",
    status: "등록",
    text: "휴대형 군사용 드론 폭탄 장치는 현대 전장에서의 전술적 우위를 제공하는 혁신적인 기술 장비입니다. 이 장치는 소형 드론과 폭발물을 결합하여 적의 진영을 정밀 타격하거나 전략적 목표를 신속하게 파괴하는 데 사용됩니다.",
  },
  {
    title: "헬기 로터 제빙계통 점검 시스템",
    applicationNumber: "10-2010-0036384",
    filingDate: "4/20/10",
    patentId: "10-1242748",
    patentDate: "3/5/13",
    status: "등록",
    text: "휴대형 군사용 드론 폭탄 장치는 현대 전장에서의 전술적 우위를 제공하는 혁신적인 기술 장비입니다. 이 장치는 소형 드론과 폭발물을 결합하여 적의 진영을 정밀 타격하거나 전략적 목표를 신속하게 파괴하는 데 사용됩니다.",
  },
  {
    title: "하네스의 내구성 시험장치",
    applicationNumber: "10-2010-0036386",
    filingDate: "4/20/10",
    patentId: "10-1188402",
    patentDate: "9/27/12",
    status: "등록",
    text: "휴대형 군사용 드론 폭탄 장치는 현대 전장에서의 전술적 우위를 제공하는 혁신적인 기술 장비입니다. 이 장치는 소형 드론과 폭발물을 결합하여 적의 진영을 정밀 타격하거나 전략적 목표를 신속하게 파괴하는 데 사용됩니다.",
  },
  {
    title: "헬리콥터의 저마찰 기계식 조종장치",
    applicationNumber: "10-2011-0071378",
    filingDate: "7/19/11",
    patentId: "10-1252986",
    patentDate: "4/3/13",
    status: "등록",
    text: "휴대형 군사용 드론 폭탄 장치는 현대 전장에서의 전술적 우위를 제공하는 혁신적인 기술 장비입니다. 이 장치는 소형 드론과 폭발물을 결합하여 적의 진영을 정밀 타격하거나 전략적 목표를 신속하게 파괴하는 데 사용됩니다.",
  },
  {
    title: "헬리콥터 비행성 해석 시스템 및 그 해석 방법",
    applicationNumber: "10-2011-0075136",
    filingDate: "7/28/11",
    patentId: "10-1333205",
    patentDate: "11/20/13",
    status: "등록",
    text: "휴대형 군사용 드론 폭탄 장치는 현대 전장에서의 전술적 우위를 제공하는 혁신적인 기술 장비입니다. 이 장치는 소형 드론과 폭발물을 결합하여 적의 진영을 정밀 타격하거나 전략적 목표를 신속하게 파괴하는 데 사용됩니다.",
  },
  {
    title: "항공용 니보드",
    applicationNumber: "10-2011-0091868",
    filingDate: "9/9/11",
    patentId: "10-1296185",
    patentDate: "8/7/13",
    status: "등록",
    text: "휴대형 군사용 드론 폭탄 장치는 현대 전장에서의 전술적 우위를 제공하는 혁신적인 기술 장비입니다. 이 장치는 소형 드론과 폭발물을 결합하여 적의 진영을 정밀 타격하거나 전략적 목표를 신속하게 파괴하는 데 사용됩니다.",
  },
  {
    title:
      "회전익 항공기에 장착되는 구성품의 설계 환경 조건을 설정하는 방법 및 이를 이용한 프로그램을 기록한 컴퓨터로 판독가능한 기록 매체",
    applicationNumber: "10-2011-0092957",
    filingDate: "9/15/11",
    patentId: "10-1310196",
    patentDate: "9/12/13",
    status: "등록",
    text: "휴대형 군사용 드론 폭탄 장치는 현대 전장에서의 전술적 우위를 제공하는 혁신적인 기술 장비입니다. 이 장치는 소형 드론과 폭발물을 결합하여 적의 진영을 정밀 타격하거나 전략적 목표를 신속하게 파괴하는 데 사용됩니다.",
  },
  {
    title: "주의 경고 패널의 소형화 및  저 전력화 방법",
    applicationNumber: "10-2011-0103991",
    filingDate: "10/12/11",
    patentId: "10-1286231",
    patentDate: "7/9/13",
    status: "등록",
    text: "휴대형 군사용 드론 폭탄 장치는 현대 전장에서의 전술적 우위를 제공하는 혁신적인 기술 장비입니다. 이 장치는 소형 드론과 폭발물을 결합하여 적의 진영을 정밀 타격하거나 전략적 목표를 신속하게 파괴하는 데 사용됩니다.",
  },
  {
    title: "항공기 공조장치용 소음기",
    applicationNumber: "10-2011-0116511",
    filingDate: "11/9/11",
    patentId: "10-1298814",
    patentDate: "8/14/13",
    status: "등록",
    text: "휴대형 군사용 드론 폭탄 장치는 현대 전장에서의 전술적 우위를 제공하는 혁신적인 기술 장비입니다. 이 장치는 소형 드론과 폭발물을 결합하여 적의 진영을 정밀 타격하거나 전략적 목표를 신속하게 파괴하는 데 사용됩니다.",
  },
  {
    title: "회전체의 센서 데이터를 계측하여 전송하는 방법",
    applicationNumber: "10-2012-0046179",
    filingDate: "5/2/12",
    patentId: "10-1274171",
    patentDate: "6/5/13",
    status: "등록",
    text: "휴대형 군사용 드론 폭탄 장치는 현대 전장에서의 전술적 우위를 제공하는 혁신적인 기술 장비입니다. 이 장치는 소형 드론과 폭발물을 결합하여 적의 진영을 정밀 타격하거나 전략적 목표를 신속하게 파괴하는 데 사용됩니다.",
  },
  {
    title:
      "비행시험 데이터를 이용한 HQS 모델링과 튜닝을 위한 장치 및 그 제어방법",
    applicationNumber: "10-2013-0028687",
    filingDate: "3/18/13",
    patentId: "10-1483093",
    patentDate: "1/9/15",
    status: "등록",
    text: "휴대형 군사용 드론 폭탄 장치는 현대 전장에서의 전술적 우위를 제공하는 혁신적인 기술 장비입니다. 이 장치는 소형 드론과 폭발물을 결합하여 적의 진영을 정밀 타격하거나 전략적 목표를 신속하게 파괴하는 데 사용됩니다.",
  },
  {
    title: "탄약통 고정 장치",
    applicationNumber: "10-2013-0059589",
    filingDate: "5/27/13",
    patentId: "10-1431111",
    patentDate: "8/11/14",
    status: "등록",
    text: "휴대형 군사용 드론 폭탄 장치는 현대 전장에서의 전술적 우위를 제공하는 혁신적인 기술 장비입니다. 이 장치는 소형 드론과 폭발물을 결합하여 적의 진영을 정밀 타격하거나 전략적 목표를 신속하게 파괴하는 데 사용됩니다.",
  },
  {
    title: "헬리콥터의 카고훅 하중시현시스템 및 그 제어방법",
    applicationNumber: "10-2013-0091447",
    filingDate: "8/1/13",
    patentId: "10-1501136",
    patentDate: "3/4/15",
    status: "등록",
    text: "휴대형 군사용 드론 폭탄 장치는 현대 전장에서의 전술적 우위를 제공하는 혁신적인 기술 장비입니다. 이 장치는 소형 드론과 폭발물을 결합하여 적의 진영을 정밀 타격하거나 전략적 목표를 신속하게 파괴하는 데 사용됩니다.",
  },
  {
    title:
      "하중 보정 기능이 구비된 헬리콥터의 카고훅 하중시현 시스템 및 그 제어 방법",
    applicationNumber: "10-2013-0091448",
    filingDate: "8/1/13",
    patentId: "10-1492831",
    patentDate: "2/4/15",
    status: "등록",
    text: "휴대형 군사용 드론 폭탄 장치는 현대 전장에서의 전술적 우위를 제공하는 혁신적인 기술 장비입니다. 이 장치는 소형 드론과 폭발물을 결합하여 적의 진영을 정밀 타격하거나 전략적 목표를 신속하게 파괴하는 데 사용됩니다.",
  },
];

export default function Result() {
  const isMobile = useIsMobile();
  const [mobile, setMobile] = useState<boolean>(false);
  const [indexOfTab, setIndexOfTab] = useState("search");
  const [indexOfTab2, setIndexOfTab2] = useState("analysis");
  const [numberOfPage, setNumberOfPage] = useState<number>(1);

  const querySetTextInput = useQuery({
    queryKey: ["textInput"],
  });

  async function getTiidf(params: any) {
    const response = await axios
      .get(
        "https://api.ziweek.duckdns.org/tfidf",
        // "http://ec2-13-124-175-105.ap-northeast-2.compute.amazonaws.com:8081/tfidf",
        // "http://localhost:8081/tfidf",
        {
          params: { text: querySetTextInput.data },
        },
      )
      .then(async (value) => {
        await console.log(value.data.top_terms);
        return value.data.top_terms;
      })
      .catch((error) => {
        console.log(error);
      });
    return response;
  }

  const response = useApiGet(["tfidf"], getTiidf, {
    refetchOnWindowFocus: true,
    retry: 0,
  });

  useEffect(() => {
    AOS.init();
    return () => {};
  }, []);

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

  return (
    <section
      className="mx-auto flex h-full max-h-[85vh] w-full max-w-[1200px] flex-row px-4"
      style={{
        display: "grid",
        gridTemplateColumns: mobile ? "1fr" : "100px 600px 1fr",
        gridTemplateRows: "1fr",
        gap: "20px",
      }}
    >
      {/*  */}
      <div className="col-span-1 w-full"></div>

      {/*  */}
      <div className="flex flex-col items-start justify-center gap-1">
        <Tabs
          aria-label="Options2"
          variant={"underlined"}
          color={"primary"}
          onSelectionChange={async (key: any) => {
            await setIndexOfTab(key);
          }}
          defaultSelectedKey={"search"}
        >
          <Tab key="search" title="탐색 탭"></Tab>
          {mobile && <Tab key="analysis" title="분석 탭"></Tab>}
          {mobile && <Tab key="chatbot" title="챗봇 탭"></Tab>}
        </Tabs>

        {mobile ? (
          <>
            {indexOfTab == "search" && (
              <div className="w-full gap-2">
                {dataset
                  .slice(0 + 5 * (numberOfPage - 1), 5 + 5 * (numberOfPage - 1))
                  .map((data, i) => {
                    return (
                      <Card
                        key={i}
                        className="w-full max-w-2xl gap-2 border-0 p-4"
                        isBlurred
                        shadow={"none"}
                        // isPressable
                      >
                        <div className="flex w-full flex-row items-end justify-between">
                          <div className="flex flex-col items-start justify-center gap-1">
                            <Link href={`/search/detail?query=${data.title}`}>
                              <p className="text-left text-lg font-bold">
                                {data.title}
                              </p>
                            </Link>
                            <p className="text-left text-xs leading-loose text-secondary">
                              출원번호 {data.applicationNumber}, 출원일자{" "}
                              {data.patentDate}
                            </p>
                          </div>
                        </div>
                        <p className="line-clamp-3 text-justify text-sm">
                          {data.text}
                        </p>
                      </Card>
                    );
                  })}
                <div className="flex w-full flex-col items-center justify-center py-8">
                  <Pagination
                    total={Math.ceil(dataset.length / 5)}
                    initialPage={numberOfPage}
                    variant={"light"}
                    showControls
                    onChange={(page: number) => setNumberOfPage(page)}
                  />
                </div>
              </div>
            )}
            {indexOfTab == "analysis" && (
              <div className="h-[500px] w-full pt-2">
                <AnalysisView></AnalysisView>
              </div>
            )}
            {indexOfTab == "chatbot" && (
              <div className="h-[500px] w-full pt-2">
                <ChatbotTab></ChatbotTab>
              </div>
            )}
          </>
        ) : (
          <div className="w-full gap-2">
            {dataset
              .slice(0 + 5 * (numberOfPage - 1), 5 + 5 * (numberOfPage - 1))
              .map((data, i) => {
                return (
                  <Card
                    key={i}
                    className="w-full max-w-2xl gap-2 border-0 p-4"
                    isBlurred
                    shadow={"none"}
                    // isPressable
                  >
                    <div className="flex w-full flex-row items-end justify-between">
                      <div className="flex flex-col items-start justify-center gap-1">
                        <Link href={`/search/detail?query=${data.title}`}>
                          <p className="text-left text-lg font-bold">
                            {data.title}
                          </p>
                        </Link>
                        <p className="text-left text-xs leading-loose text-secondary">
                          출원번호 {data.applicationNumber}, 출원일자{" "}
                          {data.patentDate}
                        </p>
                      </div>
                    </div>
                    <p className="line-clamp-3 text-justify text-sm">
                      {data.text}
                    </p>
                  </Card>
                );
              })}
            <div className="flex w-full flex-col items-center justify-center py-8">
              <Pagination
                total={Math.ceil(dataset.length / 5)}
                initialPage={numberOfPage}
                variant={"light"}
                showControls
                onChange={(page: number) => setNumberOfPage(page)}
              />
            </div>
          </div>
        )}
      </div>

      {/*  */}
      {!mobile && (
        <div
          className={`${
            mobile ? "sticky top-16" : "max-h-[600px]"
          } sticky top-16 flex h-full w-full flex-col gap-4`}
        >
          <Tabs
            aria-label="Options"
            variant={"underlined"}
            color={"primary"}
            defaultSelectedKey={"analysis"}
            onSelectionChange={async (key: any) => {
              await setIndexOfTab2(key);
            }}
          >
            <Tab key="analysis" title="분석 탭"></Tab>
            <Tab key="chatbot" title="챗봇 탭"></Tab>
          </Tabs>
          {indexOfTab2 == "analysis" && <AnalysisView></AnalysisView>}
          {indexOfTab2 == "chatbot" && <ChatbotTab></ChatbotTab>}
        </div>
      )}
    </section>
  );
}

function AnalysisView(props: any) {
  const responseQuery = useQuery({
    queryKey: ["tfidf"],
    refetchOnWindowFocus: false,
  });

  const [indexForTechTrend, setIndexForTechTrend] = useState<number>(0);

  return (
    <>
      {responseQuery.isLoading ? (
        <Card
          className="flex h-full w-full flex-col items-center justify-center border-1"
          shadow={"none"}
        >
          <CircularProgress></CircularProgress>
        </Card>
      ) : (
        <div className={`flex h-full w-fit gap-4`}>
          <Accordion
            className="h-fit w-fit border-1"
            defaultExpandedKeys={["1"]}
            fullWidth
            variant={"bordered"}
            keepContentMounted
          >
            <AccordionItem
              key="1"
              aria-label="wordCloud"
              title="기술 동향 분석"
              subtitle="질의어에서 추출한 핵심키워드로 국내외 기술 동향을 시각화합니다."
              classNames={{ title: "text-md font-bold", subtitle: "text-tiny" }}
            >
              <div className="flex h-full flex-col gap-4">
                <div className="flex flex-row flex-wrap gap-2">
                  {responseQuery.isRefetching ? (
                    <div className="flex h-[30px] w-full flex-col items-center justify-center px-2">
                      <Progress isIndeterminate size={"sm"}></Progress>
                    </div>
                  ) : (
                    <>
                      {(responseQuery.data as any[])
                        ?.filter(
                          (value: any) =>
                            value.length != 1 &&
                            value.charAt(value.length - 1) != "다",
                        )
                        ?.map((e: string, i: number) => (
                          <Button
                            key={i}
                            size={"sm"}
                            color={"primary"}
                            variant={
                              indexForTechTrend == i ? "solid" : "bordered"
                            }
                            onPress={() => {
                              setIndexForTechTrend(i);
                            }}
                            className="font-bold"
                          >
                            {e}
                          </Button>
                        ))}
                    </>
                  )}
                </div>
                <div className="h-[250px]">
                  <Bar
                    data={{
                      labels: ["국내 특허", "해외 특허"],
                      datasets: [
                        {
                          label: `전체 대비 "${(
                            responseQuery.data as any[]
                          )?.filter(
                            (value: any) =>
                              value.length != 1 &&
                              value.charAt(value.length - 1) != "다",
                          )[indexForTechTrend]}" 키워드 비율`,
                          data: [
                            faker.number.float({ min: 0.2, max: 0.8 }),
                            faker.number.float({ min: 0.2, max: 0.8 }),
                          ],
                          backgroundColor: "#1D4A83",
                        },
                      ],
                    }}
                    options={{
                      scales: { y: { min: 0, max: 1 } },
                      font: { size: 15, weight: "bold" },
                      maintainAspectRatio: false,
                      responsive: true,
                      animation: {
                        // delay: 1000,
                        duration: 1000,
                      },
                      plugins: {
                        legend: {
                          position: "top" as const,
                        },
                        // title: {
                        //   display: true,
                        //   text: `전체 방산 특허 대비 "${indexForTechTrend}" 분야 특허 비율`,
                        // },
                      },
                    }}
                    // width={"full"}
                    // height={"full"}
                  ></Bar>
                </div>
              </div>
            </AccordionItem>
            <AccordionItem
              key="2"
              aria-label="Accordion 2"
              title="국가별 특허경쟁력 지수"
              subtitle="관련 키워드들을 연결성과 중요도를 시각적으로 파악할 수 있습니다."
              classNames={{ title: "text-md font-bold", subtitle: "text-tiny" }}
            >
              <div className="flex w-full flex-col items-center">
                <WorldmapChart size={"md"}></WorldmapChart>
              </div>
            </AccordionItem>
          </Accordion>
        </div>
      )}
    </>
  );
}

// function ChatbotTab(props: any) {
//   const messageEndRef = useRef<HTMLDivElement | null>(null);
//   const [dialogContext, setDialogContext] = useState([
//     {
//       isAnimated: true,
//       isSent: false,
//       isLoading: false,
//       imgSrc: "/images/logo.png",
//       name: "MiliPat 챗봇",
//       text: "어떻게 도와드릴까요?",
//     },
//   ]);

//   const isMobile = useIsMobile();
//   const [mobile, setMobile] = useState<boolean>(false);

//   useEffect(() => {
//     const checkResize = () => {
//       if (isMobile) {
//         setMobile(true);
//       } else {
//         setMobile(false);
//       }
//     };
//     checkResize();
//   }, [isMobile]);

//   useEffect(() => {
//     if (dialogContext[dialogContext.length - 1].isSent == true) {
//       // setIsLoading(true);
//       const timer = setTimeout(() => {
//         // setIsLoading(false);
//         setDialogContext([
//           ...dialogContext,
//           {
//             isAnimated: true,
//             isSent: false,
//             isLoading: false,
//             imgSrc: "11",
//             name: "MiliPat AI",
//             text: "현재 프론트엔드 테스트 과정 중이며, 이로 인해 질의어에 대한 응답을 담당하는 LLM 서버와 연결되어 있지 않습니다. 프론트엔드 개발 및 테스트가 완료되는 대로 다시 연동될 예정입니다.",
//           },
//         ]);
//       }, 500);
//     }
//   }, [dialogContext]);

//   return (
//     <Card className="relative flex h-full max-h-[75vh] w-full flex-col border-1 shadow-none drop-shadow-none">
//       <div
//         className={`relative grid h-full w-full gap-4`}
//         style={{
//           gridTemplateColumns: false ? "1fr" : "1fr",
//           gridTemplateRows: false ? "1fr" : "1fr",
//         }}
//       >
//         {/*  */}
//         <div
//           className={`${
//             mobile ? "pb-1" : ""
//           } relative flex max-h-[75vh] w-full flex-col items-center justify-start overflow-scroll`}
//           style={{
//             display: "grid",
//             gridTemplateRows: "1fr auto",
//             gridTemplateColumns: "1fr",
//             gap: "1px",
//           }}
//         >
//           <div className="flex h-full w-full flex-col items-center overflow-y-auto px-4 py-4">
//             {dialogContext.map((e, i) => {
//               return (
//                 <TextBubble
//                   key={i}
//                   // indexStage={indexStage}
//                   isLoading={false}
//                   isAnimated={e.isAnimated}
//                   isSent={e.isSent}
//                   imgSrc={"1"}
//                   name={e.name}
//                   text={e.text}
//                   isLast={i == dialogContext.length - 1}
//                 ></TextBubble>
//               );
//             })}
//             <div ref={messageEndRef} className="h-[100px]"></div>
//           </div>
//           <div className="z-50 flex h-fit w-full flex-col items-center">
//             <FooterTray
//               dialogContext={dialogContext}
//               setDialogContext={setDialogContext}
//               showInput
//               setIsModalVisible={props.setIsModalVisible}
//             ></FooterTray>
//           </div>
//         </div>
//       </div>
//     </Card>
//   );
// }
