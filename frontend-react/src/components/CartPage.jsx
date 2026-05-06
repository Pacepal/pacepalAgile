import Cart from './Cart.jsx';

function CartPage({ cart, onNavigate }) {
  return (
    <main>
      <section className="encabezado-pagina contenedor">
        <h1>Mi carrito</h1>
        <p>Revisa los productos que has anadido antes de finalizar tu pedido.</p>
      </section>

      <section className="seccion-pagina">
        <div className="contenedor">
          <Cart cart={cart} />
          <button type="button" className="boton carrito-volver" onClick={() => onNavigate('tienda')}>
            Seguir comprando
          </button>
        </div>
      </section>
    </main>
  );
}

export default CartPage;
