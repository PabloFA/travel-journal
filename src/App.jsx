import "./App.css"
import Card from "../components/Card"
import Navbar from "../components/Navbar"
import styles from "../src/styles.css"
import data from "./data"

function App() {
  const cards = data.map((item) => {
    return <Card key={item.id} {...item} />
  })
  return (
    <div className="container">
      <Navbar />
      <section className="cards-list">{cards}</section>
    </div>
  )
}

export default App
