import Head from "next/head";

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
      <script src="/viewer.js"></script>

      <main></main>
    </div>
  );
}
