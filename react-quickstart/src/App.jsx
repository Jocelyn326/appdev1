import { useState } from 'react'  
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


// Button component
function MyButton() {
  return <button>I'm a Button</button>;
}

// About component
function AboutPage() {
  return (
    <>
      <h2>About</h2>
      <p>Hello there.<br /> How do you do?</p>
    </>
  );
}


export default function App() {
  return (
    <div>
      <header>
        <h1>Welcome to my app</h1>
      </header>

      <MyButton />
      <AboutPage />
    </div>
  );
}