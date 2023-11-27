
import Photos from '../photos/Photos';
import Todos from '../todos/Todos';
import Users from '../users/Users';
import Albums from './../albums/Albums';
import Comments from './../comments/Comments';
import Posts from './../posts/Posts';

import './Home.css'

export default function Home() {
  return (
    <>
        <div className='Home'>
            <Albums />
            <Comments />
            <Photos />
            <Posts />
            <Users />
            <Todos />
        </div>
    </>
  )
}
