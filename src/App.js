import { Outlet, Link } from "react-router-dom"
import {
  FaShoppingCart,
  FaGithub,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaBars,
} from "react-icons/fa"
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
        <h1 className="title">Fake Shop</h1>
        <nav>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="products">Products</StyledLink>
          <StyledLink to="contacts">Contacts</StyledLink>
          <CartWrapper>
            <CartCounter>{cart.length}</CartCounter>
            <FaShoppingCart fontSize="2rem" onClick={showModal} />
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
                <H3>{item.title}</H3>
                <h3>{(item.price * item.quantity).toFixed(2) + "$"}</h3>
                <Wrapper>
                  <Button onClick={(e) => handleQuantity(item.id, e)}>-</Button>
                  <Span>{item.quantity}</Span>
                  <Button onClick={(e) => handleQuantity(item.id, e)}>+</Button>
                </Wrapper>
              </div>
            </Container>
          ))}
          <Button checkout onClick={rickRoll}>
            Checkout
          </Button>
          <Button close className="close-modal" onClick={closeModal}>
            Close
          </Button>
        </ModalContent>
      </Modal>
      <Aside>
        <FaBars fontSize="2rem" />
        <FaFacebook fontSize="2rem" />
        <FaInstagram fontSize="2rem" />
        <FaTwitter fontSize="2rem" />
      </Aside>
    </>
  )
}
export default App

const CartCounter = styled.div`
  border-radius: 50%;
  width: 1.5rem;
  height: 1.5rem;
  text-align: center;
  position: absolute;
  top: -10px;
  right: -10px;
  font-size: large;
  background-color: rgb(255, 153, 153);
`
const CartWrapper = styled.div`
  position: relative;
  border-radius: 50%;
  padding: 0.5rem;
  display: flex;
  place-content: center;
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
  width: min(500px, 50%);
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
  color: #f7f8f9;
  background-color: #1f1f1f;
  border: none;
  ${(props) =>
    props.checkout &&
    css`
      min-width: fit-content;
      width: 50%;
      font-size: 1.5rem;
      padding: 0.5rem;
      background-color: #06d6a0;
      &:hover {
        color: #1f1f1f;
      }
    `};
  ${(props) =>
    props.close &&
    css`
      min-width: fit-content;
      width: 50%;
      font-size: 1.5rem;
      padding: 0.5rem;
      background-color: #ef476f;
      &:hover {
        color: #1f1f1f;
      }
    `};
`
const H3 = styled.h3`
  width: 300px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`
const Span = styled.span`
  font-size: large;
`
const Wrapper = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`
const Aside = styled.aside`
  position: fixed;
  color: #f7f8f9;
  background-color: #1f1f1f;
  height: 100%;
  width: min(100px, 10%);
  display: grid;
  grid-template-rows: 80% 1fr 1fr 1fr;
  justify-content: center;
  padding-top: 2rem;
`
const StyledLink = styled(Link)`
  text-decoration: none;
  color: #1f1f1f;
  font-size: 1.25rem;
`
