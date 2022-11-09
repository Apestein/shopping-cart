import { Outlet, Link } from "react-router-dom"
import { FaShoppingCart, FaGithub } from "react-icons/fa"
import "./styles/index.css"
import { useState } from "react"

function App() {
  const [products, setProducts] = useState(async () => {
    const response = await fetch("https://fakestoreapi.com/products")
    const data = await response.json()
    setProducts(data.filter((product) => product.category.includes("clothing")))
  })
  return (
    <>
      <header>
        <h1>Fake Shop</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="products">Products</Link>
          <Link to="contacts">Contacts</Link>
          <FaShoppingCart />
        </nav>
      </header>
      <main>
        <Outlet context={[products]} />
      </main>
      <footer>
        Copyright © 2022 anon <FaGithub />
      </footer>
    </>
  )
}

export default App
