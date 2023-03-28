import { useState } from 'react';
import './App.css';
import Form from './components/Form';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='App'>
      <h1>New React Application</h1>
      <Form />
    </div>
  );
}

export default App;
