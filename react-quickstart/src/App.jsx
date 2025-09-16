import { useState } from 'react'  
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



// User data
const user = {
  name: 'Jocelyn',
  imageUrl: 'https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fsr0hy4omyh9hbyc9r1mh.png',
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
              height: user.imageSize,
              borderRadius: '20px'
            }}
          />
        </>
    </div>
  );
}