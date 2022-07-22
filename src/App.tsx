import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import { Intheday } from "./components/background/Intheday";
import { Footer, Header } from "./components/common";
import { Main } from "./Layout";
import "@/scss/App.scss";
import { Load } from "@/components/loading";

function App() {
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  if (loading)
    return (
      <div className="bg-black absolute h-full w-full flex items-center justify-center">
        <div className="flex flex-col">
          <p className="w-52 ">
            <Load />
          </p>
          <p className="text-white text-center">Loading...</p>
        </div>
      </div>
    );
  return (
    <div className="App">
      <Main>
        <Intheday />
      </Main>
    </div>
  );
}

export default App;
