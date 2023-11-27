/* eslint-disable no-unused-vars */
import useFetchHook from "../useFetchHook";
import "./Todos.css";
export default function Todos() {
  const getCommentData = useFetchHook(
    "https://jsonplaceholder.typicode.com/todos"
  );
  const { fetchdata, error } = getCommentData;

  return (
    <div className="container">
      <h1>Todos</h1>

      <div className="cards">        
        {fetchdata.slice(0,20).map((todo) => (
          <div className="card" key={todo.id}>
            <h3>UserId: {todo.userId}</h3>
            <p>
              <b>Title: </b>
              {todo.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
