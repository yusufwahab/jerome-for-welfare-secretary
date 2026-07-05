import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Platform } from "./pages/Platform";
import { Achievements } from "./pages/Achievements";
import { Mastermind } from "./pages/Mastermind";
import { PledgeWall } from "./pages/PledgeWall";
import { Contact } from "./pages/Contact";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="platform" element={<Platform />} />
        <Route path="achievements" element={<Achievements />} />
        <Route path="mastermind" element={<Mastermind />} />
        <Route path="pledge-wall" element={<PledgeWall />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}
