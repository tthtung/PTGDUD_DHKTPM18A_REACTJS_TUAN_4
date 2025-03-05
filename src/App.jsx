import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Item from "./components/Item";
import Footer from "./components/Footer";
import Headers from "./components/Header";
import Intro from "./components/Intro";

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://67c83bcb0acf98d0708584d5.mockapi.io/api/data/User")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

        setItems(data);
      });
  }, []);

  return (
    <>
      <Headers />
      <Intro />
      <div
        className="App"
        style={{
          backgroundColor: "white",
          width: "100%",
          justifyItems: "center",
        }}
      >
        {items.map((item) => (
          <Item
            key={item.id}
            name={item.name}
            image={item.avatar}
            id={item.id}
          />
        ))}
      </div>
      <Footer />
    </>
  );
}

export default App;
