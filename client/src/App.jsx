import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Home from './pages/Home';
import About from './pages/About';
import Profile from './pages/Profile';

const routes =(
  <Router>
    <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About/>} />
          <Route path="/sign-in" element={<Signin/>} />
          <Route path="/sign-up" element={<Signup/>} />
          <Route path="/profile" element={<Profile/>} />
      </Routes>
  </Router>
);

  

function App() {
  

  return (
   <div>{routes}</div>
  )
}

export default App
