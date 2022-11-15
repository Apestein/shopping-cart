import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"
import styled from "styled-components"

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 100px;
  justify-items: center;
`
const H2 = styled.h2`
  grid-column: 1/4;
  justify-self: center;
`
const A = styled.a`
  color: #1f1f1f;
  font-size: 2rem;
`
function Contacts() {
  return (
    <Container>
      <A
        href="https://github.com/Apestein"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub />
      </A>
      <A href="#" target="_blank" rel="noopener noreferrer">
        <FaLinkedin />
      </A>
      <A href="#" target="_blank" rel="noopener noreferrer">
        <FaEnvelope />
      </A>

      <H2>FakeStore Rodeo Drive 42, Los Angeles USA</H2>
    </Container>
  )
}

export default Contacts
