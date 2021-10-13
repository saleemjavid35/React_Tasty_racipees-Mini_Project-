import './index.css'

const Counter = props => {
  const {quantity, onIncrement, onDecrement} = props

  const onClickDecrement = () => {
    onDecrement()
  }

  const onClickIncrement = () => {
    onIncrement()
  }

  return (
    <div className="counter-container">
      <button
        type="button"
        onClick={onClickDecrement}
        className="button"
        testid="decrement-count"
      >
        -
      </button>
      <div className="quantity" testid="active-count">
        {quantity}
      </div>
      <button
        type="button"
        onClick={onClickIncrement}
        className="button"
        testid="increment-count"
      >
        +
      </button>
    </div>
  )
}

export default Counter
