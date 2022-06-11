import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Main title="The title of 4th post" />
      <Footer />
    </div>
  );
}

export default App;
