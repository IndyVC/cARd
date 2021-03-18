import { useEffect } from "react";

import styles from "./scanner.module.scss";

import { ARnft } from "@kalwalt/ar-nft";
import * as THREE from "three";

export default function Scanner() {
  useEffect(() => {
    ARnft.init(640, 480, "marker/QR", "config.json", false)
      .then((nft) => {
        document.addEventListener("onInitThreejsRendering", (ev) => {
          console.log(ev.detail);
          const renderer = ev.detail.renderer;
          console.log(renderer);
          const scene = ev.detail.scene;
          console.log(scene);
          const camera = ev.detail.camera;
          console.log(camera);
          renderer.outputEncoding = THREE.sRGBEncoding;
          renderer.physicallyCorrectLights = true;
          let directionalLight = new THREE.DirectionalLight("#fff", 0.4);
          directionalLight.position.set(0.5, 0, 0.866);
          scene.add(directionalLight);
        });
        //model, x, y, z, scale
        nft.addModel("brave_robot.glb", 0, 0, 0, 80);

        const canvas = document.getElementById("canvas");
        const video = document.getElementById("video");
        video.style.position = "absolute";
        video.style.top = 0;
        video.style.left = 0;
        canvas.style.position = "absolute";
        canvas.style.top = 0;
        canvas.style.left = 0;
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return <div className={styles.scanner}>testerino</div>;
}
