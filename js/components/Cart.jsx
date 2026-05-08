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

            <div className="acciones-pagina">
              <a href="#tienda" className="boton boton--volver" onClick={goToShop}>
                ← Seguir comprando
              </a>
              <button type="button" className="boton boton--primario boton--accion" onClick={cart.checkout}>
                Finalizar pedido
              </button>
            </div>
          </>
        ) : null}

        {orderCompleted ? (
          <>
            <div className="acciones-pagina">
              <a href="#tienda" className="boton boton--volver" onClick={goToShop}>
                ← Seguir comprando
              </a>
              <a href="#perfil" className="boton boton--primario boton--accion" onClick={goToProfile}>
                Ver mis pedidos
              </a>
            </div>
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
