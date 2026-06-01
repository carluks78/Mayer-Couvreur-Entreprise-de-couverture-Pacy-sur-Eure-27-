import { Outlet } from "react-router";
import Navbar from "./Navbar";
import Footer from "./Footer";
import FloatingCTA from "./FloatingCTA";

export default function Layout() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#0A0A0B', color: '#F5F5F7' }}>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
}
