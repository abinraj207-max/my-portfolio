import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import Home from "./pages/home";
import CustomCursor from "./components/common/CustomCursor/CustomCursor";
import ScrollProgress from "./components/common/ScrollProgress/ScrollProgress";

function App() {
  return (
    <div className="min-h-screen bg-[#050816] text-white">
      <ScrollProgress />
      <CustomCursor />
      <Navbar />

      <Home />

      <Footer />
    </div>
  );
}

export default App;