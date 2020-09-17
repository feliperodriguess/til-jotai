import React, { useCallback } from 'react';
import { useAtom } from 'jotai';

import { nameAtom, ageAtom } from './jotai';
import Footer from './components/footer';

import './App.css';

function App() {
  const name = useAtom(nameAtom);
  const [age, setAge] = useAtom(ageAtom);

  const updateJotai = useCallback(() => {
    setAge((prevState) => prevState + 1);
  }, [setAge]);

  return (
    <div className="container">
      <h1 className="title">
        {name} tem {age} anos
      </h1>
      <button onClick={updateJotai} className="button">
        Get old
      </button>
      <Footer />
    </div>
  );
}

export default App;
