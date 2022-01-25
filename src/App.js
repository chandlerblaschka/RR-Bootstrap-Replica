import './App.css';
import TopBar from './components/TopBar';
import Hero from './components/Hero';
import Listings from './components/Listings.js'


function App() {
  return (
    <div className="App">
      <TopBar />
      <Hero />
      <Listings />
    </div>
  );
}

export default App;
