
import './App.css';
import { BrowserRouter, Switch, Route, Routes } from 'react-router-dom';
import Navbar from './component/Navbar/Navbar';
function App() {
  return (
    <>
     
       <BrowserRouter>
       <Routes>
       <Route path="/" exact element={<Navbar />} />
       </Routes>
      
       </BrowserRouter>
       
        
    </>
  );
}

export default App;
