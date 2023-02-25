
import { Route, Routes } from 'react-router-dom';
import './App.css';
import CompanyDetails from './components/CompanyDetails/CompanyDetails';
import Calculators from './components/Pages/Calculator/Calculators';
import GoalPlanning from './components/Pages/Calculator/GoalPlanning/GoalPlanning';
import GoalPlanningSIP from './components/Pages/Calculator/GoalPlanningSIP/GoalPlanningSIP';
import LumpsumCalculator from './components/Pages/Calculator/LumpsumCalculator/LumpsumCalculator';
import SIPCalculator from './components/Pages/Calculator/SIPCalculator/SIPCalculator';
import SmVsFd from './components/Pages/Calculator/SmVsFd/SmVsFd';
import Home from './components/Pages/Home/Home';
import Footer from './components/Pages/Shared/Footer/Footer';
import Header from './components/Pages/Shared/Header/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/calculator' element={<Calculators />}></Route>
        <Route path='/company/:name' element={<CompanyDetails />} />
        <Route path='/calculator/lumpsumCalculator' element={<LumpsumCalculator />}></Route>
        <Route path='/calculator/sipCalculator' element={<SIPCalculator />}></Route>
        <Route path='/calculator/goalPlanningCalculator' element={<GoalPlanning />}></Route>
        <Route path='/calculator/smvsfd' element={<SmVsFd />}></Route>
        <Route path='/calculator/goalPlanningSIP' element={<GoalPlanningSIP />}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
