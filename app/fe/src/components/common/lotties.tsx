import Lottie from "react-lottie-player";
import lottieSearchJson from "../../../public/lotties/lottie-search.json";
import lottieCongratulationsJson from "../../../public/lotties/congratulations.json";
import lottieHiJson from "../../../public/lotties/hi.json";
import lottieComplete from "../../../public/lotties/complete.json";
import lottieArrowDown from "../../../public/lotties/arrow.json";
import lottieVoiceRecognition from "../../../public/lotties/voice-recognition.json";
import lottieDotLoading from "../../../public/lotties/dots-loading.json";
import lottie3DModel from "../../../public/lotties/3d-model.json";
import lottieEnsemble from "../../../public/lotties/ensemble.json";
import lottieDotCircle from "../../../public/lotties/dot-circling.json";

type PropsForLottie = {
  width?: any;
  height?: any;
  loop?: boolean;
  play?: boolean;
  goTo?: number;
};

export function LottieSearch(params: PropsForLottie) {
  return (
    <Lottie
      loop={params.loop || false}
      animationData={lottieSearchJson}
      play
      style={{ width: params.width, height: params.height }}
      //   onComplete={props.onComplete}
    />
  );
}

export function LottieCongratulations(params: PropsForLottie) {
  return (
    <Lottie
      loop={params.loop || false}
      animationData={lottieCongratulationsJson}
      play
      style={{ width: params.width, height: params.height }}
      //   onComplete={props.onComplete}
    />
  );
}

export function LottieHi(params: PropsForLottie) {
  return (
    <Lottie
      loop={params.loop || false}
      animationData={lottieHiJson}
      play
      style={{ width: params.width, height: params.height }}
      //   onComplete={props.onComplete}
    />
  );
}

export function LottieComplete(params: PropsForLottie) {
  return (
    <Lottie
      loop={params.loop || false}
      animationData={lottieComplete}
      play={params.play}
      goTo={params.goTo}
      style={{ width: params.width, height: params.height }}

      //   onComplete={props.onComplete}
    />
  );
}

export function LottieVoiceRecognition(params: PropsForLottie) {
  return (
    <Lottie
      loop={params.loop || false}
      animationData={lottieVoiceRecognition}
      play={params.play}
      goTo={params.goTo}
      style={{ width: params.width, height: params.height }}
      //   onComplete={props.onComplete}
    />
  );
}

export function LottieArrowDown(params: PropsForLottie) {
  return (
    <Lottie
      loop={params.loop || false}
      animationData={lottieArrowDown}
      play={params.play}
      goTo={params.goTo}
      style={{ width: params.width, height: params.height }}
      //   onComplete={props.onComplete}
    />
  );
}

export function LottieDotLoading(params: PropsForLottie) {
  return (
    <Lottie
      loop={params.loop || false}
      animationData={lottieDotLoading}
      play={params.play}
      goTo={params.goTo}
      style={{ width: params.width, height: params.height }}
      //   onComplete={props.onComplete}
    />
  );
}
export function Lottie3DModel(params: PropsForLottie) {
  return (
    <Lottie
      loop={params.loop || false}
      animationData={lottie3DModel}
      play={params.play}
      goTo={params.goTo}
      style={{ width: params.width, height: params.height }}
      //   onComplete={props.onComplete}
    />
  );
}
export function LottieEnsemble(params: PropsForLottie) {
  return (
    <Lottie
      loop={params.loop || false}
      animationData={lottieEnsemble}
      play={params.play}
      goTo={params.goTo}
      style={{ width: params.width, height: params.height }}
      //   onComplete={props.onComplete}
    />
  );
}

export function LottieDotCircle(params: PropsForLottie) {
  return (
    <Lottie
      loop={params.loop || false}
      animationData={lottieDotCircle}
      play={params.play}
      goTo={params.goTo}
      style={{ width: params.width, height: params.height }}
      //   onComplete={props.onComplete}
    />
  );
}
