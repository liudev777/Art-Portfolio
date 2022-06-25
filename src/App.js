import Navbar from "./components/topbar/Navbar";
import Greeting from "./components/greeting/Greeting";
import Gallery from "./components/gallery/Gallery";
import About from "./components/about/About";



function App() {
  return (
    <div className="App">
      <Navbar/>
      <Greeting/>
      <Gallery/>
      <About/>
    </div>
  );
}

export default App;
