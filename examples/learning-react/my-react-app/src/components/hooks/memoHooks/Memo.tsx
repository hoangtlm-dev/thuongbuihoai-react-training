import { useState, useMemo } from "react";

export function ExampleUseMemo() {
  const [name, setName]  = useState("")
  const [price, setPrice] = useState("")
  const [products, setProducts] = useState([])

  const handleSubmit = () => {
    setProducts([...products, {
      name,
      price: +price
    }])
  }

  const total = useMemo(() => {
    const resultTotal = products.reduce((result, prod) => {
      return result + prod.price
    }, 0)

    return resultTotal
  }, [products])

  return (
    <div>
      <h1>Example useMemo</h1>
      <input
        value={name}
        placeholder="Enter name..."
        onChange={e => setName(e.target.value)}
      />
      <br />
      <input
        value={price}
        placeholder="Enter price..."
        onChange={e => setPrice(e.target.value)}
      />
      <br />
      <button onClick={handleSubmit}>Add</button>
      <br />
      Total: {total}
      <ul>
        {products.map((product, index) => {
          <li key={index}>{product.name} - {product.price}</li>
        })}
      </ul>
    </div>
  )
}