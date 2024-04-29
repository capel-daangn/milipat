"use client";

import { Sky } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect } from "react";
import { OrbitControls, Environment, Clone } from "@react-three/drei";
import { useGLTF } from "@react-three/drei";

const Model = ({ url }: any) => {
  const { scene }: any = useGLTF(url);
  return <Clone object={scene} scale={0.025} position={[35, -35, 35]} />;
};

export default function ThreeRender(props: any) {
  const Models = [{ name: "k9", url: props.src }];

  useEffect(() => {}, []);

  return (
    <div className="h-full w-full">
      <Canvas camera={{ position: [100, 100, 100], near: 15 }}>
        <Environment preset="city" />
        <Suspense>
          <Model url={Models[0].url} />
          <ambientLight intensity={0} />
          <pointLight position={[10, 10, 10]} />
        </Suspense>
        <OrbitControls />
        <Sky sunPosition={[100, 100, 100]} />
      </Canvas>
    </div>
  );
}
