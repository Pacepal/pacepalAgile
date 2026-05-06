import CartItem from './CartItem.jsx';

function formatPrice(value) {
  const number = Number(value);
  return Number.isFinite(number) ? `${number.toFixed(2)} EUR` : '0.00 EUR';
}

function Cart({ cart }) {
  return (
    <section className="panel-card" aria-labelledby="cart-title">
      <div className="panel-card__header">
        <h2 id="cart-title">Carrito</h2>
        <span className={`status-pill status-pill--${cart.status === 'error' ? 'error' : 'ok'}`}>
          {cart.count}
        </span>
      </div>
      <p>{cart.message}</p>
      <div className="stack-list">
        {cart.items.map((item) => (
          <CartItem
            key={item.id_articulo}
            item={item}
            onUpdate={cart.updateItem}
            onRemove={cart.removeItem}
          />
        ))}
      </div>
      {cart.items.length === 0 ? <p>Tu carrito esta vacio.</p> : null}
      <div className="summary-box">
        <span>Total</span>
        <strong>{formatPrice(cart.total)}</strong>
      </div>
      <button
        type="button"
        className="primary-button full-width"
        disabled={cart.items.length === 0}
        onClick={cart.checkout}
      >
        Finalizar pedido
      </button>
    </section>
  );
}

export default Cart;
