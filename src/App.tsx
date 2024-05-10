/* CSS & Components */
import "./global.css";
import Header from "./components/Header";
import Profile from "./components/Profile";
import History from "./components/History";
import Workout from "./components/Workout";
import Progression from "./components/Progression";
import Measures from "./components/Measures";
import Settings from "./components/Settings";
import Error from "./components/Error";
import Footer from "./components/Footer";
/* Libraries & Functions */
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/history" element={<History />} />
        <Route path="/workout" element={<Workout />} />
        <Route path="/progression" element={<Progression />} />
        <Route path="/measures" element={<Measures />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/*" element={<Error />} />
      </Routes>
      <Footer />
    </div>
  );
}
