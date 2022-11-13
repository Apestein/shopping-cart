import { Outlet, Link } from "react-router-dom"
import { FaShoppingCart, FaGithub } from "react-icons/fa"
import "./styles/index.css"
import { useState } from "react"
import styled, { createGlobalStyle, css } from "styled-components"

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

  function rickRoll() {
    window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank")
  }
  return (
    <>
      <header>
        <h1>Fake Shop</h1>
        <nav>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="products">Products</StyledLink>
          <StyledLink to="contacts">Contacts</StyledLink>
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

              <div>
                <H3>{item.title.substring(0, 20) + "..."}</H3>
                <H3>{item.price * item.quantity + "$"}</H3>
                <Wrapper>
                  <Button onClick={(e) => handleQuantity(item.id, e)}>-</Button>
                  <Span>{item.quantity}</Span>
                  <Button onClick={(e) => handleQuantity(item.id, e)}>+</Button>
                </Wrapper>
              </div>
            </Container>
          ))}
          <Button onClick={rickRoll} primary>
            Checkout
          </Button>
          <Button primary className="close-modal" onClick={closeModal}>
            Close
          </Button>
        </ModalContent>
      </Modal>
      <Aside>Test</Aside>
    </>
  )
}
export default App

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
  width: min(500px, 30%);
  background-color: white;
  padding: 25px;
`
const Container = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  margin-bottom: 25px;
`
const Image = styled.img`
  min-width: 100px;
  max-width: 30%;
`
const Button = styled.button`
  font-size: 2rem;
  width: 50px;

  ${(props) =>
    props.primary &&
    css`
      width: 50%;
      font-size: 1.5rem;
    `};
`
const H3 = styled.h3``
const Span = styled.span`
  font-size: large;
`
const Wrapper = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`
const Aside = styled.aside`
  position: absolute;
  color: #f7f8f9;
  background-color: #1f1f1f;
  height: 100%;
  width: min(100px, 10%);
`
const StyledLink = styled(Link)`
  text-decoration: none;
`
