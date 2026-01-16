import Header from "./assets/components/1.Header/Header.jsx";
import Hero from "./assets/components/2.Hero/Hero.jsx";
import Service from "./assets/components/3.Service/Service.jsx";
import Project from "./assets/components/4.Project/Project.jsx";
import CeoMessage from "./assets/components/5.CeoMessage/CeoMessage.jsx";
import Contact from "./assets/components/6.Contact/Contact.jsx";
import Footer from "./assets/components/7.Footer/Footer.jsx";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Service />
      <Project />
      <CeoMessage />
      <Contact />
      <Footer />
    </>
  );
}
// This code defines the main App component for a React application.
// It imports a Header component and renders it within the App component.
// The Header component is expected to contain navigation and branding elements.
export default App;
