import "./App.css";
import { Button } from "./components/Button/Button";
import ContactForm from "./components/ContactForm/COntactForm";
import ContactHeader from "./components/ContactHeader/ContactHeader";
import { Navigation } from "./components/Navigation/Navigation";

export default function App() {
  return (
    <div>
      <Navigation />
      <main className="main_container">
        <ContactHeader />
        <ContactForm />
      </main>
    </div>
  );
}
