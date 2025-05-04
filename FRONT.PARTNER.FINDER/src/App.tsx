import { Header } from "./Components/Header"
import { Search } from "./Components/Search"
import { Products } from "./Components/Products"
import { Footer } from "./Components/Footer"

function App() {
  return (
    <div className="flex flex-1 flex-col">
      <Header />
      <Search />
      <Products />      
      <Footer />
    </div>
  )
}

export default App
