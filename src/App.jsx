import { useState } from "react";
import Home from "./pages/Home";
import CakeCustomizer from "./pages/CakeCustomizer";

function App() {
  const [page, setPage] = useState("home");

  return (
    <>
      {page === "home" && <Home onNavigate={setPage} />}
      {page === "customize" && <CakeCustomizer onNavigate={setPage} />}
    </>
  );
}

export default App;