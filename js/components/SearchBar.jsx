function SearchBar({ query, onQueryChange }) {
  return (
    <div style={{ width: '100%', maxWidth: '280px' }}>
      <input
        id="buscadorProductosInput"
        className="form-control form-control-sm"
        style={{ width: '100%' }}
        type="search"
        value={query}
        placeholder="Buscar por nombre o descripción"
        autoComplete="off"
        aria-label="Buscar productos"
        onChange={(event) => onQueryChange(event.target.value)}
      />
    </div>
  );
}

export default SearchBar;
