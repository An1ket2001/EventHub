import './App.css'
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import Events from './components/Events';
import Addform from './components/Addform';
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
        {/* <Carousel /> */}
        <div className="container">
          <Routes>
            <Route exact path="/" element={<Events />}>
            </Route>
            <Route exact path="/add" element={<Addform />}>
            </Route>
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App