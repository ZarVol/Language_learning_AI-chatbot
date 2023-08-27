import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';
import Lessons from './components/Lessons';
// import Header from './components/Header';
import MainContainer from './components/MainContainer';

function App() {
  return (
    <Router>
      <div className="App">
        <MainContainer>
          <Routes>
            {/* <Route element={}> */}
            <Route path="/" exact element={<Home />} />
            <Route path="/lessons" exact element={<Lessons />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/dashboard" element={<Dashboard />} />
            {/* </Route> */}
          </Routes>
        </MainContainer>
      </div>
    </Router>
  );
}

export default App;
