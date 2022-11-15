import styled from "styled-components"
import { FaStar } from "react-icons/fa"
import { useOutletContext } from "react-router-dom"

const Image = styled.img`
  height: 100%;
`
const Article = styled.article`
  outline: 1px solid #1f1f1f50;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
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
  padding: 0.5rem;
  gap: 0.5rem;
`
const Button = styled.button`
  font-size: large;
  font-weight: bold;
  padding: 10px 0;
  width: 100%;
  color: #f7f8f9;
  background-color: #1f1f1f;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border: none;
  &:hover {
    color: #fca311;
  }
`
const StyledStar = styled(FaStar)`
  color: #fca311;
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
                <StyledStar />
              </h2>
              <h2>{product.title}</h2>
              <h3>{product.price}$</h3>
            </Container3>
            <Button onClick={() => handleAdd(product.id)}>Add To Cart</Button>
          </Article>
        ))}
    </Container>
  )
}

export default Products
