import { Canvas } from "@react-three/fiber";
import { softShadows, OrbitControls } from "@react-three/drei";

import "./App.css";
import Lights from "./components/Lights";
import Group from "./components/Group";

softShadows();

const App = () => {
  return (
    <Canvas shadows colorManagement camera={{ position: [-5, 2, 10], fov: 60 }}>
      <Lights />
      <Group />
      <OrbitControls />
    </Canvas>
  );
};

export default App;
