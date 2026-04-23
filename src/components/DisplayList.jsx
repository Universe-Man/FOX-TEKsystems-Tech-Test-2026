import ListItem from "./ListItem";
import "../App.css";

function DisplayList({users}) {
  return (
    <div className="list">
      <ul>
        {users.map((user) => {
          return (
            <ListItem user={user} />
            )
          })}
      </ul>
    </div>
  );
};

export default DisplayList;
