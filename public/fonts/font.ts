import { Raleway, Dancing_Script } from "next/font/google";
const ralewayFont = Raleway({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font1",
});
const dancingFont = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font2",
});
export const font1 = ralewayFont.className;
export const font2 = dancingFont.className;
