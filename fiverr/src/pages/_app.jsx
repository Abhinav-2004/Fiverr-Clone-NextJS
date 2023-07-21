import "@/styles/globals.css";
import Footer from "./components/Footer";
import { StateProvider } from "../context/StateContext";
import reducer from "../context/StateReducers";
import { initialState } from "../context/StateReducers";
import Navbar from "./components/Navbar";
import Head from "next/head";
export default function App({ Component, pageProps }) {
  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <Head>
      <link rel="shortcut icon"
        href="/favicon.ico"></link>
        <title>Fiverr</title>
      </Head>
      <Navbar className="relative flex flex-col h-screen justify-between"/>
      <div className={`mb-auto w-full mx-auto`}>
        <Component {...pageProps} />
      </div>
      <Footer />
    </StateProvider>
  );
}
