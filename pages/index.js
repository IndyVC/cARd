import Head from "next/head";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import { useEffect } from "react";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="width=device-width, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0"
        />
      </Head>

      <main className={styles.main}>
        <iframe
          className={styles.iframe}
          srcDoc="<!DOCTYPE html>
<html>
  <script src='https://aframe.io/releases/1.0.4/aframe.min.js'></script>
  <script src='https://raw.githack.com/AR-js-org/AR.js/master/aframe/build/aframe-ar.js'></script>
  <body style='margin: 0px; overflow: hidden'>
    <a-scene vr-mode-ui='enabled: false;'
    embedded
    arjs='sourceType: webcam;'>
    <a-marker
    preset='custom'
    url='/marker.patt'

  >
        <a-entity
          position='0 0 0'
          scale='1 1 1'
          gltf-model='https://arjs-cors-proxy.herokuapp.com/https://raw.githack.com/AR-js-org/AR.js/master/aframe/examples/image-tracking/nft/trex/scene.gltf'
        ></a-entity>
      </a-nft>
      <a-entity camera></a-entity>
    </a-scene>
  </body>
</html>
"
        ></iframe>
      </main>
    </div>
  );
}
