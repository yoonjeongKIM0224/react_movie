import './App.css';
import Movie from './components/Movie.js';
import Home from './routes/Home.js';
import Detail from './routes/Detail.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return <Router>
  <Routes>
    <Route path="/hello" element={<h1>hello</h1>} />
    <Route path={`${process.env.PUBLIC_URL}/`} element={<Home />} />
    <Route path="/movie/:id" element={<Detail />} />
  </Routes>
</Router>
}

export default App;