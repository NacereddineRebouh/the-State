import { Raleway } from "@next/font/google";
import Head from "next/head";
import Image from "next/image";
import { AnalyticsWrapper } from "../Components/Analytics/analytics";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header";
import background2 from "../public/Images/Background/Lines.png";
import background from "../public/Images/Background/Lines2.png";

import "../styles/globals.css";
const raleway = Raleway({ subsets: ["latin"] });
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="scrollbar-thin scrollbar-track-gray-100 scrollbar-thumb-orange-400">
      <body
        className={`bg-[#FAFAFA] ${raleway.className} relative overflow-x-hidden selection:bg-slate-300`} //i had to removed h-screen for Framer-motion to work
      >
        {/* decoration */}
        <div className="absolute top-0 left-0 right-0 -z-10 mx-auto flex aspect-video max-w-[2500px]">
          <Image src={background} fill alt={""}></Image>
        </div>

        <header className="absolute top-0 right-0 left-0 z-50">
          <Header />
        </header>
        <section className="mt-28 ">{children}</section>
        <footer id="Footer" className="mt-40 w-full md:mt-60">
          <Footer />
        </footer>
        <AnalyticsWrapper />
      </body>
    </html>
  );
}
