import { createContext, useState } from "react";
import Header from "./components/Header";
import ResultList from "./components/ResultList";
import Footer from "./components/Footer";

//Create context
export const InputContext = createContext();

function App() {
  const [inputValue, setInputValue] = useState("");
  console.log(inputValue);
  const value = {
    inputValue,
    setInputValue,
  };

  return (
    <InputContext.Provider value={value}>
      <div className="App">
        <Header />
        <ResultList />
      </div>
      <Footer />
    </InputContext.Provider>
  );
}

export default App;
