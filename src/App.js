
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Calculator from './components/Pages/Calculator/Calculator';
import GoalPlanning from './components/Pages/Calculator/GoalPlanning/GoalPlanning';
import LumpsumCalculator from './components/Pages/Calculator/LumpsumCalculator/LumpsumCalculator';
import SIPCalculator from './components/Pages/Calculator/SIPCalculator/SIPCalculator';
import Home from './components/Pages/Home/Home';
import Footer from './components/Pages/Shared/Footer/Footer';
import Header from './components/Pages/Shared/Header/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/calculator' element={<Calculator />}></Route>
        <Route path='/calculator/lumpsumCalculator' element={<LumpsumCalculator />}></Route>
        <Route path='/calculator/sipCalculator' element={<SIPCalculator />}></Route>
        <Route path='/calculator/goalPlanningCalculator' element={<GoalPlanning />}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
