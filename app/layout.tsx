import { Raleway } from "@next/font/google";
import Head from "next/head";
import Header from "../Components/Header";
import "../styles/globals.css";
const raleway = Raleway({ subsets: ["latin"] });
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body
        className={`bg-[#FAFAFA] ${raleway.className} relative h-screen overflow-x-hidden selection:bg-slate-300`}
      >
        {/* decoration */}
        {/* <div className="absolute top-0 -left-60 -z-10 flex h-full w-[calc(100%_+_500px)] -rotate-[45deg] flex-col gap-y-60 blur-[2px]">
          <div className="h-[2px] w-full bg-slate-300/40 shadow-orange-500 drop-shadow-[0_20px_18px_rgba(249,115,22,0.5)]"></div>
          <div className="h-[2px] w-full bg-slate-300/40 drop-shadow-[0_20px_18px_rgba(249,115,22,0.5)]"></div>
          <div className="h-[2px] w-full bg-slate-300/40 drop-shadow-[0_20px_18px_rgba(249,115,22,0.5)]"></div>
          <div className="h-[2px] w-full bg-slate-300/40 drop-shadow-[0_20px_18px_rgba(249,115,22,0.5)]"></div>
          <div className="h-[2px] w-full bg-slate-300/40 drop-shadow-[0_20px_18px_rgba(249,115,22,0.5)]"></div>
        </div> */}
        <header className="absolute top-0 right-0 left-0 z-50">
          <Header />
        </header>
        <section className="mt-28">{children}</section>
      </body>
    </html>
  );
}
