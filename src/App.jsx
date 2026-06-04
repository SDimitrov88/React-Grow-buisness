import { Header } from './components/Header';
import { GrowBuisness } from './components/GrowBuiseness';
import { Solutions } from './components/Solutions'
import { CustomerSupport } from './components/CustomerSupport'
import { ServiceSection } from './components/ServicesSection'
import { AskedQuestions } from './components/AskedQuestions'
import { OurClients } from './components/OurClients'
import { Prices } from './components/Prices'
import { Projects } from './components/Projects'
import { Footer } from './components/Footer'
import './App.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.json'

function App() {

  return (
    <>
      <Header />

      <GrowBuisness />

      <Solutions />

      <CustomerSupport />

      <ServiceSection />

      <AskedQuestions />

      <Prices />

      <OurClients />

      <Projects/>

      <Footer />
    </>
  )
}

export default App
