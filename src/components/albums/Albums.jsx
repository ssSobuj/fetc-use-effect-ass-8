/* eslint-disable no-unused-vars */

import useFetchHook from "../useFetchHook";
import "./Albums.css";

export default function Albums() {
  const getAlbumsdDatas = useFetchHook(
    "https://jsonplaceholder.typicode.com/albums"
  );

  const { fetchdata, error } = getAlbumsdDatas;

  console.log(error);

  return (
    <>
      
      <div className="container">
        <h1>Albums</h1>
        <div className="cards">
          {fetchdata.slice(0, 20).map((album) => (
            <div className="card" key={album.id}>
              <p>
                <b>UserId: </b>
                {album.userId}
              </p>
              <h5>title: {album.title}</h5>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
