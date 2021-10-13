import {Link} from 'react-router-dom'
import CartContext from '../../context/CartContext'

import CartItem from '../CartItem'
import './index.css'

const CartListView = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList, emptyCartList} = value
      let total = 0
      cartList.forEach(eachItem => {
        total += eachItem.quantity * eachItem.cost
      })

      const onClickPlaceOrder = () => {
        emptyCartList()
      }

      return (
        <>
          <ul className="cart-list">
            {cartList.map(cartItem => (
              <CartItem cartItemDetails={cartItem} key={cartItem.id} />
            ))}
          </ul>
          <hr />
          <div className="order-total">
            <h1 className="order">Order Total:</h1>
            <p className="total" testid="total-price">
              {total}
            </p>
          </div>
          <div className="place-order">
            <Link to="/payment">
              <button
                type="button"
                className="place-order-btn"
                onClick={onClickPlaceOrder}
              >
                Place Order
              </button>
            </Link>
          </div>
        </>
      )
    }}
  </CartContext.Consumer>
)

export default CartListView
