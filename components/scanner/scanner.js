import { useEffect, useState } from "react";

import styles from "./scanner.module.scss";

import { ARnft } from "@kalwalt/ar-nft";
import * as THREE from "three";

export default function Scanner() {
  const [video, setVideo] = useState(null);
  const [canvas, setCanvas] = useState(null);

  useEffect(() => {
    if (video) {
      video.style.position = "absolute";
      video.style.top = 0;
      video.style.left = 0;
    }
  }, [video]);

  useEffect(() => {
    if (canvas) {
      canvas.style.position = "absolute";
      canvas.style.top = 0;
      canvas.style.left = 0;
    }
  }, [canvas]);

  useEffect(() => {
    ARnft.init(640, 480, "marker/QR", "config.json", false)
      .then((nft) => {
        document.addEventListener("onInitThreejsRendering", (ev) => {
          const renderer = ev.detail.renderer;
          const scene = ev.detail.scene;
          const camera = ev.detail.camera;
          renderer.outputEncoding = THREE.sRGBEncoding;
          renderer.physicallyCorrectLights = true;
          let directionalLight = new THREE.DirectionalLight("#fff", 0.4);
          directionalLight.position.set(0.5, 0, 0.866);
          scene.add(directionalLight);
          setCanvas(document.getElementById("canvas"));
          setVideo(document.getElementById("video"));
        });
        document.addEventListener("getNFTData", (e) => {
          console.log("details", e.detail);
          const marker = e.detail;
          //model, x, y, z, scale
          nft.addModel(
            "brave_robot.glb",
            ((marker.width / marker.dpi) * 2.54 * 10) / 2.0,
            ((marker.height / marker.dpi) * 2.54 * 10) / 2.0,
            100,
            100
          );
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return <div className={styles.scanner}>testerino</div>;
}
