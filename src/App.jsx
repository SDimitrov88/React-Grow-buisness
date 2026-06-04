import { Header } from './components/Header';
import { GrowBuisness } from './components/GrowBuiseness';
import { Solutions } from './components/Solutions'
import { CustomerSupport } from './components/CustomerSupport'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.json'

function App() {

  return (
    <>
      <Header />

      <GrowBuisness />

      <Solutions />

      <CustomerSupport />
    </>
  )
}

export default App
