import { Outlet, Link } from "react-router-dom"
import { FaShoppingCart, FaGithub } from "react-icons/fa"
import "./styles/index.css"
import { useState } from "react"
import styled from "styled-components"

const CartCounter = styled.div`
  border-radius: 50%;
  position: absolute;
  bottom: 0;
  left: -10px;
  font-weight: bold;
  font-size: large;
  background-color: red;
`
const CartWrapper = styled.div`
  position: relative;
`
function App() {
  const [products, setProducts] = useState(async () => {
    const response = await fetch("https://fakestoreapi.com/products")
    const data = await response.json()
    setProducts(data.filter((product) => product.category.includes("clothing")))
  })
  const [cart, setCart] = useState([])

  function handleAdd(id) {
    const product = products.find((element) => element.id == id)
    if (cart.find((item) => item.id == product.id)) {
      setCart(
        cart.map((item) =>
          item.id == product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      )
    } else setCart([...cart, { ...product, quantity: 1 }])
  }
  return (
    <>
      <header>
        <h1>Fake Shop</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="products">Products</Link>
          <Link to="contacts">Contacts</Link>
          <CartWrapper>
            <CartCounter>{cart.length}</CartCounter>
            <FaShoppingCart />
          </CartWrapper>
        </nav>
      </header>
      <main>
        <Outlet context={[products, handleAdd]} />
      </main>
      <footer>
        Copyright © 2022 anon <FaGithub />
      </footer>
    </>
  )
}

export default App
