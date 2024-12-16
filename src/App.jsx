import { Route, Routes } from "react-router-dom";
import MAIN from "./pages/MAIN";
import Header from "./components/HEADER/Header";
import AuthForm from "./components/AUTH_FORM/AuthForm";

export const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MAIN />} />
        <Route path="/auth" element={<AuthForm />} />
        
      </Routes>
    </>
  )
}
export default App;