// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import SignUp from './components/signup.component';
import Login from './components/logincomponent';
import Hostels from './components/hostels.component';
import Departments from './components/departments.component';
import Buildings from './components/buildings.component';
import Foodplaces from './components/foodplaces.component';
import Sports from './components/sports.component';
import Contacts from './components/contacts.component';
import Clubs from './components/clubs.component';
import Logout from './components/logout.component';
import './App.css';
import mnitLogo from './images/Mnit_logo.png';
import yourImage from './images/your_image.png';

function App() {
  const [signedUp, setSignedUp] = useState(false);
  const [email, setUserEmail] = useState('');

  const handleSignUp = () => {
    setSignedUp(true);
  };

  const handleLogin = (userEmail) => {
    setSignedUp(true);
    setUserEmail(userEmail);
  };

  const handleLogout = () => {
    setSignedUp(false);
    setUserEmail('');
  };

  return (
    <Router>
    <div className="content">
      <nav className="navbar">
        <ul>
          <li>
            <Link to="/"><img src={mnitLogo} alt="MNIT Logo" className="logo-image" /></Link>
          </li>
          {signedUp && (
            <>
              <li>
                <Link to="/departments">Departments</Link>
              </li>
              <li>
                <Link to="/hostels">Hostels</Link>
              </li>
              <li>
                <Link to="/buildings">Buildings</Link>
              </li>
              <li>
                <Link to="/foodplaces">Food Places</Link>
              </li>
              <li>
                <Link to="/sports">Sports</Link>
              </li>
              <li>
                <Link to="/clubs">Clubs</Link>
              </li>
              <li>
                <Link to="/contacts">Contacts</Link>
              </li>
              <li>
                <Link to="/logout" onClick={handleLogout}>Logout</Link>
              </li>
            </>
          )}
          {!signedUp && (
            <>
            <li>
              <Link to="/signup">Sign Up</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            </>
          )}
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />

        {!signedUp && (
          <Route path="/">
            <Route path="/signup" element={<SignUp onSignUp={handleSignUp} />} />
            <Route path="/login" element={<Login onLogin={handleLogin} />} />
          </Route>
        )}

        {signedUp && (
          <Route path="/">
            <Route path="/hostels" element={<Hostels />} />
            <Route path="/departments" element={<Departments />} />
            <Route path="/buildings" element={<Buildings />} />
            <Route path="/foodplaces" element={<Foodplaces />} />
            <Route path="/sports" element={<Sports />} />
            <Route path="/clubs" element={<Clubs />} />
            <Route path="/contacts" element={<Contacts />} />
            {/* No need to show a separate Logout component, handleLogout is called on Logout link click */}
            <Route path="/logout" element={<Logout onLogout={handleLogout} />} /> 
          </Route>
        )}

        <Route path="*" element={<NotFound />} />
      </Routes>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} MNIT JAIPUR</p>
      </footer>
      </div>
    </Router>
  );
}
// ... (Rest of the components remain unchanged)

function Home() {
  return (
    <div className="home-container">
      <div className="card">
        <h1 className="card-title">MNIT Jaipur</h1>
        <div className="card-content">
          <p className="card-description">
            Malaviya National Institute of Technology (MNIT) is a public university located in Jaipur, India. It was established in 1963 and was formerly known as Malaviya Regional Engineering College (MREC) Jaipur. In 2002, it assumed its present name and was recognized as an Institute of National Importance in 2007.

            The Institute is fully funded by the Ministry of Education (MoE), Government of India, and is governed by a Senate as per NIT Statutes. It comprises fourteen departments, a school of management, and allied centers. MNIT Jaipur offers undergraduate, postgraduate, and doctoral programs with an emphasis on science, engineering, and management.

            Admission to all the courses is based on merit in entrance examinations. The institute also offers a new B.Tech program in Artificial Intelligence and Data Engineering from the Academic Year 2023-24 in addition to the current B.Tech (7 nos.) and B.Arch programs.
          </p>
        </div>
      </div>
      <div className="made-by-container">
        <h2 className="card">Made By P.Anvesh Reddy</h2>
        <img src={yourImage} alt="Your Image" className="your-image" />
        <p className="google-map-link">
          <a href="https://www.google.com/maps?q=Malaviya+National+Institute+of+Technology+(MNIT),+Jawahar+Lal+Nehru+Marg,+Jhalana+Gram,+Malviya+Nagar,+Jaipur,+Rajasthan,+302017" target="_blank" rel="noopener noreferrer">
            Click here to view MNIT Jaipur on Google Maps
          </a>
        </p>
      </div>
    </div>
  );
}


function NotFound() {
  return (
    <div className="home-container">
      <div className="card">
        <h1 className="card-title">MNIT Jaipur</h1>
        <div className="card-content">
          <p className="card-description">
            Malaviya National Institute of Technology (MNIT) is a public university located in Jaipur, India. It was established in 1963 and was formerly known as Malaviya Regional Engineering College (MREC) Jaipur. In 2002, it assumed its present name and was recognized as an Institute of National Importance in 2007.

            The Institute is fully funded by the Ministry of Education (MoE), Government of India, and is governed by a Senate as per NIT Statutes. It comprises fourteen departments, a school of management, and allied centers. MNIT Jaipur offers undergraduate, postgraduate, and doctoral programs with an emphasis on science, engineering, and management.

            Admission to all the courses is based on merit in entrance examinations. The institute also offers a new B.Tech program in Artificial Intelligence and Data Engineering from the Academic Year 2023-24 in addition to the current B.Tech (7 nos.) and B.Arch programs.
          </p>
        </div>
      </div>
      <div className="made-by-container">
        <h2 className="card">Made By P.Anvesh Reddy</h2>
        <img src={yourImage} alt="Your Image" className="your-image" />
        <p className="google-map-link">
          <a href="https://www.google.com/maps?q=Malaviya+National+Institute+of+Technology+(MNIT),+Jawahar+Lal+Nehru+Marg,+Jhalana+Gram,+Malviya+Nagar,+Jaipur,+Rajasthan,+302017" target="_blank" rel="noopener noreferrer">
            Click here to view MNIT Jaipur on Google Maps
          </a>
        </p>
      </div>
    </div>
  );
}

export default App;
