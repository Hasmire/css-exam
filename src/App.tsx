import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Logo from './components/Logo';
import Track from './components/Track';
import img from '/stock.jpeg';
import Subjects from './components/Subjects';
import Post from './components/Post';
import Banner from './components/Banner';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <div className="m-9 flex w-full flex-col items-center justify-center gap-6">
          <Logo className="h-[53px] w-[101px]" />
          <Track
            src={img}
            title="Game Development"
            body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras venenatis metus a consequat gravida. Aliquam egestas et orci nec vestibulum. Nulla enim urna, accumsan id purus vel, dapibus ultricies ligula."
          />
          <Subjects src={img} code="CS26111" title="THEORY OF AUTOMATA" />
          <Post src={img} />
          <Banner />
        </div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className="">Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
