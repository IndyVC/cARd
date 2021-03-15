import Head from "next/head";
import styles from "../styles/Home.module.css";
import Image from "next/image";
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Image src="/static/hiro.png" width="100px" height="100px"></Image>
        <iframe
          className={styles.iframe}
          srcDoc="<!DOCTYPE html>
<html>
  <script src='https://aframe.io/releases/1.0.4/aframe.min.js'></script>
  <script src='https://raw.githack.com/AR-js-org/AR.js/master/aframe/build/aframe-ar-nft.js'></script>
  <body style='margin: 0px; overflow: hidden'>
    <a-scene vr-mode-ui='enabled: false;'
    renderer='logarithmicDepthBuffer: true;'
    embedded
    arjs='trackingMethod: best; sourceType: webcam;debugUIEnabled: false;'>
    <a-nft
    type='nft'
    url='/qr'
    smooth='true'
    smoothCount='10'
    smoothTolerance='.01'
    smoothThreshold='5'
  >
        <a-entity
          position='0 0 0'
          scale='0.02 0.02 0.02'
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
