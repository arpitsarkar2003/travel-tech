import final_preview_svg from './final_preview_svg.svg';
import lgoin_img from './login_img.png';
import './App.css';
import Dashboard from './components/dashboard/Dashboard';

import {
  BrowserRouter as Router,
  Routes as Switch,
  Route
} from "react-router-dom";
import Login from './components/auth/Login';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/login' element={<Login logo={final_preview_svg} login_logo={lgoin_img}/>}/>
        <Route path='/dashboard' element={<Dashboard logo={final_preview_svg} />}/>
      </Switch>
    </Router>
  );
}

export default App;
