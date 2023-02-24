import './App.css';
import { Box, Card, Image, Heading, Text } from 'rebass';
import Navbar from './components/Navbar';
import About from '../src/components/About'
import Gallery from './components/Gallery';

function App() {
  return (
    <div>
        <Navbar />
          <main>
            <Gallery />
            <About />
          </main>
    </div>
  );
}

export default App;
