import {HashRouter as Router, Routes, Route} from 'react-router-dom'
import { Home } from './Pages/Home/Home';
import { GlobalStyle } from './Pages/Home/Styles';
import { Register } from './Pages/Register/Register';
import { Context } from './Context/Context';

function App() {
  return (
    <>
    <Context>
    <GlobalStyle/>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/register' element={<Register/>}/>
      </Routes>
    </Router>
    </Context>
    </>
  );
}

export default App;
