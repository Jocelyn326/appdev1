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
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <button onClick={handleClick}>
      Clicked {count} times
    </button>
  );
}

function AboutPage() {
  return (
    <>
      <h2>About</h2>
      <p>Hello there.<br /> How do you do?</p>
    </>
  );
}

const products = [
  { title: 'Cabbage', isFruit: false, id: 1 },
  { title: 'Garlic', isFruit: false, id: 2 },
  { title: 'Apple', isFruit: true, id: 3 },
];

function ShoppingList() {
  const listItems = products.map(product =>
    <li
      key={product.id}
      style={{
        color: product.isFruit ? 'magenta' : 'darkgreen'
      }}
    >
      {product.title}
    </li>
  );

  return (
    <ul>{listItems}</ul>
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

      <section style={{ marginTop: 20 }}>
        <h2>Shopping List</h2>
        <ShoppingList />
      </section>

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
