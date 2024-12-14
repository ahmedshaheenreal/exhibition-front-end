import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./layout/MainLayout.jsx";
import Home from "./pages/Home.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import NotFound from "./pages/NotFound.jsx";
import Exhibition from "./pages/Exhibition.jsx";
import Artists from "./pages/Artists.jsx";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="exhibition" element={<Exhibition />} />
            <Route path="artists" element={<Artists />} />
            <Route path="about-us" element={<AboutUs />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
