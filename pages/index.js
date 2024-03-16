import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Rathi Foods</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <img
          src="/logo.svg"
          alt="Rathi Foods"
          style={{ height: "6em", margin: "20px" }}
        />
        {/* <Header title="Welcome to RATHI FOODS!" /> */}
        <p className="description">LAUNCHING SOON!!</p>
      </main>

      {/* <Footer /> */}
    </div>
  );
}
