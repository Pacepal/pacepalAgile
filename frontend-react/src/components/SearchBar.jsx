function SearchBar({ query, onQueryChange }) {
  return (
    <input
      id="buscadorProductosInput"
      className="form-control"
      style={{ maxWidth: '300px' }}
      type="search"
      value={query}
      placeholder="Buscar por nombre"
      autoComplete="off"
      onChange={(event) => onQueryChange(event.target.value)}
    />
  );
}

export default SearchBar;
