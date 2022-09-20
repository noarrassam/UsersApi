import "./App.css";
import { BrowserRouter } from "react-router-dom";
import RoutesInfo from "./components/RoutesInfo";

function App() {
  return (
    <BrowserRouter>
      <RoutesInfo />
    </BrowserRouter>
  );
}

export default App;
