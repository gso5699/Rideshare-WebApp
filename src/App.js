import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import "./App.css";

import NavBar from "./components/NavBar";
import ChatBox from "./pages/ChatBox";
import Welcome from "./pages/Welcome";

import Calendar from './pages/Calendar';



import { BrowserRouter as Router, Routes, Route, Navigate }
    from 'react-router-dom';


function App() {
  const [user] = useAuthState(auth);

  return (

    <Router>
      <NavBar />
      <Routes>
        <Route exact path='/welcome' element={user ? <Navigate to="/" replace /> : <Welcome />} />
        <Route path='/calendar' element={user ? <Calendar /> : <Welcome />} />
        <Route path='/' element={user ? <ChatBox /> : <Welcome />} />
      </Routes>
    </Router>
    
  );
}

export default App;