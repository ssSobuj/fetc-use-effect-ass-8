/* eslint-disable no-unused-vars */
import useFetchHook from "../useFetchHook";
import './Photos.css'
export default function Photos() {
    const getCommentData = useFetchHook("https://jsonplaceholder.typicode.com/photos")

    const {fetchdata,error} =getCommentData

  return (
    <div className="container photos">
        <h1>Photos</h1>
        <div className="cards"> 
        {
          fetchdata.slice(0,20).map((photos)=>(
            <div className="card" key={photos.id}>
                <img className="img-1" src={photos.url} alt="photos" />
                <img className="img-2" src={photos.thumbnailUrl} alt="photos" />               
            </div>
          ))
        }
        </div>
    
    </div>
  )
}
