import Head from "next/head";
import { useEffect } from "react";
import Scanner from "../components/scanner/scanner.js";

export default function Home() {
  return (
    <div>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0"
        />
        <title>Create Next App</title>
      </Head>

      <main>
        <Scanner></Scanner>
      </main>
    </div>
  );
}
