import ContactForm from "./components/ContactForm"
import ContactHeader from "./components/ContactHeader"
import NavBar from "./components/NavBar"
import './App.css'

const App = () => {
  return (
    <div>
    <NavBar/>
    <ContactHeader/>
    <ContactForm/>
    </div>
  )
}

export default App