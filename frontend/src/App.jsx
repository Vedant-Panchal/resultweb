// frontend/src/App.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Admin from './Admin';
import './App.css';

function App() {
  const [enrollmentNo, setEnrollmentNo] = useState('');
  const [seatNo, setSeatNo] = useState('');
  const [semester, setSemester] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [resultData, setResultData] = useState(null);
  
  const handleEnrollmentNoChange = (e) => {
    setEnrollmentNo(e.target.value);
  };

  const handleSeatNoChange = (e) => {
    setSeatNo(e.target.value);
  };

  const handleSemesterChange = (e) => {
    setSemester(e.target.value);
  };

  const handleShowResult = async () => {
    try {
      const response = await axios.post('http://localhost:3000/api/getResult', {
        enrollmentNo,
        seatNo,
        semester,
      });

      setResultData(response.data);
      setShowResult(true);
    } catch (error) {
      console.error('Error fetching results:', error);
    }
  };

  // return (
  //   <Router>
  //   <div>
  //     <nav>
  //       <ul>
  //         <li>
  //           <Link to="/">Student Portal</Link>
  //         </li>
  //         <li>
  //           <Link to="/admin">Admin Panel</Link>
  //         </li>
  //       </ul>
  //     </nav>

  //     <Routes>
  //       <Route path="/admin">
  //         <Admin />
  //       </Route>
  //       <Route path="/">
  //     <div className="login-container">
  //       <h1>Welcome, Adani University Result Portal</h1>
  //       <input type="number" placeholder="Enrollment No" value={enrollmentNo} onChange={handleEnrollmentNoChange} />
  //       <br />
  //       <input type="text" placeholder="University Seat No" value={seatNo} onChange={handleSeatNoChange} /> <br />
  //       <select value={semester} onChange={handleSemesterChange}>
  //         <option value="">Select Semester</option>
  //         {Array.from({ length: 8 }, (_, index) => (
  //           <option key={index} value={index + 1}>{index + 1}</option>
  //         ))}
  //       </select>
  //       <br />
  //       <button onClick={handleShowResult}>Show Your Result</button>
  //     </div>

  //     {showResult && (
  //       <div className="result-container">
  //         {resultData ? (

  //           <div>
  //             <h2>Result:</h2>
  //             <pre>{JSON.stringify(resultData, null, 2)}</pre>
  //           </div>
  //         ) : (
  //           <p>No result found.</p>
  //         )}
  //       </div>
  //     )}
  //     </Route>
  //       </Routes>
  //     </div>
  //   </Router>
  // ); 
  // return (
  //   <Router>
  //     <div>
  //       <nav>
  //         <ul>
  //           <li>
  //             <Link to="/">Student Portal</Link>
  //           </li>
  //           <li>
  //             <Link to="/admin">Admin Panel</Link>
  //           </li>
  //         </ul>
  //       </nav>

  //       <Routes>
  //         <Route path="/admin" element={<Admin />} />
  //         <Route path="/" element={(
  //           <div className="login-container">
  //             {/* ... (your existing UI components) */}
  //           </div>
  //         )} />
  //       </Routes>
  //     </div>
  //   </Router>
  // )
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Student Portal</Link>
            </li>
            <li>
              <Link to="/admin">Admin Panel</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/admin" element={<Admin />} />
          <Route
            path="/"
            element={
              <div className="login-container">
                <h1>Welcome, Adani University Result Portal</h1>
                <input
                  type="number"
                  placeholder="Enrollment No"
                  value={enrollmentNo}
                  onChange={handleEnrollmentNoChange}
                />
                <br />
                <input
                  type="text"
                  placeholder="University Seat No"
                  value={seatNo}
                  onChange={handleSeatNoChange}
                />{' '}
                <br />
                <select value={semester} onChange={handleSemesterChange}>
                  <option value="">Select Semester</option>
                  {Array.from({ length: 8 }, (_, index) => (
                    <option key={index} value={index + 1}>
                      {index + 1}
                    </option>
                  ))}
                </select>
                <br />
                <button onClick={handleShowResult}>Show Your Result</button>
              </div>
            }
          />
        </Routes>

        {showResult && (
          <div className="result-container">
            {resultData ? (
              <div>
                <h2>Result:</h2>
                <pre>{JSON.stringify(resultData, null, 2)}</pre>
              </div>
            ) : (
              <p>No result found.</p>
            )}
          </div>
        )}
      </div>
    </Router>
  );
}

export default App;
