import { useState } from 'react'  
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const user = {
  name: 'Jocelyn',
  imageUrl: 'https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fsr0hy4omyh9hbyc9r1mh.png',
  imageSize: 150,
};

function MyButton() {
  return <button>I'm a Button</button>;
}

function AboutPage() {
  return (
    <>
      <h2>About</h2>
      <p>Hello there.<br /> How do you do?</p>
    </>
  );
}

export default function App() {
  const [showUser, setShowUser] = useState(true); 

  return (
    <div>
      <header>
        <h1>Welcome to my app</h1>
      </header>

      <MyButton />
      <AboutPage />


<section style={{ marginTop: 20, textAlign: 'center' }}>
  {showUser ? (
    <>
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize,
          borderRadius: '20px',
          display: 'block',
          margin: '0 auto 12px'
        }}
      />
    </>
  ) : (
    <p>User info is hidden.</p>
  )}

  <button
    onClick={() => setShowUser(!showUser)}
    style={{ marginTop: '10px', padding: '6px 12px', cursor: 'pointer' }}
  >
    Toggle User Info
  </button>
</section>
    </div>
  );
}
