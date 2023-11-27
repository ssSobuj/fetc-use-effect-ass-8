/* eslint-disable no-unused-vars */
import useFetchHook from "../useFetchHook";
import "./Posts.css";

export default function Posts() {
  const getCommentData = useFetchHook(
    "https://jsonplaceholder.typicode.com/posts"
  );

  const { fetchdata, error } = getCommentData;
  return (
    <div className="container">
      <h1>Posts</h1>
      <div className="cards">
        {fetchdata.slice(0, 20).map((post) => (
          <div className="card" key={post.id}>
            <h5>Title: {post.title}</h5>
            <p><b>Body: </b>{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
