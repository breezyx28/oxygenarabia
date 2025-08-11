import { Canvas } from "@react-three/fiber";
import Object from "./Object";

const CanvasPlayground = () => {
  return (
    <Canvas className="w-full h-full">
      <scene>
        <perspectiveCamera position={[0, 0, 2]} />
        <Object />
      </scene>
    </Canvas>
  );
};

export default CanvasPlayground;
// ```

// In this example, we're creating a new page in your Next.js application called `MyPage`. We're using the `<Canvas>` component from `react-three-fiber` to create a Three.js scene and adding an ambient light and a [point light](poe://www.poe.com/_api/key_phrase?phrase=point%20light&prompt=Tell%20me%20more%20about%20point%20light.) to the scene. Finally, we're adding your `Model` component to the scene.
