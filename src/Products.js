import styled from "styled-components"
import { FaStar } from "react-icons/fa"
import { useOutletContext } from "react-router-dom"

const Image = styled.img`
  width: 100%;
`
const Article = styled.article`
  outline: 1px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 100px;
  place-content: center;
`
const Container2 = styled.div`
  height: 100%;
  //padding: 50px;
  //display: flex;
  //align-items: center;
`
const Button = styled.button`
  font-size: large;
  font-weight: bold;
  padding: 10px 0;
  width: 100%;
`

function Products() {
  const [products] = useOutletContext()
  return (
    <Container>
      {products.length &&
        products.map((product) => (
          <Article key={product.id}>
            <Container2>
              <Image src={product.image} alt="product-img" />
            </Container2>
            <h2>
              {product.rating.rate}
              <FaStar style={{ color: "gold" }} />
            </h2>
            <h2>{product.title}</h2>
            <h3>{product.price}$</h3>
            <Button>Add To Cart</Button>
          </Article>
        ))}
    </Container>
  )
}

export default Products
