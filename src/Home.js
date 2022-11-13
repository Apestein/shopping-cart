import styled from "styled-components"

function Home() {
  return (
    <Container>
      <div>
        <h1>Fashion Week Special Sale 99% OFF</h1>
        <button>Shop Now</button>
      </div>
      <Image src={"assets/hero-img.png"} alt="hero-img" />
    </Container>
  )
}
const Container = styled.div`
  display: flex;
  justify-content: space-between;
`
const Image = styled.img`
  width: 33%;
`

export default Home
