import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Task01 from './components/Task01/Task01';
import Task02 from './components/Task02/Task02';
import Task03 from './components/Task03/Task03';
import ThemeProvider from './contexts/ThemeProvider';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/task01' element={<Task01 />} />
          <Route path='/task02' element={<Task02 />} />
          <Route path='/task03' element={<Task03 />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
