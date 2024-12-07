import { Route, Routes } from "react-router-dom";
import MAIN from "./pages/MAIN";
import Header from "./components/HEADER/Header";
import Card from "./components/CARD/Card";
import Cards from "./pages/CARDS";

export const App = () => {
  return (
    <>
      <Header />
      <Cards/>
      <Routes>
        <Route path="/" element={<MAIN />} />
      </Routes>
    </>
  )
}
export default App;