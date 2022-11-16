import { useNavigate } from "react-router-dom"
import styled from "styled-components"

function Home() {
  const navigate = useNavigate()
  return (
    <Container>
      <Wrapper>
        <h1 className="hero-title">
          Underground Styles Fashion Week Special Sale 99% OFF
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut finibus
          ornare vehicula. Pellentesque habitant morbi tristique senectus et
          netus et malesuada fames ac turpis egestas.
        </p>
        <Button onClick={() => navigate("/products")}>
          <p className="rainbow-text">Shop Now</p>
        </Button>
      </Wrapper>
      <Image src={"assets/hero-img.png"} alt="hero-img" />
    </Container>
  )
}
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
  animation: 1s fadeIn;
`
const Image = styled.img`
  width: max(300px, 33%);
`
const Button = styled.button`
  font-size: 2rem;
  padding: 1rem;
  color: #f7f8f9;
  background-color: #1f1f1f;
  border-radius: 30px 10px;
`
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: flex-start;
`
export default Home
