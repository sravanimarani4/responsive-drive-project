import Navbar from "./componentes/Navbar/Navbar";
import Hero from "./componentes/hero/Hero";
import Find from "./componentes/find/Find";
import Driver from "./componentes/driver/Driver";
import Luxury from "./componentes/luxury/Luxury";
import Footer from "./componentes/Footer/Footer";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Find />
      <Driver />
      <Luxury />
      <Footer />
    </div>
  );
}

export default App;
