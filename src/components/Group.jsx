import React from "react";
import Plane from "./Plane";
import SpinningCube from "./SpinningCube";

const Group = () => {
  return (
    <group>
      <Plane />
      <SpinningCube
        position={[0, 1, 0]}
        args={[3, 2, 1]}
        color="lightBlue"
        speed={2}
      />
      <SpinningCube position={[-2, 1, -5]} color="pink" speed={6} />
      <SpinningCube position={[5, 1, -2]} color="pink" speed={6} />
    </group>
  );
};

export default Group;
