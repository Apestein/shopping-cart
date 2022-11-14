import styled from "styled-components"

function Home() {
  return (
    <Container>
      <div>
        <h1 className="hero-title">
          Underground Styles Fashion Week Special Sale 99% OFF
        </h1>
        <Button>Shop Now</Button>
      </div>
      <Image src={"assets/hero-img.png"} alt="hero-img" />
    </Container>
  )
}
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
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
export default Home
