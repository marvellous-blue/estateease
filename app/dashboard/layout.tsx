import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Tab from "@/components/tab";
import Header from "@/components/header";


export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={``}>
      <body className="min-h-full flex flex-col">
        <Header/>
         {children}
         <Tab />
        </body>
    </html>
  );
}
