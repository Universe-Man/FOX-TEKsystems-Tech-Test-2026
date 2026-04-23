import { useState, useEffect } from "react";
import DisplayList from "./components/DisplayList";
import SearchBar from "./components/SearchBar";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const API_URL = "https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    try {
      setError(false);
      setLoading(true);
      fetch(API_URL)
        .then(res => res.json())
        .then(data => {
          setUsers(data);
          setFilteredUsers(data);
        });
    } catch (error) {
      setError(true);
      console.error(`Error: ${error}`);
    } finally {
      setLoading(false);
    };
  }, []);

  useEffect(() => {
    const filteredUsers = users.filter((user) => user.name.toLowerCase().includes(searchTerm.toLowerCase()));
    setFilteredUsers(filteredUsers);
  }, [searchTerm]);

  return (
    <div className="container">
      <h2>Search Users By Name</h2>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      {filteredUsers && filteredUsers.length > 0 ? (
        <DisplayList users={filteredUsers} />
      ) : error ? (
        "Error!"
      ) : loading ? (
        "Loading..."
      ) : (
        "No Results Found."
      )}
    </div>
  );
};

export default App;
