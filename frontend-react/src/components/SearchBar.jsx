function SearchBar({ query, onQueryChange }) {
  return (
    <section className="panel-card" aria-labelledby="search-bar-title">
      <div className="panel-card__header">
        <h2 id="search-bar-title">Buscador de productos</h2>
        <span className="status-pill status-pill--ok">nombre y descripcion</span>
      </div>
      <input
        className="text-input"
        type="search"
        value={query}
        placeholder="Buscar por nombre o descripcion"
        aria-label="Buscar productos"
        onChange={(event) => onQueryChange(event.target.value)}
      />
    </section>
  );
}

export default SearchBar;
