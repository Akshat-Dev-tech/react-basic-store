import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchData } from './store/actions/action'

const Product = () => {
  const dispatch = useDispatch()
  const handleShowProducts = () => {
    // Dispatch an action to show products
    dispatch(fetchData());
  }

  const products = useSelector((state) => state.product)
  console.log(products);
  return (
    <>
      <div>Product</div>
      <button onClick={handleShowProducts}>Show Products</button>
      {
        products.length > 0 ? (
          <div>
            {products.map((product) => (
              <div key={product.id}>
                <h3>{product.title}</h3>
                <p>{product.description}</p>
                <p>Price: ${product.price}</p>
              </div>
            ))}
          </div>
        ) : (
          <p>No products available</p>
        )
      }
    </>
  )
}

export default Product