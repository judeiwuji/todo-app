export function SearchBar(props) {
  const { setSearchTerm } = props;

  return (
    <div className='input-container'>
      <input
        type='search'
        placeholder='Search'
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
}
