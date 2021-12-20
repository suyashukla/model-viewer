import React from "react";
import "./ModelViewer.css";

function ModelViewer() {
  return (
    <div>
      <model-viewer
        src="https://cdn.glitch.me/ddf1a399-0db0-453c-ac1e-becae61f3185%2Fscene.glb?v=1634627369365"
        ar
        ar-modes="webxr scene-viewer quick-look"
        seamless-poster
        shadow-intensity="1"
        camera-controls
      ></model-viewer>
    </div>
  );
}

export default ModelViewer;
