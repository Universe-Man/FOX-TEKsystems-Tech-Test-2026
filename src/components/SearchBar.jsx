import "../App.css";

function SearchBar({searchTerm, setSearchTerm}) {

  return (
    <input
      className="searchbar"
      type="text"
      placeholder="Search Users"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  );
};

export default SearchBar;
