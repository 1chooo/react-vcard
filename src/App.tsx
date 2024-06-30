import React, { useState, useEffect } from "react";
import './App.css';
import AppRoutes from "./AppRoutes";

const App: React.FC = () => {
  const [load, updateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return <AppRoutes load={load} />;
}

export default App;
