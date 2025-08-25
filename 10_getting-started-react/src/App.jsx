import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#ffffff",
        minHeight: "100vh",
        padding: "40px",
        color: "#333",
      }}
    >
      <h1 style={{ marginBottom: "10px", textAlign: "left" }}>About Me</h1>
      <hr style={{ margin: "20px 0" }} />
            <p style={{ textAlign: "left" }}>
              <strong>Name:</strong> Jocelyn Bendoy
            </p>
            <p style={{ textAlign: "left" }}>
              <strong>Course/Year:</strong> BS Information Technology, 3rd Year - B
            </p>
            <p style={{ textAlign: "left" }}>
              <strong>Fun Fact:</strong> I used to weld metals... now I weld lines of code 🔧💻
            </p>

      <h1 style={{ marginBottom: "10px", textAlign: "left" }}>Why I Want to Learn React</h1>
      <hr style={{ margin: "20px 0" }} />
        <p style={{ fontSize: "18px",textAlign: "left" }}>
          I want to study React.js because it is an important tool for creating modern and dynamic websites.
          As a BSIS student and aspiring Business Analyst, I'm interested in learning how developers build
          smooth, user-focused interfaces and handle data on the frontend.
        </p>
      </div>
  );
}

export default App;
