import { Route, Routes } from 'react-router-dom';
import './App.css';
import Product from './Components/Product';
import Description from './Components/Description';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Product></Product> }/>
      <Route path="/:id" element={<Description></Description>}></Route>
      </Routes>
    </div>
  );
}

export default App;
