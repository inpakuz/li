import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import Converter from './pages/converter';
function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>

     <Route path='/converter' element={<Converter/>}></Route>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
