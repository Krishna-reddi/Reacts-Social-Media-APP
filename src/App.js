import logo from './logo.svg';
import './App.css';
import Home from './pages/home/Home'
import Topbar from './components/topbar/Topbar'
import {Person} from "@material-ui/icons"
import Sidebar from './components/sidebar/Sidebar';
import Rightbar from './components/rightbar/Rightbar';
import Feed from './components/feed/Feed';
import Profile from './pages/profile/Profile';
import Login from './pages/login/Login';
import Register from './pages/register/Register';

function App() {
  return (
  //   <div>
  //     <Person />
  //   </div>
  // );
  <>
  <Profile/>
  {/* <Login/> */}
  {/* <Register/> */}
  </>
  )
}

export default App;
