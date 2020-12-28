import "./App.css";
import NavigationBar from "./component/Navigationbar";
import Features from "./component/Features";
import Client from "./component/Client";
import InstallationSection from "./component/InstallationSection";
import Footer from "./component/Footer";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Features />
      <InstallationSection />
      <Client />
      <Footer />
    </div>
  );
}

export default App;
