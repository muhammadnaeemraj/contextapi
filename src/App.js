import { createContext } from "react";
import "./App.css";
import Compa from "./components/Compa";
import Lastname from "./components/name/Lastname";

const FirstName = createContext();
const LastName = createContext();
function App() {
  return (
    <div className="App">
      <h1>Working with Context Api</h1>
      <br />
      <FirstName.Provider value={"Ali Hamza"}>
        <LastName.Provider value={"Raj"}>
          <Compa />
          <Lastname />
        </LastName.Provider>
      </FirstName.Provider>
    </div>
  );
}

export default App;
export { FirstName, LastName };
