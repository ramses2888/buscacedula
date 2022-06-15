
//import './styles/App.css';
import { Routes, Route } from "react-router-dom";
import Formulario from './components/formulario';
import InfoBasicaCedula from './components/infoBasicaCedula';
import InfoBasicaPasaporte from './components/infoBasicaPasaporte';


function App() {
  return (
    
    <Routes>
      <Route path="/" element={<Formulario />} />
      <Route path="/infoBasicaCedula" element={<InfoBasicaCedula />} />
      <Route path="/infoBasicaPasaporte" element={<InfoBasicaPasaporte />} />
      <Route path="/infoBasica/Cedula/:numeroDocumento" element={<InfoBasicaCedula />} />
      <Route path="/infoBasica/Pasaporte/:numeroDocumento" element={<InfoBasicaPasaporte />} />
    </Routes>
    
  );
}

export default App;
