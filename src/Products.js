import styled from "styled-components"
import { FaStar } from "react-icons/fa"
import { useOutletContext } from "react-router-dom"

const Image = styled.img`
  width: 250px;
`
const Article = styled.article`
  outline: 1px solid black;
`
const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`

function Products() {
  const [products] = useOutletContext()
  return (
    <Container>
      {products.length &&
        products.map((product) => (
          <Article key={product.id}>
            <Image src={product.image} alt="product-img" />
            <h2>
              {product.rating.rate}
              <FaStar style={{ color: "gold" }} />
            </h2>
            <h2>{product.title}</h2>
            <h3>{product.price}</h3>
          </Article>
        ))}
    </Container>
  )
}

export default Products
