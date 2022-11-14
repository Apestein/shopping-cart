import styled from "styled-components"
import { FaStar } from "react-icons/fa"
import { useOutletContext } from "react-router-dom"

const Image = styled.img`
  height: 100%;
`
const Article = styled.article`
  outline: 1px solid black;
  display: flex;
  flex-direction: column;
`
const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
  height: fit-content;
`
const Container2 = styled.div`
  height: 30vh;
  margin: 0 auto;
  padding: 25px;
`
const Container3 = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  justify-items: start;
  gap: 10px;
`
const Button = styled.button`
  font-size: large;
  font-weight: bold;
  padding: 10px 0;
  width: 100%;
`

function Products() {
  const [products, handleAdd] = useOutletContext()
  return (
    <Container>
      {products.length &&
        products.map((product) => (
          <Article key={product.id}>
            <Container2>
              <Image src={product.image} alt="product-img" />
            </Container2>
            <Container3>
              <h2>
                {product.rating.rate}
                <FaStar style={{ color: "gold" }} />
              </h2>
              <h2>{product.title}</h2>
              <h3>{product.price}$</h3>
              <Button onClick={() => handleAdd(product.id)}>Add To Cart</Button>
            </Container3>
          </Article>
        ))}
    </Container>
  )
}

export default Products
