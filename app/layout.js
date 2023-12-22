import "./globals.css";

import { Poppins, Rubik } from "next/font/google";

import ActiveSectionContextProvider from "@/context/active-section-context";
import React from "react";
import ThemeProviderContext from "@/context/theme-context";
import ThemeSwitch from "@/components/theme-switch";
import { motion } from "framer-motion";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["300", "500", "700"],
});
const rubik = Rubik({
  subsets: ["latin"],
  variable: "--font-rubik",
  weight: ["300", "500", "700"],
});

export const metadata = {
  title: "Soham Kansodaria | Personal Resume",
  description: "Soham is a full-stack developer with 2 years of experience.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <ThemeProviderContext>
          <div className="bg-[--bg-blob1] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]" />
          <div className="bg-[--bg-blob2] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] "></div>
          <ActiveSectionContextProvider>
            {children}
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeProviderContext>
      </body>
    </html>
  );
}
