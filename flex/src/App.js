import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Classes from './pages/Classes';
import Instructors from './pages/Instructors';
import Library from './pages/Library';
import Reserve from './pages/Reserve';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/aboutus' element={<About />} />
          <Route path='/classes' element={<Classes />} />
          <Route path='/instructors' element={<Instructors />} />
          <Route path='/library' element={<Library />} />
          <Route path='/reserve' element={<Reserve />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
