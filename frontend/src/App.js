import Navbar from './components/Navbar';
import CarouselComponent from './components/CarouselComponent';
import Events from './components/Events';
import Addform from './components/Addform';
import LoginSignup from './components/LoginSignup';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
function App() {
return (
  <>
      <Router>
        <Navbar />
        <div className="container">
          <Routes>
            
            <Route exact path="/" element={<Events />}>
            </Route>
            <Route exact path="/add" element={<Addform />}>
            </Route>
            <Route exact path="/login" element={<LoginSignup />}>
            </Route>
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App