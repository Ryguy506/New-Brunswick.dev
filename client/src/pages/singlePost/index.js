import LargePost from '../../components/largePost';
import React, { useState, useEffect} from 'react';
import { Navigate, useParams } from 'react-router-dom';
import "./index.css"

function SinglePost() {


const [postData, setPostData] = useState({});
  const [error, setError] = useState(null);

  const { id } = useParams();


useEffect(() => {
  fetch(`https://newbrunswick-dev.herokuapp.com/api/projects/${id}`)
  .then(response => response.json())
  .then(data => setPostData(data))
  .catch(error => setError(error))
}, [])







if (error) {
  return <Navigate to="/404" />;
}


return (
  <div id='parent'>
    <LargePost postData={postData}/>
  </div>
 
);
}

export default SinglePost