import LargePost from '../../components/largePost';
import React, { useState, useEffect } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import "./index.css"
function SinglePost() {
    

const [postData, setPostData] = useState({});
  const [commentData, setCommentData] = useState([]);
  const [error, setError] = useState(null);

  const { id } = useParams();


 useEffect( () =>{
fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
.then(response => response.json())
.then(data => setPostData(data))
.catch(error => setError(error))
}, [id]);


useEffect( () =>{
fetch(`https://jsonplaceholder.typicode.com/users`)
.then(response => response.json())
.then(data => setCommentData(data))
}, []);




// useEffect(() => {
//   console.log(commentData);
// }, [commentData]);


// useEffect(() => {
//   console.log(postData);
// }, [postData]);


if (error) {
  return <Navigate to="/404" />;
}


return (
  <div id='parent'>
    <LargePost postData={postData} commentData={commentData}/>
  </div>
 
);
}

export default SinglePost