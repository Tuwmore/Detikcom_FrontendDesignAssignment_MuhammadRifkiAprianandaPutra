import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './webChunks/header/header';
import Hero from "./webChunks/hero/hero";
import About from "./webChunks/about/about"
import { Container } from 'react-bootstrap';
import Sponsors from "./webChunks/sponsors/sponsors";
import Gallery from './webChunks/gallery/gallery';
import Berita from "./webChunks/berita/berita";
import Footer from "./webChunks/footer/footer"

function App() {
  return (
    <div>
      <Container fluid style={{marginLeft:-12}}>
        <Header/>
        <Hero/>
        <About/>
        <Sponsors/>
        <Gallery/>
        <Berita/>
        <Footer/>
      </Container>
    </div>
  );
}

export default App;
