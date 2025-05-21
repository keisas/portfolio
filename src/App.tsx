import WelcomeSection from "./components/layout/Hero";
import Profile from "./components/layout/Profile";
import Footer from "./components/layout/Footer";

import "./App.css";

export default function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        米山のポートフォリオ
      </header>

      <main className="main-content">
        <WelcomeSection />
        <Profile />
        <Footer />
      </main>
    </div>
  );
}