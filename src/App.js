import Advert from "./components/Advert/Advert";
import Banner from "./components/Banner/Banner";
import Cards from "./components/Cards/Cards";
import Info from "./components/Info/Info";
import Navbar from "./components/Navbar/Navbar";
import Showcase from "./components/Showcase/Showcase";



function App() {
  return (
    <div >
      <Navbar/>
      <Showcase/>
      <Advert/>
      <Banner/>
      <Cards/>
      <Info/>
      
    </div>
  );
}

export default App;
