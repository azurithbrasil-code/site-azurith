import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import QuemSomos from "./pages/QuemSomos";
import Servicos from "./pages/Servicos";
import InspireSe from "./pages/InspireSe";
import Metodo from "./pages/Metodo";
import Contato from "./pages/Contato";
import PopupAtendimento from "./components/PopupAtendimento";

export default function App() {
  return (
    <BrowserRouter>
      {/* <PopupAtendimento /> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quem-somos" element={<QuemSomos />} />
        <Route path="/servicos" element={<Servicos />} />
        <Route path="/inspire-se" element={<InspireSe />} />
        <Route path="/metodo" element={<Metodo />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
    </BrowserRouter>
  );
}