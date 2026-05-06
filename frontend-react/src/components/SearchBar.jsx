function SearchBar({ query, onQueryChange }) {
  return (
    <div className="buscador-react" aria-labelledby="search-bar-title">
      <span id="search-bar-title" className="visually-hidden">Buscador de productos</span>
      <input
        className="form-control"
        type="search"
        value={query}
        placeholder="Buscar por nombre"
        aria-label="Buscar productos"
        autoComplete="off"
        onChange={(event) => onQueryChange(event.target.value)}
      />
    </div>
  );
}

export default SearchBar;
