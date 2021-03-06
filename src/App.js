import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import EscolheFormulario from './Components/EscolheFormulario/EscolheFormulario.jsx';
import Login from './pages/Login/Login';
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Login/>}/>
          <Route exact path="/formularios" element={<EscolheFormulario/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
