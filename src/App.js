import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import CreatePost from './pages/CreatePost/CreatePost';
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/createpost" element={<CreatePost />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
