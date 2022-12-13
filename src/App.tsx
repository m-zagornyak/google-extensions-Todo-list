import { BrowserRouter } from "react-router-dom";

import { HomePage } from "./pages";
import './styles/global.scss'

const App = () => {
  return (
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
         
  );
}

export default App;
