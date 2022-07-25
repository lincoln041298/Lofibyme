import ActionRain from "@/components/RainButton/ActionRain";
import Usekeyboard from "@/components/usekeyboard/Usekeyboard";
import React, { Children } from "react";
import { useSelector } from "react-redux";
import { Footer, Header } from "../components/common";

export interface MainlayoutProp {
  children?: React.ReactNode;
}

export function Main({ children }: MainlayoutProp) {
  return (
    <>
      <Header />
      <div className="absolute top-0 z-0">{children}</div>
      <ActionRain />
      <Usekeyboard />
      <Footer />
    </>
  );
}
