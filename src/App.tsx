import { Load } from "@/components/loading";
import "@/scss/App.scss";
import { useEffect, useState } from "react";
import { Provider, useSelector } from "react-redux";
import { Intheday } from "./components/background/Intheday";
import { Main } from "./Layout";
import store from "./redux/store";

function App() {
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
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
      <Provider store={store}>
        <Main>
          <Intheday />
        </Main>
      </Provider>
    </div>
  );
}

export default App;
