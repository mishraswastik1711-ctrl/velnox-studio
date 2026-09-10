import { useEffect, useState } from "react";
import "./Loader.css";

export default function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="loader-screen">
      <div className="loader-logo">
        <h1>VELNOX</h1>
        <span>STUDIO</span>

        <div className="loader-line"></div>
      </div>
    </div>
  );
}