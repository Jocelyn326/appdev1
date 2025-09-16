import { useState } from 'react'  
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



// User data
const user = {
  name: 'Celine',
  imageUrl: 'https://miro.medium.com/v2/resize:fit:1100/format:webp/1*ucL7YQ2v8aaOy426soLPZA.png',
  imageSize: 150,
};

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
        <>
          <h1>{user.name}</h1>
          <img
            className="avatar"
            src={user.imageUrl}
            alt={'Photo of ' + user.name}
            style={{
              width: user.imageWidth,
              height: user.imageSize
            }}
          />
        </>
    </div>
  );
}