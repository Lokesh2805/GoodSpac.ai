import { useState } from "react";

import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Section1 from "./MainContent/Section1";
import VideoandBanner from "./MainContent/VideoandBanner";
import AIfeatures from "./MainContent/AIfeatures";
import Experience from "./MainContent/Experience";
import FAQ from "./MainContent/FAQ";
import Form from "./MainContent/Form";
import StickySlider from "./MainContent/StickySlider";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Header />
      <Section1 />
      <VideoandBanner />
      <AIfeatures />
      <StickySlider/>
      <Experience />
      <FAQ />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
