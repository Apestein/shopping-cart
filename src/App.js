import { Outlet, Link } from "react-router-dom"
import { FaShoppingCart, FaGithub } from "react-icons/fa"
import "./styles/index.css"

function App() {
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
        <Outlet />
      </main>
      <footer>
        Copyright © 2022 anon <FaGithub />
      </footer>
    </>
  )
}

export default App
