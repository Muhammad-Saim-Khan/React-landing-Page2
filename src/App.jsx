import { useState } from "react";
import Navbar from "./components/Navbar";
import One from "./components/One";
import Two from "./components/Two";
import Three from "./components/Three";
import Four from "./components/Four";
import Five from "./components/Five";
import Six from "./components/Six";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <One />
      <Two />
      <hr />
      <Three />
      <Four />
      <Five />
      <br />
      <hr />
      <Six />
      <hr />
      <Footer />
    </>
  );
}

export default App;
