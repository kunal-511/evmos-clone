import { useState, useEffect } from "react";
import Header from "./Components/Header";
import Stats from "./Components/Stats";
import Loader from "./Components/Loader";
import Box from "./Components/Box";
import Mission from "./Components/Mission";
import Footer from "./Components/Footer";
import News from "./Components/News";
import Container from "./Components/Container";

function App() {
  const [showLoader, setShowLoader] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 7500);
    return () => clearTimeout(timer);
  }, []);
  if (showLoader) {
    return (
      <>
        <Loader />
      </>
    );
  } else {
    return (
      <>
        <Header />
        <Stats />

        <Box />
        <Container />
        <Mission />
        <News />

        <Footer />
      </>
    );
  }
}

export default App;
