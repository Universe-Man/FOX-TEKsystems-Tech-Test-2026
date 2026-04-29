import ListItem from "./ListItem";
import "../App.css";

function DisplayList({users, time}) {
  return (
    <div className="list">
      {time}
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
