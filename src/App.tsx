import WelcomeSection from "./components/Hero";
import Profile from "./components/Profile/Profile";
import Footer from "./components/Footer";

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