import Topbar from "./topbar/Topbar.jsx"
import Home from './pages/home/Home.jsx'
// import Single from "./pages/single/Single.jsx";
import Post from "./post/Post.jsx";
import Write from "./pages/write/Write.jsx";
import Settings from "./settings/Settings.jsx";
import Login from "./pages/login/Login.jsx";
// import Register from "./pages/register/Register.jsx";
// import {
//   BrowserRouter as Router,
  
//   Route,
  
  
// } from "react-router-dom";


function App() {
 
  return (
    <>
       <Topbar/>
       <Home/>
      <Post/>
       <Write/>
      <Settings/>
      <Login/>
     
     </>
       
    
  );
}

export default App;
