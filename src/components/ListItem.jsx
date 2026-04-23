import "../App.css";

function ListItem({user}) {
  return (
    <li key={user.id} className="item">
      {user.name} | {user.email} | {user.phone} | {user.website}
    </li>
  );
};

export default ListItem;
