import CartItem from './CartItem.jsx';

function formatPrice(value) {
  const number = Number(value);
  return Number.isFinite(number) ? `${number.toFixed(2)} EUR` : '0.00 EUR';
}

function Cart({ cart, onNavigate }) {
  function goToShop(event) {
    event.preventDefault();
    onNavigate('tienda');
  }

  function goToProfile(event) {
    event.preventDefault();
    onNavigate('perfil');
  }

  const orderCompleted = cart.message.startsWith('Pedido realizado correctamente');

  return (
    <>
      <div id="contenido-carrito" aria-live="polite">
        {cart.items.length === 0 && !orderCompleted ? (
          <>
            <p>Tu carrito esta vacio.</p>
            <a href="#tienda" className="boton boton--primario mt-2 d-inline-block" onClick={goToShop}>
              Ir a la tienda
            </a>
          </>
        ) : null}

        {cart.items.map((item) => (
          <CartItem key={item.id_articulo} item={item} onUpdate={cart.updateItem} onRemove={cart.removeItem} />
        ))}

        {cart.items.length > 0 ? (
          <>
            <div className="d-flex justify-content-between align-items-center mt-4">
              <span className="fs-5 fw-bold">Total:</span>
              <span className="fs-5 fw-bold">{formatPrice(cart.total)}</span>
            </div>

            <div className="d-flex gap-3 mt-3 flex-wrap">
              <button type="button" className="boton boton--primario" onClick={cart.checkout}>
                Finalizar pedido
              </button>
              <a href="#tienda" className="boton" onClick={goToShop}>
                Seguir comprando
              </a>
            </div>
          </>
        ) : null}

        {orderCompleted ? (
          <>
            <a href="#perfil" className="boton boton--primario mt-3 d-inline-block" onClick={goToProfile}>
              Ver mis pedidos
            </a>
            <a href="#tienda" className="boton mt-3 ms-2 d-inline-block" onClick={goToShop}>
              Seguir comprando
            </a>
          </>
        ) : null}
      </div>
      <div id="mensaje-carrito" className="mt-3">
        {cart.message ? (
          <p className={cart.message.includes('Error') || cart.message.includes('No se') || cart.message.includes('Acceso') ? 'text-danger fw-bold' : 'text-success fw-bold'}>
            {cart.message}
          </p>
        ) : null}
      </div>
    </>
  );
}

export default Cart;
