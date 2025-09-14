import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/navbar";
import Footer from "./components/footer";
import CustomCursor from "./components/customcursor";
import LoadingScreen from "./components/loading-screen";
import AnalyticsTracker from "./components/analyticstracker";

import Home from "./components/home";
import About from "./components/about";
import Submit from "./components/submit";
import Rules from "./components/rules";
import Faq from "./components/faq";
import Archive from "./components/archive";
import Contact from "./components/contact";

import Terms from "./components/terms";
import Privacy from "./components/privacy";
import Copyright from "./components/copyright";

import { initAnalytics } from "./analytics";

function App() {
  const [loadingComplete, setLoadingComplete] = useState(false);

  useEffect(() => {
    initAnalytics();
  }, []);

  return (
    <Router>
      {!loadingComplete && (
        <LoadingScreen onLoadingComplete={() => setLoadingComplete(true)} />
      )}

      {loadingComplete && (
        <>
          <Navbar />
          <CustomCursor />
          <AnalyticsTracker />

          <Routes>
            <Route path="/" element={<Navigate to="/home" replace />} />

            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/submit" element={<Submit />} />
            <Route path="/rules" element={<Rules />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/archive" element={<Archive />} />
            <Route path="/contact" element={<Contact />} />

            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/copyright" element={<Copyright />} />

            <Route path="*" element={<h1>Página no encontrada</h1>} />
          </Routes>

          <Footer />
        </>
      )}
    </Router>
  );
}

export default App;
