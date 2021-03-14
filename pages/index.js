import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <iframe
          className={styles.iframe}
          srcDoc="<!DOCTYPE html>
<html>
  <script src='https://aframe.io/releases/1.0.4/aframe.min.js'></script>
  <script src='https://raw.githack.com/AR-js-org/AR.js/master/aframe/build/aframe-ar.js'></script>
  <body style='margin: 0px; overflow: hidden'>
    <a-scene embedded arjs='detectionMode: mono_and_matrix; matrixCodeType: 4x4_BCH_13_9_3'>
      <a-marker type='barcode' value='105'>
        <a-entity
          position='0 0 0'
          scale='0.02 0.02 0.02'
          gltf-model='https://arjs-cors-proxy.herokuapp.com/https://raw.githack.com/AR-js-org/AR.js/master/aframe/examples/image-tracking/nft/trex/scene.gltf'
        ></a-entity>
      </a-marker>
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
