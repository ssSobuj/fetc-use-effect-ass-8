/* eslint-disable no-unused-vars */
import useFetchHook from "../useFetchHook";
import "./Comments.css";

export default function Comments() {
  const getCommentData = useFetchHook(
    "https://jsonplaceholder.typicode.com/comments"
  );

  const { fetchdata, error } = getCommentData;

  return (
    <div className="container">
      <h1>Comments</h1>
      <div className="cards">
        {fetchdata.slice(0, 20).map((comment) => (
          <div className="card" key={comment.id}>
            <h5>Id: {comment.id}</h5>
            <h5>Email: {comment.email}</h5>
            <p><b>Body: </b>{comment.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
