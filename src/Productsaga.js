import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Productsaga = () => {
  const dispatch = useDispatch()

  const handleShowProductsSaga = () => {
    dispatch({ type: 'FETCH_PRODUCTS_SAGA' });
  }

  const handleShowUsersSaga = () => {
    dispatch({ type: 'FETCH_USERS_SAGA' });
  }

  const users = useSelector((state) => state.usersaga)
  const products = useSelector((state) => state.sagaproduct)
  return (
    <>
      <div>Product</div>
      <button onClick={handleShowProductsSaga}>Show Products Saga</button>
      <button onClick={handleShowUsersSaga}>Show Users Saga</button>
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
      {
        users.length > 0 ? (
          <div>
            {users.map((user) => (
              <div key={user.id}>
                <h3>{user.name}</h3>
                <p>{user.email}</p>
              </div>
            ))}
          </div>
        ) : (
          <p>No users available</p>
        )
      }
    </>
  )
}

export default Productsaga;