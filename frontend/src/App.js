import {HashRouter as Router, Routes, Route} from 'react-router-dom'
import { Home } from './Pages/Home/Home';
import { GlobalStyle } from './Pages/Home/Styles';

function App() {
  return (
    <>
    <GlobalStyle/>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
