/* eslint-disable no-unused-vars */
import useFetchHook from "../useFetchHook";

import "./Users.css";
export default function Users() {
  const getCommentData = useFetchHook(
    "https://jsonplaceholder.typicode.com/users"
  );

  const { fetchdata, error } = getCommentData;

  return (
    <div className="container">
      <h1>Users</h1>
      <div className="cards">
        {fetchdata.map((user) => (
          <div className="card" key={user.id}>
            <h5>{user.name}</h5>
            <p>{user.email}</p>
            <p>{user?.address?.street}</p>
            <p>{user?.address?.city}</p>
            <p>{user?.address?.zipcode}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
