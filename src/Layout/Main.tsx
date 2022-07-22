import React, { Children } from "react";
import { Footer, Header } from "../components/common";

export interface MainlayoutProp {
  children?: React.ReactNode;
}

export function Main({ children }: MainlayoutProp) {
  return (
    <>
      <Header />
      <div>dkjfhasdkfh</div>
      {children}
      <Footer />
    </>
  );
}
