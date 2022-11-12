import { Outlet, Link } from "react-router-dom"
import { FaShoppingCart, FaGithub } from "react-icons/fa"
import "./styles/index.css"
import { useState } from "react"
import styled, { createGlobalStyle } from "styled-components"

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
const Modal = styled.div`
  display: none;
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`
const ModalContent = styled.div`
  position: absolute;
  right: 0;
  height: 100%;
  width: 25%;
  background-color: white;
`
const Container = styled.div``
const Image = styled.img`
  width: 250px;
`
const Button = styled.button`
  font-size: 2rem;
  padding: 10px;
`

function App() {
  const [products, setProducts] = useState(async () => {
    const response = await fetch("https://fakestoreapi.com/products")
    const data = await response.json()
    setProducts(data.filter((product) => product.category.includes("clothing")))
  })
  const [cart, setCart] = useState([])

  function handleAdd(id) {
    const product = products.find((element) => element.id === id)
    if (cart.find((item) => item.id === product.id)) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      )
    } else setCart([...cart, { ...product, quantity: 1 }])
  }

  function handleQuantity(id, e) {
    if (e.target.textContent === "+")
      setCart(
        cart.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        )
      )
    else {
      const product = cart.find((item) => item.id === id)
      if (product.quantity > 1)
        setCart(
          cart.map((item) =>
            item.id === id ? { ...item, quantity: item.quantity - 1 } : item
          )
        )
      else setCart(cart.filter((item) => item.id !== id))
    }
  }

  function showModal() {
    document.querySelector(".modal").style.display = "block"
  }

  function closeModal(e) {
    const modal = document.querySelector(".modal")
    if (e.target == modal) modal.style.display = "none"
    if (e.target.classList.contains("close-modal")) modal.style.display = "none"
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
            <FaShoppingCart onClick={showModal} />
          </CartWrapper>
        </nav>
      </header>
      <main>
        <Outlet context={[products, handleAdd]} />
      </main>
      <footer>
        Copyright © 2022 anon <FaGithub />
      </footer>
      <Modal onClick={closeModal} className="modal">
        <ModalContent>
          {cart.map((item) => (
            <Container key={item.id}>
              <Image src={item.image} alt="cart-item" />
              <Button onClick={(e) => handleQuantity(item.id, e)}>-</Button>
              <span>{item.quantity}</span>
              <Button onClick={(e) => handleQuantity(item.id, e)}>+</Button>
            </Container>
          ))}
          <Button>Checkout</Button>
          <Button className="close-modal" onClick={closeModal}>
            Close
          </Button>
        </ModalContent>
      </Modal>
    </>
  )
}

export default App
