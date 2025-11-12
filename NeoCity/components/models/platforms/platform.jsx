import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Environment } from "@react-three/drei";

function Model({ url, scale = 1, position = [0, 0, 0], rotation = [0, 0, 0] }) {
  const { scene } = useGLTF(url);
  return <primitive object={scene} scale={scale} position={position} rotation={rotation} />;
}

const ModelViewer = ({
  modelPath,
  scale = 1,
  position,
  rotation,
  background = "#87ceeb",
  enableZoom = false,
}) => {
  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <Canvas camera={{ position: [0, 2, 5], fov: 45 }}>
        <color attach="background" args={[background]} />
        <ambientLight intensity={0.7} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <Suspense fallback={null}>
          <Model url={modelPath} scale={scale} position={position} rotation={rotation} />
          <Environment preset="sunset" />
        </Suspense>
        <OrbitControls enableZoom={enableZoom} />
      </Canvas>
    </div>
  );
};

export default ModelViewer;
