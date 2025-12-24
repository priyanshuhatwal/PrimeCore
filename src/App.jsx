import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";
import Footer from "./components/Footer";
import Aboutpage from "./pages/Aboutpage"; // <-- your new about page
import Contactpage from "./pages/Contactpage";
import Servicepage from "./pages/Servicepage";
import ProjectPage from "./pages/ProjectPage";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>

        {/* HOME PAGE */}
        <Route
          path="/"
          element={
            <>
              <div className='relative z-0 bg-black'>
                <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
                  <Hero />
                </div>
                <About />
                <Experience />
                <Tech />
                <Works />
                <Feedbacks />
                <div className='relative z-0'>
                  <Contact />
                  <StarsCanvas />
                </div>
              <Footer/>
              </div>
            </>
          }
          />

        {/*PAGE */}
        <Route path="/aboutpage" element={<Aboutpage />} />
        <Route path="/contactpage" element={<Contactpage />} />
        <Route path="/servicepage" element={<Servicepage />} />
        <Route path="/projectpage" element={<ProjectPage />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
