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
        <a-scene
          vr-mode-ui="enabled: false"
          arjs="sourceType: webcam; debugUIEnabled: false;"
        >
          <a-marker preset="hiro">
            <a-entity
              position="0 0 0"
              scale="0.05 0.05 0.05"
              gltf-model="https://arjs-cors-proxy.herokuapp.com/https://raw.githack.com/AR-js-org/AR.js/master/aframe/examples/image-tracking/nft/trex/scene.gltf"
            ></a-entity>
          </a-marker>
          <a-entity camera></a-entity>
        </a-scene>
      </main>
    </div>
  );
}
