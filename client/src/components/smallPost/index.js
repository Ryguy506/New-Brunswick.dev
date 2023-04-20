
import "./index.css"
import { useEffect, useState } from "react";


const Post = ({postData}) => {

  const [user, setUserData] = useState({});

useEffect(() => {
  if (postData.originalPoster ) {
  fetch(`http://localhost:3003/api/users/${postData.originalPoster}`)
  .then(response => response.json())
  .then(data => setUserData(data))
  .catch(error => console.log(error))
  }
}, [])
 

  return (
    

  <div>

    <div className="card" id="smallpost">
      <div id="posttop">
        <img src={user.image}/>
    <div className="ml-3">
    <p className="has-text-white has-text-weight-bold">{user.name}</p>
    <time className="has-text-white">{postData.date}</time>
    </div>
      </div>
    <div id="postbottom">
    <h1 className="title is-4 has-text-weight-bold has-text-white">{postData.title}</h1>
    {postData.tags && postData.tags.map((tag, index) => (
      <span className="tag is-primary is-light mr-2" key={index}>{tag}</span>
    ))}
    <div className="has-text-white">{`${postData.reactions.length} Comments`}</div>
    </div>
    </div>


    </div>

  


  );
};

export default Post;