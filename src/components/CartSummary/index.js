// Write your code here
import './index.css'

const CartSummary = props => {
  const {cartList} = props
  const getTotalAmount = () => {
    let totalAmount = 0
    cartList.forEach(eachList => {
      totalAmount += eachList.price * eachList.quantity
    })
    return totalAmount
  }
  const cartListLength = cartList.length
  return (
    <div className="cart-summary-container">
      <h1 className="amt-header">
        Order Total:<span className="amount">{getTotalAmount()}</span>/-
      </h1>
      <p className="item-text">{cartListLength} Items in cart</p>
      <button className="button" type="button">
        Checkout
      </button>
    </div>
  )
}
export default CartSummary
